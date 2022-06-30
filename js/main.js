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
    console.log(blob.getAttribute('fill'))
    const svgPath = blobs2.svgPath({
      seed: Math.random(),
      extraPoints: 8,
      randomness: 4,
      size: 256,
    });
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    path1.setAttribute('d', svgPath);
    path1.setAttribute('fill', blob.getAttribute('fill'))
    var path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    path2.setAttribute('d', svgPath);
    path2.setAttribute('transform', 'scale(0.9375,0.9375)translate(8 8)')
    path2.setAttribute('fill', blob.getAttribute('fill2'))
    var title = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    title.textContent = blob.getAttribute("title")
    title.setAttribute('x', '50%');
    title.setAttribute('y', '50%');
    title.setAttribute('text-anchor', 'middle')
    var description = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    description.textContent = blob.getAttribute("description")
    description.setAttribute('width', '30%')
    description.setAttribute('x', '50%');
    description.setAttribute('y', '60%');
    description.setAttribute('text-anchor', 'middle')
    svg.appendChild(path1);
    svg.appendChild(path2);
    svg.appendChild(title);
    svg.appendChild(description)
    svg.setAttribute('width', '100%');
    svg.setAttribute('viewBox', '0 0 256 256');
    svg.setAttribute('id', `blogblob${i}`);
    var s = new XMLSerializer().serializeToString(svg)
    var encodedData = window.btoa(s);
    console.log(`data:image/svg+xml;base64,${encodedData}`)
    blob.style.backgroundImage = `url(data:image/svg+xml;base64,${encodedData})`;
    blob.style.backgroundRepeat = 'no-repeat';
    blob.style.backgroundPosition = 'center';
    svg.setAttribute('visibility', 'hidden');

}









