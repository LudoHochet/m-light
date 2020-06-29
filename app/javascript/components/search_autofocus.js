const searchAutofocus = () => {
  const searchIcon = document.querySelector('.search-icon');
  if (searchIcon) {
    searchIcon.addEventListener('click', (event) => {
      const search = document.getElementById('search-input');
      search.focus();
    });
  }
}

export { searchAutofocus };
