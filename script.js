const menu_btn = document.querySelector(".fa-bars");
const menu_close_btn = document.querySelector(".fa-xmark");
const mbl_nav = document.querySelector(".mbl-nav");
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

menu_btn.addEventListener('click', ()=>{
  mbl_nav.classList.add("mbl-nav-active");
  main_content.classList.add("disable-click");
  footer.classList.add("disable-click");
})
menu_close_btn.addEventListener('click', ()=>{
  mbl_nav.classList.remove("mbl-nav-active");
  main_content.classList.remove("disable-click");
  footer.classList.remove("disable-click");
})