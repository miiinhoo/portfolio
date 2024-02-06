$(function() {
  //HEADER LOGO
const content = 'MINO';
const text = document.querySelector("header h1 a");
let i = 0;

function typing(){
  let txt = content[i++];
  text.innerHTML += txt;
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
}
setInterval(typing, 400);

  const openValue = document.querySelector('.clickOpen');
  const openPage = document.querySelector('.responsiveClickEvent');
  const closeValue = document.querySelector('.thisClose');
  const $screenWidth768 = 768;
  const $screenWidth1024 = 1024;

  openValue.addEventListener('click',function(){
    openPage.classList.add('on');
    closeValue.style.display = 'block'
  });
  closeValue.addEventListener('click',function(){
    openPage.classList.remove('on');
    closeValue.style.display = 'none'
  });
  function testWidth(){
    const windowWidth = window.innerWidth;
    if(windowWidth >= $screenWidth768){
      closeValue.style.display = 'none';
    }
      if(windowWidth >= $screenWidth1024){
        openPage.classList.remove('on');
      }
  }
  
 
  window.addEventListener('DOMContentLoaded',function(){
    testWidth();
  });
  window.addEventListener('resize',function(){
    testWidth();
  });
  //링크
    $(".imgover_button.VONIN").click(function () {
      window.open('https://miiinhoo.github.io/vonin/', '_blank');
    });
    $(".imgover_button.MLB").click(function () {
      window.open('http://minhohome.dothome.co.kr/', '_blank');
    });
    $(".imgover_button.HAPPY").click(function () { 
      window.open('http://minho1.dothome.co.kr/', '_blank');
    });

  //스와이퍼
  const mySlider = new Swiper(".swiper.mySlider", {
    centeredSlides: true,
    loop: true,
    effect: 'fade',
    navigation:{
      nextEl:'.swiper1024-next',
      prevEl:'.swiper1024-prev',
    },
    autoplay: {
      delay: 5000999,
      disableOnInteraction:true,
    },
    speed:700,
    initialSlide: 0
  });
  
  $('.swiper-slide').hover(function(){
    mySlider.autoplay.stop();
  }, function(){
    mySlider.autoplay.start();
  });

  
  $('.webPageInfo').each(function() {
  $(this).on('click', function() {
    let textArea = $(this).closest(".swiper-slide").find('.webPageInfo-textArea');
    textArea.addClass('on');
  });
  });
  
  $(".webPageInfo-textArea .closed").each(function () {
    $(this).on('click', function () {
      let close = $(this).parent();
      close.removeClass("on");
    })
  });
  
$('.mySlider .swiper-wrapper.clone').addClass('on');
$('.mySlider .swiper-wrapper.project').removeClass('on');


  // li 클릭 이벤트 핸들러
  $('#tabMenu > li').click(function() {
    let swiperIndex = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $('.swiper-wrapper').removeClass('on');
    $('.swiper-wrapper').eq(swiperIndex).addClass('on');

    const selectedMenu = $(this).index();
    const newTitle = selectedMenu === 0 ? 'CLONE CODING' : 'PROJECT';
    $('.swiper.mySlider > h2.title').html(newTitle);
  });



  //이메일복사
  let isAnimating = false;
$(".copyMail").click(function() {
  if (!isAnimating) {
    isAnimating = true;
    let email = $(".copyMail").text();
    navigator.clipboard.writeText(email);
    let blockOut = $(".block-out");
    blockOut.animate({
      'opacity': '1'
    }, 1000, function() {
      setTimeout(function() {
        $(".icon-checked > span").addClass("on");
        setTimeout(function() {
          $(".icon-checked > span").removeClass("on");
          blockOut.animate({
            'opacity': '0'
          }, 1000, function() {
            isAnimating = false;
          });
        }, 3000);
      }, 400);
    });
  }
});
});

