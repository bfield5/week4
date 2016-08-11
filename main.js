/*
=======================================================

** Week 4 - Project 1 **
*** jQuery! ***

For any methods that we didn't cover, please refer to the jQuery documentation.
https://api.jquery.com/

BASIC TRACK: 1-8
ADVANCED TRACK: 9-12
=======================================================
*/

// Add your JS here.
$(document).ready(function() {
  $('.hideMe').click(function() {
    $(this).hide();
  })
$('.changeColor').click(function() {
  $('ul li:eq(2)').css("color", "#8A2BE2");
});
$('ul li:eq(3)').click(function() {
  $(this).append("<li>new list item</li>");
});
$("#removeLi").click(function() {
  $("ul li:eq(1)").remove();
});
$("ul li:last").click(function() {
  $(this).css('font-size', '40px');
  $('ul li:not(:last)').hide();
});
$(".cute").one("click", function() {
  $(this).clone(".cute").insertAfter(".cute");
});
$("#makeSquare").dblclick(function() {
  $(this).css('border-radius', '0px');
});
$("#dontClick").click(function() {
  alert("CAN'T YOU READ! DON'T CLICK THE BUTTON!");
});
$(".black.swatch").click(function() {
  $("body").css("background-color", "black");
});
$(".wood.swatch").click(function() {
  $("body").css("background-image", "url(http://phandroid.s3.amazonaws.com/wp-content/uploads/2015/03/wood-wallpaper-3.jpg)");
});
$(".chaos.swatch").click(function() {
  $("body").css("background-image", "url(http://www.henderson-art.co.uk/art/wallpaper/chaos.jpg)");
});
$(".restore.swatch").click(function() {
  $("body").css("background-color", "white");
});
$("#hover").hover(function() {
  $(this).css("background-color", "red");
    $("#hover").click(function() {
      $(this).css("background-color", "green");
        $("#hover").click(function() {
          $(this).css("background-color", "");
        });
    });
});


});
