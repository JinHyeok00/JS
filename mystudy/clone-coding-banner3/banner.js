const banner = document.querySelector('div.banner');
const image_divs = document.querySelectorAll('div.image');
const first_div = document.querySelector('#first-temp');
const last_div = document.querySelector('#last-temp');
const bar = document.querySelector('div.bar');
let count = 1;

image_divs.forEach((image_div, i) => (image_div.style.backgroundImage = `url(00${i + 1}.png)`));
image_divs.forEach((image_div) =>(image_div.style.width = `${100/7}%`));
first_div.style.backgroundImage ='url(005.png)';
first_div.style.width = `${100/7}%`;
last_div.style.backgroundImage = 'url(001.png)';
last_div.style.width = `${100/7}%`;
banner.style.transform = `translate(${-(100/7)}%)`
bar.style.transform = `translateX(${-100+ (100/5)*(count%6)}%)`;

setInterval(() =>autoSlide(), 2000);

function autoSlide(){
    banner.style.transform = `translate(${-(100/7) * ++count}%)`;
    banner.style.transition = 'transform 0.3s';
    bar.style.transform = `translateX(${-100+ (100/5)*(count%6)}%)`;
    bar.style.transition = 'transform 0.3s';
    if(count == 6){
        bar.style.transform = `translateX(${-100+ (100/5)*(1)}%)`;
        bar.style.transition = 'transform 0s';
        setTimeout(() =>{
            banner.style.transition = 'transform 0s';
            banner.style.transform = `translate(${-(100/7)}%)`;
        }, 300);
        count = 1;
    }
}