$(document).ready(function() {
  
  // Blog read more
  
//  $('.blog').on('click', '.read-more', function(e) {
//    event.preventDefault();
//    var context = $(this).closest('article'),
//    url = $(this).attr('href'),
//    title = $('h1', context).html();

//    context.load(url + ' #post', function() {
//      context.find('a.twitter-share').attr('href',
//        'http://twitter.com/share?text=' + title + '&url=' + window.location.protocol + '//' + window.location.host + url);
//    });
//  });

  // Contact us

  var formWrap = $('.section-contact'),
      form = $('#contact-form');

  $('.contact-form-toggle').on('click', function() {
    formWrap.toggleClass('collapsed');
    $('.contact-form-toggle').toggleClass('toggled');

    if(!formWrap.hasClass('collapsed')) {
      $('html,body').animate({scrollTop: formWrap.offset().top - 55}, 500);
      $('.contact-form-name').focus();
    }
  });

  var l = $('button[type=submit]', form).ladda();

  form.validate();

  form.on('submit', function(e) {
    e.preventDefault();

    if(form.valid()) {
      l.ladda( 'start' );

      $.post(form.attr('action'), form.serialize())
      .success(function() {
        l.ladda( 'stop' );
        $('.form-container', formWrap).hide();
        $('.success', formWrap).removeClass('hide');
      })
      .fail(function() {
        l.ladda( 'stop' );
        $('.failure', formWrap).removeClass('hide');
      });
    }

  });

//  window.setInterval(function() {
//    var next = $('.carousel-caption.active').removeClass('active').next();
//    if(next.length) {}
//    next = next[0] || $('.carousel-caption').first()[0];
//    $(next).addClass('active');
//  }, 6000);

//});

// Paralax effect for home page hero image
  var jumboHeight = $('.jumbotron').outerHeight();
  function parallax(){
    var scrolled = $(window).scrollTop();
//    $('.firstPage-hero-bg').css('height', (jumboHeight-scrolled) + 'px');
    $('.jumbotron').css('height', 100-(scrolled/2) + 'vh');
  }

  $(window).scroll(function(e){
    parallax();
  });

// Animation (face up) when item comes into Viewport
//    $('.animated').viewportChecker();
    
var images = ['Hero-1', 'Hero-2', 'Hero-3', 'Hero-4', 'Hero-5', 'Hero-6'];
var mq = window.matchMedia('all and (max-width: 768px)');

if(mq.matches) {
  $('.jumbotron').css({'background-image': 'url(../images/' + images[Math.floor(Math.random() * images.length)] + '@0.5x.jpg)'});
    } else {
   $('.jumbotron').css({'background-image': 'url(../images/' + images[Math.floor(Math.random() * images.length)] + '.jpg)'});
    }
});