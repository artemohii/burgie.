// "use strict";


function navToggle() {
  var navToggleNav = document.getElementById("nav");
  navToggleNav.classList.toggle("_active");
  var html = document.getElementById("html");
  html.classList.toggle("_overflow");
  var body = document.getElementById("body");
  body.classList.toggle("_overflow");
}


document.getElementById('showMoreMenu').addEventListener('click', function() {
  const hiddenItems = document.querySelectorAll('.menu-item:nth-child(n+4)');
  hiddenItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.classList.add('show');
    setTimeout(() => {
      item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * 300);
  });
  this.style.display = 'none';
});

/* feedback slider */
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.reviews-slider__container');
  const slides = document.querySelectorAll('.reviews-slide');
  const dotsContainer = document.querySelector('.reviews-slider__dots');
  let currentSlide = 0;

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  }

  // Auto advance slides every 5 seconds
  setInterval(nextSlide, 5000);

  // Click on dots to change slides
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateSlider();
    });
  });
});


/* feedback slider end */

/* scroll to top */
const scrollToTopBtn = document.getElementById('scrollToTop');

			window.addEventListener('scroll', () => {
				if (window.pageYOffset > 300) {
					scrollToTopBtn.classList.add('visible');
				} else {
					scrollToTopBtn.classList.remove('visible');
				}
			});

			scrollToTopBtn.addEventListener('click', () => {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			});