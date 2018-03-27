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

    duringLoad: function (anchorLink, index) {
        if(index == 3){
            $(".during-table .during-lamp .during-stove .during-shelf-1 .during-shelf-2 .during-cutlery").addClass("during-elements-animation");
            $("img.normal").addClass("normal-character-animation");
            $("img.surprised").addClass("surprised-character-animation");
            $("img.protected").addClass("protected-character-animation");
            $("p.step-1").addClass("during-content-step1");
            $("p.step-2").addClass("during-content-step2");
            $("p.step-3").addClass("during-content-step3");
            $("p.step-4").addClass("during-content-step4");

        }else{
            $(".during-table .during-lamp .during-stove .during-shelf-1 .during-shelf-2 .during-cutlery").removeClass("during-elements-animation");
            $("img.normal").removeClass("normal-character-animation");
            $("img.surprised").removeClass("surprised-character-animation");
            $("img.protected").removeClass("protected-character-animation");
            $("p.step-1").removeClass("during-content-step1");
            $("p.step-2").removeClass("during-content-step2");
            $("p.step-3").removeClass("during-content-step3");
            $("p.step-4").removeClass("during-content-step4");
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