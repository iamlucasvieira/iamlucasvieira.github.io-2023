function toggle_more(){
  $( "#cv" ).slideToggle();
  $( "#showmoreCont" ).slideToggle();
  $('html, body').animate({
        scrollTop: $("#cv").offset().top
    }, 1000);
};

