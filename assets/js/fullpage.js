$('.btn[data-toggle=modal]').on('click', function () {
  $.fn.fullpage.destroy('all');
  fullpage(false);
});

$("btn.infoPage_home").on("click", function(){
  $.fn.fullpage.destroy('all');
  fullpage(true);
})

function fullpage(autoScroll){
  $('#fullpage').fullpage({
    // sectionsColor: [   '#ffffff', '#f1f1f1', '#ffffff', '#f1f1f1', '#ffffff' ],
    // sectionSelector: '.vertical-scrolling', slideSelector:
    // '.horizontal-scrolling', navigation: true, navigationTooltips: [   `<span//
    // class="fui-home"></span>`, 'Before', 'During', 'After' ],
    // showActiveTooltip:// true,
    slidesNavigation: true,
    autoScrolling: autoScroll,
    scrollBar: true,
    fitToSectionDelay: 0,
    scrollOverflowReset: true,
    // scrollingSpeed: 1000, 
    anchors: [
      'firstSection', 'secondSection', 'thirdSection', 'fourthSection'
    ],
    menu: '#menu',
  
    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
  
    afterRender: function () {
      $(".section").css({"visibility": "visible"});
    },
  
    afterLoad: function (anchorLink, index) {
      if(index == 4){
        $("#after_shelf").addClass("after_phone_sprite");
      }else{
        $("#after_shelf").removeClass("after_phone_sprite");
      }
    },
  
    onLeave: function (index, nextIndex, direction) {

    },
  
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
    },
  
    onSlideLeave: function (anchorLink, index, slideIndex, direction) {}
  });
}

$('document').ready(function () {
  fullpage(true);
  skrollr.init({
    smoothScrolling: true,
    forceHeight: true,
    mobileCheck: function () {
      if ((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        // mobile device
      }
    }
  });
});