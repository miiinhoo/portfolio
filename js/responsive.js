let max_ScreenWidth = 1200;
let min_ScreenWidth = 768;
let $screenWidth1023 = 1023;
let $screenWidth900 = 900;




function screenWidth1200() {
  const windowWidth = window.innerWidth;
  let skillAbout = document.querySelectorAll(".skill > ul > li");
  let items = ['HTML', 'CSS', 'JS', 'Jquery', 'Photoshop', 'Illustrator'];
  if (windowWidth < max_ScreenWidth) {
    skillAbout.forEach(function(item, index) {
      item.classList.add('off');
      item.innerHTML = items[index]; // 각 요소에 해당하는 items 배열의 값을 설정
    });
  } else {
    skillAbout.forEach(function(item) {
      item.classList.remove('off');
      item.innerHTML = ''; // 내용을 비움
    });
  }
}

function screenWidth1023() {
  const windowWidth = window.innerWidth;
  let setSvg = document.querySelectorAll("svg.text-line text");
  
  if(windowWidth < $screenWidth1023){
    setSvg[1].setAttribute('y','160');
  }else{
    setSvg[1].setAttribute('y','190');
  }
};


function screenWidth768() {
  const windowWidth = window.innerWidth;
  let changedH2 = document.querySelectorAll('.bg .section-inner h2 span');

  if (windowWidth < min_ScreenWidth) {
    changedH2[0].textContent = "";
    changedH2[1].textContent = 'I DEVELOP WEBSITES';
  } else {
    changedH2[0].textContent = "I";
    changedH2[1].textContent = "DEVELOP WEBSITES";

  }
};

window.addEventListener("DOMContentLoaded", function() {
  screenWidth1200();
  screenWidth1023();
  screenWidth768();
});
  window.addEventListener("resize", function() {
    screenWidth1200();
    screenWidth1023();
    screenWidth768();
});
//반응형설정

