const textContent = document.querySelector('.text-3D');
const carouselContent = document.querySelector('.carousel-3D');
const rendus3D = document.querySelector('.rendus-3D');

const changeTextToCarousel = () => {
  if (rendus3D) {
    rendus3D.addEventListener('click', () => {
      console.log("text to carousel!!")
      textContent.classList.add('d-none');
      carouselContent.classList.remove('d-none');
    })
  }
}

const changeCarouselToText = () => {
  const back = document.querySelector('.back');
  console.log("alors???")
  if (back) {
    back.addEventListener('click', () => {
      console.log("carousel to text!!")
      carouselContent.classList.add('d-none');
      textContent.classList.remove('d-none');
    })
  }
}

export { changeTextToCarousel };
export { changeCarouselToText };
