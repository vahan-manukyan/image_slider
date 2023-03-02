const images = document.querySelectorAll('.container img');
const ps = document.querySelectorAll('.container p');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let current = 0;

const nextSlide = () => {
images[current].classList.remove('active');
ps[current].classList.remove('active');
current++;

if(current === images.length){
current = 0;
}

images[current].classList.add('active')
ps[current].classList.add('active')
}

next.addEventListener('click', nextSlide)

prev.addEventListener('click', () => {
images[current].classList.remove('active')
ps[current].classList.remove('active')
current--;

if(current < 0){
current = images.length - 1;
}

images[current].classList.add('active');
ps[current].classList.add('active');
})

setInterval(nextSlide, 3000)

