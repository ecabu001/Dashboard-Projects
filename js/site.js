// Hide side navbar with toggle button
$(".hide-btn").on("click", function(){
  $("#sidebar-wrapper").hide();
});

//Show side navbar
$(".show-btn").on("click", function(){
  $("#sidebar-wrapper").show();
});

//Print user input in console.console console log
$(".text-input").keypress(function(event){
  console.log(event.key);
});
