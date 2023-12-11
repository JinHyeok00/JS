const banner = document.querySelector('div.banner');
const image_divs = document.querySelectorAll('div.image');
const first_div = document.querySelector('#first-temp');
const last_div = document.querySelector('#last-temp');
const prev = document.querySelector('div.prev');
const next = document.querySelector('div.next');
const text = document.querySelector('span.number-part');
let count = 1;
let check = true;

let changeNumber = function (count) {
  text.innerHTML = `${count}/9`;
};

image_divs.forEach((image_div, i) => (image_div.style.backgroundImage = `url(00${i + 1}.png)`));
first_div.style.backgroundImage = `url(009.png)`;
last_div.style.backgroundImage = `url(001.png)`;

let slide = setInterval(() => autoSlide(), 2000);

// 베너에 마우스 올렸을때 이벤트
banner.addEventListener('mouseover', () => {
  prev.style.display = 'unset';
  next.style.display = 'unset';
});

next.addEventListener('mouseover', () => {
  prev.style.display = 'unset';
  next.style.display = 'unset';
});

prev.addEventListener('mouseover', () => {
  prev.style.display = 'unset';
  next.style.display = 'unset';
});

// 마우스를 땠을때 이벤트
banner.addEventListener('mouseout', () => {
  prev.style.display = 'none';
  next.style.display = 'none';
});

next.addEventListener('mouseout', () => {
  prev.style.display = 'none';
  next.style.display = 'none';
});

prev.addEventListener('mouseout', () => {
  prev.style.display = 'none';
  next.style.display = 'none';
});

// <- 이벤트
prev.addEventListener('click', function () {
  if (!check) {
    return;
  }
  check = false;
  clearInterval(slide);
  banner.style.transform = `translate(${-269 * --count}px)`;
  banner.style.transition = 'transform 0.3s';
  if (count == 0) {
    setTimeout(() => {
      banner.style.transition = 'transform 0s';
      banner.style.transform = 'translate(-2421px)';
    }, 300);
    count = 9;
  }
  slide = setInterval(() => autoSlide(), 2000);
  setTimeout(() => {
    check = true;
  }, 300);
  changeNumber(count);
});

// -> 이벤트
next.addEventListener('click', function () {
  if (!check) {
    return;
  }
  check = false;
  clearInterval(slide);
  banner.style.transform = `translate(${-269 * ++count}px)`;
  banner.style.transition = 'transform 0.3s';
  if (count == 10) {
    setTimeout(() => {
      banner.style.transition = 'transform 0s';
      banner.style.transform = 'translate(-269px)';
    }, 300);
    count = 1;
  }
  slide = setInterval(() => autoSlide(), 2000);
  setTimeout(() => {
    check = true;
  }, 300);
  changeNumber(count);
});

// 자동 슬라이드 함수
function autoSlide() {
  check = false;
  banner.style.transform = `translate(${-269 * ++count}px)`;
  banner.style.transition = 'transform 0.3s';

  if (count == 10) {
    setTimeout(() => {
      banner.style.transition = 'transform 0s';
      banner.style.transform = 'translate(-269px)';
    }, 300);
    count = 1;
  }
  setTimeout(() => {
    check = true;
  }, 300);
  changeNumber(count);
}
