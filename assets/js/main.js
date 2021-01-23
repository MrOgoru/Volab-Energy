//navigation
const text = document.querySelector(".down");
const move = document.querySelector(".sow")

text.addEventListener("click", function () {
  move.classList.toggle('sow');

});

document.querySelector('.main-btn').addEventListener('click', () => document.querySelector('.mobile-nav')
  .classList.toggle('show'));

document.querySelector('.dropdown').addEventListener('click', () => document.querySelector('.shown')
  .classList.toggle('open'));

//sliders
$('.slider').slick({
  autoplay: true,
  infinite: true,
  autoplaySpeed: 2000,
});

$('.slided').slick({
  autoplay: true,
  infinite: true,
  autoplaySpeed: 5000,
});





//animate on scroll


// Initi AOS
function aos_init() {
  AOS.init({
    duration: 1000,
    once: true
  });
}
$(window).on('load', function () {
  aos_init();
});

(jQuery);