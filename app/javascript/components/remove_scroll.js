const displayScroll = () => {
  const scrollText = document.querySelector('.scroll');
  if (scrollText) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 300 ) {
        console.log("test scroll!!!");
        scrollText.classList.remove('infinite');
        scrollText.classList.add('fadeOut');
      }
      else {
        scrollText.classList.remove('fadeOut');
        scrollText.classList.add('infinite');
      }
    });
  }
}

export { displayScroll } ;
