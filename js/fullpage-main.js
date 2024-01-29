$(function () {
  let addClassOn = $("nav ul li");
  const h2animation = $(".section h2 span");
  let showText = $("#section2 svg");
  let hideText = $("#section2 svg");
  
  $("#fullpage").fullpage({
    menu: '#menu',
    css3: true,
    navigation: true,
    navigationPosition: 'right',
    autoScrolling: true,
    scrollingSpeed:700,
    lookAnchors:false,
    anchors: ['page1', 'page2', 'page3', 'page4', 'last'],
    responsiveWidth:1024,
    'afterLoad': function (anchorLink, index) {
      h2animation.css({ 'opacity': '0' })
      
      switch (index) {
        
        case 1:
          addClassOn.eq(0).addClass("on").siblings().removeClass("on");
          h2animation.animate({ opacity: '1' }, 3000);
          break;
        case 2:
          addClassOn.eq(1).addClass("on").siblings().removeClass("on");
          $(".inner-wrap.before").addClass("on");
          break;
        case 3:
          addClassOn.eq(2).addClass("on").siblings().removeClass("on");
          break;
        case 4:
          addClassOn.eq(3).addClass("on").siblings().removeClass("on");
          break;
        default:
          break;
      }
    },
    'onLeave': function (index, nextIndex, direction) {

      switch (index) {
        case 1:
          if (direction === "down") { 
            showText.show();
          }
          break;
        case 2:
          if (direction === "down") {    
            $(".inner-wrap.before").removeClass("on");
          }
          if (direction === "up") {    
            hideText.hide();
            $(".inner-wrap.before").removeClass("on");
          }
          break;
         case 3:
          if (direction === "down") {    
            
          }
          if(direction === "up"){     
            
          };
          break;
         case 4:
          if (direction === "down") {   
            
          }
          if (direction === "up") {    
            
          }
          break;
        default:
   
          break;
      }
    },
  });

});