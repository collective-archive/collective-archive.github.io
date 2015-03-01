var triggerBuild = function(callback) {
  $.get('http://collective-archive-deployer.herokuapp.com/deploy', function() {
    console.log('success');
    callback();
  });
}

$(function() {
  $('.reload-content').click(function(e) {
    $button = $(this);

    triggerBuild(function() {
      $('footer').html('<p>The site will be rebuilt shortly.</p>');
    });

    e.preventDefault();
    return false;
  });
});

window.CA = window.CA || {};

CA.ImageCarousel = function() {
  return {
    init: function() {
      $('.image-carousel').slick({
        arrows: true,
        dots: true,
        prevArrow: '.image-carousel-prev',
        nextArrow: '.image-carousel-next',
        onInit: function(slider) {
          if(slider.slideCount > 1) {
            $('.image-carousel-button').show();
          }

          $('.image-carousel img').show();
        }
      });
    }
  }
}();

window.CA = window.CA || {};

CA.Search = function() {
  return {
    init: function() {
      $('#search-input').lunrSearch({
        indexUrl: '/search_index.json',
        results : '#search-results',
        entries : '.entries',
        render:   function(entries) {
          return $.map(entries, function(entry) {
            return entry.html;
          });
        }
      });
    }
  };
}();


window.CA = window.CA || {};

CA.SocialMedia = function() {
  return {
    init: function() {
      $('.social-twitter').data('via', document.URL);
      $('.social-facebook').attr('href', "http://www.facebook.com/sharer/sharer.php?s=100&amp;p[url]=" + document.URL);
      $('.social-pinterest').attr('href', "http://pinterest.com/pin/create/button/?url=" + document.URL + "&media=" + $('.fancybox img').attr('src'))
    }
  };
}();

window.CA = window.CA || {};

CA.Tabs = function() {
  return {
    selectFirstTab: function() {
      $('.nav-tabs a:first').tab('show');
    }
  };
}();
