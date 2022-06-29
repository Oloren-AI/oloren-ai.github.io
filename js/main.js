(function ($) {
  "use strict";

  // offcanvas-js
  $('.offcanvas-open').click(function() {
    $('.offcanvas-menu').addClass('active');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.offcanvas-menu a').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.close-offcanvas').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function(e){
    var container = $(".offmenu");
  
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.offcanvas-menu').removeClass('active');
      $('.offcanvas-overlay').removeClass('active');
    }
  });


  $('input[type="checkbox"]').closest('label').css('cursor','pointer');
  $('input[type="radio"]').closest('label').css('cursor','pointer');
  


  // popup-video
  $('.popup-video').magnificPopup({
  type: 'iframe'
  });

})(jQuery);

$(document).ready(function(){

  // scroll up
  $(function(){
    $.scrollUp();
  });

  // preloader
  $("#preloader").fadeOut(500);

})

var blobs = document.getElementsByClassName('blob');
for (var i = blobs.length-1; i >= 0; --i) {
    var blob = blobs[i];  
    console.log("BLOB")
    const svgPath = blobs2.svgPath({
      seed: Math.random(),
      extraPoints: 8,
      randomness: 4,
      size: 256,
    });
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    path1.setAttribute('d', svgPath);
    svg.appendChild(path1);
    svg.setAttribute('width', 256);
    svg.setAttribute('height', 256);
    blob.appendChild(svg);
}









