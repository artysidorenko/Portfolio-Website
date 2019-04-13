// toggle hamburger icon

function rotate(x) {
  x.classList.toggle("change");
}

// enable tooltips on bioPage
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function(){

  // animate navbar - only appear past the welcome screen:
  $('.navbar__nav').hide();
  $('.section__title').hide();
  $(window).scroll(function() {
    if ($(document).scrollTop() > 600) {
      $('.bio__title').show(500);
    }
    if ($(document).scrollTop() > 900) {
      $('.navbar').show();
    }
    else $('.navbar').hide();
    if ($(document).scrollTop() > 1600) {
      $('.portfolio__title').show(500);
    }
  });

  // modal opens up when clicking on project img

  // Script to be applied similarly to each project thumbnail

  var projects = ['ghstats', 'markdown', 'pizza', 'leghorn', 'drum'];
  projects.forEach(function(elem) {
    // Modal opens up upon clicking project container (the hover overlay)
    $('.' + elem + '__container').click(function() {
      $('.' + elem + '__modal').css('display', 'flex');
      // On open attach new event listener: Modal closes upon clicking X or hitting Escape
      $('.' + elem + '__close').click(function() {
        $('.' + elem + '__modal').css('display', 'none');
      });
      $(window).keydown(function(event) {
        if (event.key == 'Escape') {
          $('.' + elem + '__modal').css('display', 'none');
        }
      });

      // $('.' + elem + '__modal').addClass('.modal__container--visible');
      // // On open attach new event listener: Modal closes upon clicking X or hitting Escape
      // $('.' + elem + '__close').one('click', function() {
      //   $('.' + elem + '__modal').removeClass('.modal__container--visible');
      // });
      // $(window).one('keydown', function(event) {
      //   if (event.key == 'Escape') $('.' + elem + '__modal').removeClass('.modal__container--visible');
      // });
    });
  });


});
