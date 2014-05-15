//= require bootstrap/affix
//= require bootstrap/alert
//= require bootstrap/button
//= require bootstrap/carousel
//= require bootstrap/collapse
//= require bootstrap/dropdown
//= require bootstrap/tab
//= require bootstrap/transition
//= require bootstrap/scrollspy
//= require bootstrap/modal
//= require bootstrap/tooltip
//= require bootstrap/popover

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
