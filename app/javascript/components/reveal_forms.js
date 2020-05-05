const revealAddPhotos = () => {
  const addPhotosIcon = document.getElementById('btn-add-photos');
  if(addPhotosIcon) {
    addPhotosIcon.addEventListener('click', (event) => {
      const addPhotosForm = document.querySelector('.add-photos');
      addPhotosForm.classList.add('d-block');
      addPhotosForm.scrollIntoView({behavior: "smooth"});
    });
  }
};


export { revealAddPhotos };
