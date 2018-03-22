// // variables var $header_top = $('.header-top'); var $nav = $('nav'); //
// toggle menu $header_top   .find('a')   .on('click', function () {     $(this)
//       .parent()       .toggleClass('open-menu');   }); fullpage customization
$('#fullpage').fullpage({
  // sectionsColor: [   '#ffffff', '#f1f1f1', '#ffffff', '#f1f1f1', '#ffffff' ],
  // sectionSelector: '.vertical-scrolling', slideSelector:
  // '.horizontal-scrolling', navigation: true, navigationTooltips: [   `<span//
  // class="fui-home"></span>`, 'Before', 'During', 'After' ],
  // showActiveTooltip:// true,
  slidesNavigation: true,
  scrollOverflow: true,
  autoScrolling: true,
  scrollOverflowReset: true,
  // controlArrows: false,
  scrollBar: true,
  scrollingSpeed: 1000,
  // css3: false,
  anchors: [
    'firstSection', 'secondSection', 'thirdSection', 'fourthSection'
  ],
  menu: '#menu',

  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  afterLoad: function (anchorLink, index) {
    // $header_top.css('background', 'rgba(0, 47, 77, .3)'); $nav.css('background',
    // 'rgba(0, 47, 77, .25)'); if (index == 1) {     $('#fp-nav').hide();   }
  },

  onLeave: function (index, nextIndex, direction) {
    // if (index != 0) {   $('#fp-nav').show(); }
  },

  afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
    // if(anchorLink == 'fifthSection' && slideIndex == 1) {
    // $.fn.fullpage.setAllowScrolling(false, 'up');   $header_top.css('background',
    // 'transparent');   $nav.css('background', 'transparent');
    // $(this).css('background', '#374140');   $(this).find('h2').css('color',
    // 'white');   $(this).find('h3').css('color', 'white'); $(this).find('p').css(
    //   {       'color': '#DC3522',       'opacity': 1,    'transform':
    // 'translateY(0)'     }   ); }
  },

  onSlideLeave: function (anchorLink, index, slideIndex, direction) {
    // if(anchorLink == 'fifthSection' && slideIndex == 1) {
    // $.fn.fullpage.setAllowScrolling(true, 'up'); $header_top.css('background',
    // 'rgba(0, 47, 77, .3)'); $nav.css('background', 'rgba(0, 47, 77, .25)'); }
  }
});
