const initUpdateNavbarOnScroll = () => {
  const logo = document.querySelector('.logoHome');
  const filters = document.querySelector('.filter-category');
  const navbar = document.querySelector('.navbar-mlight');
  if (logo) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        console.log("hello");
        logo.classList.remove('invisible');
        filters.classList.remove('invisible');
        logo.classList.add('fadeIn');
        filters.classList.add('fadeIn');
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-black');
      }
      else {
        logo.classList.add('invisible');
        filters.classList.add('invisible');
        logo.classList.remove('fadeIn');
        filters.classList.remove('fadeIn');
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-transparent');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
