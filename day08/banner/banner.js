const banner = document.querySelector('div.banner');
const image_divs = document.querySelectorAll('div.banner div');
let count = 0;

image_div.forEach((image_div, i) => (image_divs.style.backgroundImage = `url(00${i + 1}.png)`));

setInterval(() => autoslide(), 1000);

function autoslide() {
  if (count == 5) {
    count = -1;
  }
  banner.style.transform = `translate(${-1500 * ++count}px)`;
  banner.style.transition = 'transform 0.3s';
}
