const tex_box = document.querySelector('div.text-box');
let count = 0;

setInterval(() => autoslide(), 1000);

function autoslide(){
    tex_box.style.transform = `translateY(${-24 * ++count}px)`;
    tex_box.style.transition = 'transform 0.3s';
    if(count == 10){
        setTimeout(() =>{
            tex_box.style.transform = `translateY(0px)`;
            tex_box.style.transition = 'transform 0s';
        },300);
        count = 0;
    }
}