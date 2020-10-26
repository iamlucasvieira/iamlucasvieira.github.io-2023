function toggle_more(){
  $( "#cv" ).slideToggle('slow');
  $( "#showmoreCont" ).toggle("slow");
  $('html, body').animate({
        scrollTop: $("#cv").offset().top
    }, 1500);
};

