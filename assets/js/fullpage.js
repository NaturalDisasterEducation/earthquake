$('.btn[data-toggle=modal]').on('click', function () {
  $.fn.fullpage.destroy('all');
  fullpageNotAutoScroll();
});

$("btn.infoPage_home").on("click", function(){
  $.fn.fullpage.destroy('all');
  fullpageAutoScroll();
})

function fullpageAutoScroll(){
  $('#fullpage').fullpage({
    // sectionsColor: [   '#ffffff', '#f1f1f1', '#ffffff', '#f1f1f1', '#ffffff' ],
    // sectionSelector: '.vertical-scrolling', slideSelector:
    // '.horizontal-scrolling', navigation: true, navigationTooltips: [   `<span//
    // class="fui-home"></span>`, 'Before', 'During', 'After' ],
    // showActiveTooltip:// true,
    slidesNavigation: true,
    autoScrolling: true,
    scrollBar: true,
    fitToSectionDelay: 0,
    scrollOverflowReset: true,
    // scrollingSpeed: 1000, css3: false,
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
    },
  
    onLeave: function (index, nextIndex, direction) {
      // if (index != 0) {   $('#fp-nav').show(); }
    },
  
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {},
  
    onSlideLeave: function (anchorLink, index, slideIndex, direction) {}
  });
}

function fullpageNotAutoScroll(){
  $('#fullpage').fullpage({
    // sectionsColor: [   '#ffffff', '#f1f1f1', '#ffffff', '#f1f1f1', '#ffffff' ],
    // sectionSelector: '.vertical-scrolling', slideSelector:
    // '.horizontal-scrolling', navigation: true, navigationTooltips: [   `<span//
    // class="fui-home"></span>`, 'Before', 'During', 'After' ],
    // showActiveTooltip:// true,
    slidesNavigation: true,
    autoScrolling: false,
    scrollBar: true,
    fitToSectionDelay: 0,
    scrollOverflowReset: true,
    // scrollingSpeed: 1000, css3: false,
    anchors: [
      'firstSection', 'secondSection', 'thirdSection', 'fourthSection'
    ],
    menu: '#menu',
  
    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
  
    afterRender: function () {},
  
    afterLoad: function (anchorLink, index) {
      $(".section").css({"visibility": "visible"});
    },
  
    onLeave: function (index, nextIndex, direction) {
      // if (index != 0) {   $('#fp-nav').show(); }
    },
  
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {},
  
    onSlideLeave: function (anchorLink, index, slideIndex, direction) {}
  });
}

$('document').ready(function () {
  fullpageAutoScroll();
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