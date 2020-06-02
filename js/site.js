// Hide side navbar with toggle button
$(".toggle-btn").on("click", function(){
  $("#sidebar-wrapper").hide();
});

//Print user input in console.console console log
$(".text-input").keypress(function(event){
  console.log(event.key);
});
