const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabsContent = document.querySelectorAll(".tabcontent");



const handleHideTabsContent = () => {
  tabsContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};

const handleShowTabsContent = (i = 0) => {
  tabsContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};

handleHideTabsContent();
handleShowTabsContent();

tabsParent.addEventListener("click", (e) => {
  const target = e.target;
  //   console.log(target);

  if (target.classList.contains("tabheader__item")) {
    tabs.forEach((item, i) => {
      if (item === target) {
        // console.log(i);
        handleHideTabsContent();
        handleShowTabsContent(i);
      }
    });
  }
});

const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close");
const modalOpenBtn = document.querySelector(".btn_white");
const modalCloseBtn2 = document.querySelector(".modal");
const pagescroll = document.querySelector(".modal");
const openModal = () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
};
const closeModal = () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
};

const modalClose = () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
  modal.classList.remove("show");
};
const showModal = () => {
  modal.classList.add("show");
};
modalOpenBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);
modalCloseBtn2.addEventListener("click", modalClose);
window.addEventListener('scroll', function() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    showModal(); 
  }
});



let slideIndex = 0;
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.querySelectorAll(".tabheader__item");
  let sliderSlide = document.querySelectorAll(".tabcontent");
  if (n > slides.length && n > sliderSlide.length) {
    slideIndex += 1;
  }
  if (n < 0) {
    slideIndex = slides.length && slideIndex === sliderSlide.length;
  }
  for (let slide of slides) {
    slide.classList.remove("tabheader__item_active");
  }
  slides[n].classList.add("tabheader__item_active");

  for (let slide of sliderSlide) {
    slide.style.display = "none";
  }
  sliderSlide[slideIndex].style.display = "block";
}

let timer = setInterval(function () {
  {
    slideIndex++;
    if (slideIndex > 5) {
      slideIndex = 0
    }
  }
  showSlides(slideIndex);
}, 1000);

