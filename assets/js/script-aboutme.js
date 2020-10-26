function toggle_more(){
  $( "#cv" ).slideToggle();
  $( "#showmoreCont" ).slideToggle();
  $('html, body').animate({
        scrollTop: $("#cv").offset().top
    }, 1000);
};

function toggle_less(){
  $( "#cv" ).slideToggle('slow');
  $( "#showmoreCont" ).slideToggle();
  $('html, body').animate({
        scrollTop: 0
    }, 1000);

};

