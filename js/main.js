$('.menu').on('click', function () {
  $(this).toggleClass('active');
  $('.overlay').toggleClass('menu-open');
});

$('.nav a').on('click', function () {
  $('.menu').removeClass('active');
  $('.overlay').removeClass('menu-open');
});

const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});
