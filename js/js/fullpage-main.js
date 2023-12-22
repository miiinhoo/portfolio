$(function () {
  let addClassOn = $("nav ul li");  //NAV UL LI - ADDCLASS SIBLINGS VARIATION SETTINGS.
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
    'afterLoad': function (anchorLink, index) {
      h2animation.css({'opacity':'0'})
      switch(index) { //조건문 실행 예로, 해당 index 페이지에 도달했을 때 애니메이션 실행
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
          if (direction === "down") {     //1번에서 2번
            //조건문 실행
            //예로 , 다음페이지로 전환하기 전에 애니메이션 실행
            showText.show();
          }
          break;
        case 2:
          if (direction === "down") {    //2번에서 3번
            $(".inner-wrap.before").removeClass("on");
          }
          if (direction === "up") {      //2번에서 1번
            hideText.hide();
            $(".inner-wrap.before").removeClass("on");
          }
          break;
         case 3:
          if (direction === "down") {     //3번에서 4번
            
          }
          if(direction === "up"){      //3번에서 2번
            
          };
          break;
         case 4:
          if (direction === "down") {     //4번에서 푸터
            
          }
          if (direction === "up") {       //4번에서 3번
            
          }
          break;
        default:
        //기본 동작 작성
          break;
      }
    },
  });

});