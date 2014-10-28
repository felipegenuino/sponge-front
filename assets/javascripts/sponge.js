// Performs a smooth page scroll to an anchor on the same page.
// http://css-tricks.com/snippets/jquery/smooth-scrolling/

    // $(function() {
    //   $('a[href*=#]:not([href=#])').click(function() {
    //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //       if (target.length) {
    //         $('html,body').animate({
    //           scrollTop: target.offset().top
    //         }, 1000);
    //         return false;
    //       }
    //     }
    //   });
    // });




//Forçar o foco no input de pesquisa
$('.input-search').focus();




//mansory

$(document).ready(function(){
  var $container = $('.container-blocks-campaign');

  $container.imagesLoaded( function() {
    $container.masonry({
      itemSelector        : '.block-campaign',
      columnWidth         : '.block-campaign',
      transitionDuration  : 0,
    });
  });
});



 

$(document).on('click', '.yamm .dropdown-menu', function(e) {
  e.stopPropagation()
})



 
 

