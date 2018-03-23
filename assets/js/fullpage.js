$('#fullpage').fullpage({
  // sectionsColor: [   '#ffffff', '#f1f1f1', '#ffffff', '#f1f1f1', '#ffffff' ],
  // sectionSelector: '.vertical-scrolling', slideSelector:
  // '.horizontal-scrolling', navigation: true, navigationTooltips: [   `<span//
  // class="fui-home"></span>`, 'Before', 'During', 'After' ],
  // showActiveTooltip:// true,
  slidesNavigation: true,
  autoScrolling: false,
  scrollBar: true,
  // scrollOverflowReset: true, controlArrows: false, scrollBar: true,
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

  },

  afterLoad: function (anchorLink, index) {
    $(".section").css({"visibility": "visible"});
  },

  onLeave: function (index, nextIndex, direction) {
    // if (index != 0) {   $('#fp-nav').show(); }
  },

  afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {

  },

  onSlideLeave: function (anchorLink, index, slideIndex, direction) {}
});


$('document').ready(function(){
  skrollr.init({
    smoothScrolling: true,
    forceHeight: true,
    mobileCheck: function () {
        if ((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
            // mobile device
        }
    }
});
  bindScroll();
});