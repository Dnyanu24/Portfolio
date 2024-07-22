// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}
const downloadResumeButton = document.getElementById('download_cv');

downloadResumeButton.addEventListener('click', () => {
  const resumePdf = 'https://drive.google.com/file/d/1uxEh5C9LsgTyQ3lJ3RrgfLFjPAcmvvHI/view?usp=sharing'; // replace with your resume PDF file path
  const link = document.createElement('a');
  link.href = resumePdf;
  link.download = 'Resume.pdf'; // replace with your desired file name
  link.click();
});
const letsChatButton = document.getElementById('let-chat');

letsChatButton.addEventListener('click', () => {
  const whatsappNumber = '+917558469705'; // replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  window.open(whatsappLink, '_blank');
});
// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
