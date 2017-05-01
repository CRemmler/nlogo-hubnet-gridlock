Interface = (function() {

  var items = {};

  function displayLoginInterface(rooms, components) {
    var roomButtonHtml, roomButtonId;
    setupItems();
    $(".netlogo-tab-area").addClass("hidden");
    $(".netlogo-export-wrapper").css("display","none");   
    $(".netlogo-speed-slider").css("display","none");
    $(".admin-body").css("display","inline");
    showItems(components.componentRange[0], components.componentRange[1]);
    $(components.createRoomButton).addClass("create-room-button");
    $(".netlogo-button:not(.hidden):not(.create-room-button)").addClass("join-room-button");
    $(components.createRoomInput).addClass("create-room-input");
    $(".join-room-button").addClass("hidden");
    for (var i=0; i<rooms.length; i++) {
      roomButtonHtml = "<div class='netlogo-button-agent-context'>"+
        "<span class='netlogo-label'>"+rooms[i]+"</span></div>";
      roomButtonId = components.joinRoomButtons[i];
      $(roomButtonId).html(roomButtonHtml);
      $(roomButtonId).removeClass("hidden");
    }
  }

  function displayTeacherInterface(room, components) {
    showItems(components.componentRange[0], components.componentRange[1]);
    $("#netlogo-title").append(" Room: "+room);
    $(".netlogo-view-container").removeClass("hidden");
    $(".netlogo-tab-area").removeClass("hidden");
    $(".admin-body").css("display","none"); 
  }
  
  function displayStudentInterface(room, components) {
    showItems(components.componentRange[0], components.componentRange[1]);
    $("#netlogo-title").append(" Room: "+room);
    $(".netlogo-view-container").removeClass("hidden");
    $(".admin-body").css("display","none");
    $(".netlogo-button:not(.hidden)").addClass("student-button"); 
  }
  
  function displayDisconnectedInterface() {
    $(".admin-body").css("display","inline");
    $(".admin-body").html("You have been disconnected. Please refresh the page to continue.");
    $("#netlogo-model-container").addClass("hidden");
  }
  
  function displayAdminInterface(rooms) {
    $("#noRoomsChosen").css("display","none");
    $("#netlogo-model-container").addClass("hidden");
    $("#admin-data").html(rooms);
  }
  
  function clearRoom(roomName) {
    socket.emit("clear room", {roomName: roomName});
    //$("#submitRoomString").trigger("click");
  }
  
  function setupItems() {
    var key, value, id;
    $(".netlogo-widget").each(function() {
      id = $(this).attr("id");
      if (id) { 
        key = parseInt(id.replace(/\D/g,''));
        if (key) {
          value = id;
          items[key] = value;
        }
      }
    });
  }

  function showItems(min, max) {
    console.log(min);
    $(".netlogo-widget").addClass("hidden");
    $(".netlogo-model-title").removeClass("hidden");
    for (var i=min; i<=max; i++) {
      $("#"+items[i]).removeClass("hidden");
    }
  }

  return {
    showLogin: displayLoginInterface,
    showTeacher: displayTeacherInterface,
    showStudent: displayStudentInterface,
    showDisconnected: displayDisconnectedInterface,
    showAdmin: displayAdminInterface,
    clearRoom: clearRoom
  };

})();