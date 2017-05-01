jQuery(document).ready(function() {
  
  //////////////////////////////////////////
  // DISEASE - Client Buttons and Sliders //
  //////////////////////////////////////////
  
  // when student clicks stepsize slider
  $("#netlogo-slider-26").click(function() {
    var stepsize = +$("#netlogo-slider-26 .netlogo-slider-value input").val();
    socket.emit("send command", {hubnetMessageTag: "step-size", hubnetMessage: stepsize});
  });
  
  //////////
  // END  //
  //////////
  
  // when student clicks on button on Student Interface
  $(".netlogo-widget-container").on("click", ".student-button", function() {
    socket.emit("send command", {hubnetMessageTag: $(this).text().trim(), hubnetMessage:""});
  });
  
  // when user clicks on Create Room Button on Login Interface
  $(".netlogo-widget-container").on("click", ".create-room-button", function() {
    var myRoom = $(".create-room-input").val();
    socket.emit("enter room", {room: myRoom});
  });
  
  // when user clicks on Room Button on Login Interface
  $(".netlogo-widget-container").on("click", ".join-room-button", function() {
    var myRoom = $("#"+$(this).attr("id")+" span").html();
    socket.emit("enter room", {room: myRoom});
  });
});