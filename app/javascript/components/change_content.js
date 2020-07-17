const textContent = document.querySelector('.text-3D');
const carouselContent = document.querySelector('.carousel-3D');
const rendus3D = document.querySelector('.rendus-3D');
const back = document.querySelector('.back');

const changeTextToCarousel = () => {
  if (rendus3D) {
    rendus3D.addEventListener('click', () => {
      console.log("text to carousel!!")
      textContent.classList.add('d-none');
      carouselContent.classList.remove('d-none');
    })
  }
}


export { changeTextToCarousel };
