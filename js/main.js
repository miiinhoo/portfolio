$(function () { 
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