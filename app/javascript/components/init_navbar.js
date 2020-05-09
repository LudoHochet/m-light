const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.logo');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.style.visibility = 'visible';
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
