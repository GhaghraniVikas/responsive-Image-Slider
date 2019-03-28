const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const auo = false;
const intervalTime = 5000;
let slideInterval;





const nextSlide = () => {
  const current = document.querySelector('.current');

  //remove currnt cass
  current.classList.remove('current');

  //see if another clas  of current exists
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');

  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}
//previos button function
const prevSlide = () => {
  const current = document.querySelector('.current');

  //remove currnt cass
  current.classList.remove('current');

  //see if another clas  of current exists
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');

  } else {
    slides[slides.length].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}
//button vents
next.addEventListener('click', e => {
  nextSlide();
})

// previous button
prev.addEventListener('click', e => {
  prevSlide();
})