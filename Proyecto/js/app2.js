
$(document).ready(function(){
      $('.parallax').parallax();
    });


$(document).ready(function(){
      $('.carousel').carousel();
    });

$(document).ready(function(){
      $('.modal').modal();
    });

$(document).ready(function(){
    $('.collapsible').collapsible();
  });


$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  });



$(document).ready(function(){
  $('.carousel').carousel({dist:0});
        window.setInterval(function(){$('.carousel').carousel('next')},2500)

});


