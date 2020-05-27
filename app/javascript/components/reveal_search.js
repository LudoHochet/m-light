const revealSearch = () => {
  const searchIcon = document.querySelector('.search-icon');
  if (searchIcon) {
    const searchInput = document.getElementById('search-input');
    searchIcon.addEventListener('click', (event) => {
      searchInput.classList.toggle('d-none');
    });
  }
};

export { revealSearch };
