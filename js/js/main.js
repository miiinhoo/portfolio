$(function () { 
  $(".copyMail").click(function () {
    var email = $(".copyMail").text();
    navigator.clipboard.writeText(email);
    alert("이메일이 복사되었습니다.");
  });

  $(".copyMail").hover(function () {
    $(".blur-active").addClass("on");
  }, function () {
    $(".blur-active").removeClass("on");
  });
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
  setInterval(typing, 400)
  

  //SWIPER SLIDE OPTIONS
  const mySlider = new Swiper(".swiper.mySlider", {
    centeredSlides: true,
    loop: true,
    effect: 'cube',
    autoplay: {
      delay: 2000,
      disableOnInteraction:true,
    }
  });
    $('.swiper-slide').hover(function(){
  mySlider.autoplay.stop();
}, function(){
  mySlider.autoplay.start();
});
});