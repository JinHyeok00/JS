const $banner = $('.banner');
const $image_divs = $('.image');
const $prev = $('.prev');
const $next = $('.next');
const $dots = $('.dot');

let count = 1;
let check = true;
let clickCheck = false;

$image_divs.each((i, image_div) => {
  $(image_div).css('backgroundImage', `url(00${i + 1}.png)`);
});
$banner.children().first().css('backgroundImage', `url(006.png)`);
$banner.children().last().css('backgroundImage', `url(001.png)`);

let slide = setInterval(() => autoSlide(), 2000);

changeButtonStyle();

function changeButtonStyle() {
  $dots.each((i, dot) => $(dot).css('background', 'none'));
  $dots.eq(count - 1).css('background', '#313131');
  clickCheck = true;
}

$dots.each((i, dot) => {
  $(dot).on('mouseover', () => {
    clickCheck = $(dot).css('background-color') == 'rgb(49, 49, 49)';
    $(dot).css('background', '#313131');
  });
  $(dot).on('mouseout', () => {
    if (clickCheck) {
      return;
    }
    $(dot).css('background', 'none');
  });

  $(dot).on('click', () => {
    clickCheck = true;
    clearInterval(slide);
    count = i+1;
    $banner.css('transform', `translate(${-1500 * count}px)`);
    $banner.css('transition', 'transform 0.7s');
    changeButtonStyle();
    slide = setInterval(() => autoSlide(), 2000);
  });
});

$prev.on('click', function () {
  if (!check) {
    return;
  }
  check = false;
  clearInterval(slide);
  $banner.css('transform', `translate(${-1500 * --count}px)`);
  $banner.css('transition', 'transform 0.7s');

  if (count == 0) {
    setTimeout(() => {
      $banner.css('transform', `translate(-9000px)`);
      $banner.css('transition', 'transform 0s');
    }, 700);
    count = 6;
  }
  changeButtonStyle();
  slide = setInterval(() => autoSlide(), 2000);
  setTimeout(() => {
    check = true;
  }, 700);
});

$next.on('click', function () {
  if (!check) {
    return;
  }
  check = false;
  clearInterval(slide);
  $banner.css('transform', `translate(${-1500 * ++count}px)`);
  $banner.css('transition', 'transform 0.7s');

  if (count == 7) {
    setTimeout(() => {
      $banner.css('transform', `translate(-1500px)`);
      $banner.css('transition', 'transform 0s');
    }, 700);
    count = 1;
  }
  changeButtonStyle();
  slide = setInterval(() => autoSlide(), 2000);
  setTimeout(() => {
    check = true;
  }, 700);
});

function autoSlide() {
  check = false;
  $banner.css('transform', `translate(${-1500 * ++count}px)`);
  $banner.css('transition', 'transform 0.7s');

  if (count == 7) {
    setTimeout(() => {
      $banner.css('transform', `translate(-1500px)`);
      $banner.css('transition', 'transform 0s');
    }, 700);
    count = 1;
  }
  changeButtonStyle();
  setTimeout(() => {
    check = true;
  }, 700);
}
