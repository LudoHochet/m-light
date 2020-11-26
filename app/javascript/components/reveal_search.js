const revealSearch = () => {
  const searchIcon = document.querySelector('.search-icon');
  const filters = document.querySelector('.filters')
  if (searchIcon) {
    const searchInput = document.getElementById('search-input');
    searchIcon.addEventListener('click', (event) => {
      searchInput.classList.toggle('d-none');
      filters.classList.toggle('d-none');
    });
  }
};

export { revealSearch };
