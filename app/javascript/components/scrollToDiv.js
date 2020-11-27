const scrollToDiv = () => {
  const divServices = document.getElementById('services');
  const divUs = document.getElementById('us');
  const divWork = document.getElementById('work');
  if(divServices){
    divServices.addEventListener('click', (event) => {
      divUs.scrollIntoView({behavior: "smooth", block: "end"});
    })
  }
  if(divWork) {
    divWork.addEventListener('click', (event) => {
      divServices.scrollIntoView({behavior: "smooth", block: "end"});
    })
  }
}

export { scrollToDiv };
