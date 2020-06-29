const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.logoHome');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        console.log("hello");
        navbar.classList.remove('invisible');
        navbar.classList.add('fadeIn');
      }
      else {
        navbar.classList.add('invisible');
        navbar.classList.remove('fadeIn');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
