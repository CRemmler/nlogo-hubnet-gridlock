var socket;
var universe;
var commandQueue = [];

jQuery(document).ready(function() {
  var userId;
  var userType;
  var turtleDict = {};
  socket = io();

  // show first screen, ask user to enter room
  //Interface.showLogin();

  // save student settings
  socket.on("save settings", function(data) {
    userId = data.userId; 
    userType = data.userType; 
  });
  
  // display teacher or student interface
  socket.on("display interface", function(data) {
    switch (data.userType) {
      case "teacher":
        Interface.showTeacher(data.room, data.components);
        break;
      case "student":
        Interface.showStudent(data.room, data.components);
        break;
      case "login":
        Interface.showLogin(data.rooms, data.components);
        break;
      case "disconnected":
        Interface.showDisconnected();
        break;
    }
  });
  
  // display admin interface
  socket.on("display admin", function(data) {
    Interface.showAdmin(data.roomData);
  });

  // student repaints most recent changes to world
  socket.on("send update", function(data) {
    universe.applyUpdate({turtles: data.turtles, patches: data.patches});
    universe.repaint();
  });  
  
  socket.on("display admin", function(data) {
    $("#adminData").html(data.roomData);
  });

  // students display reporters
  socket.on("display reporter", function(data) {
    $(data.components[data.hubnetMessageTag]).html(data.hubnetMessage);
  });
  
  socket.on("execute command", function(data) {
    var commandObject = {};
    commandObject.messageSource = data.hubnetMessageSource;
    commandObject.messageTag = data.hubnetMessageTag;
    commandObject.message = data.hubnetMessage;
    commandQueue.push(commandObject);
    world.hubnetManager.setHubnetMessageWaiting(true);
  });
  
  // student leaves activity and sees login page
  socket.on("teacher disconnect", function(data) {
    Interface.showDisconnected();
  });
  
});
