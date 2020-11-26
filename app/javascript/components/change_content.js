const changeContent = () => {
  const textContent = document.querySelector('.text-3D');
  const carouselContent = document.querySelector('.carousel-3D');
  const illustrContent = document.querySelector('.content-2D');

  const back = document.querySelector('.back');
  if (back) {
    back.addEventListener('click', () => {
      console.log("carousel to text!!")
      carouselContent.classList.add('d-none');
      illustrContent.classList.add('d-none');
      textContent.classList.remove('d-none');
    })
  }
  const illustr = document.querySelector('.rendus-2D')
  if (illustr) {
    illustr.addEventListener('click', () =>{
      console.log("ça marche?");
      carouselContent.classList.add('d-none');
      textContent.classList.add('d-none');
      illustrContent.classList.remove('d-none');
    })
  }
  const rendus3D = document.querySelector('.rendus-3D');
  if (rendus3D) {
    rendus3D.addEventListener('click', () => {
      console.log("text to carousel!!")
      textContent.classList.add('d-none');
      illustrContent.classList.add('d-none');
      carouselContent.classList.remove('d-none');
    })
  }
}

export { changeContent };
