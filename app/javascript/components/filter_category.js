const filterByTv = () => {
  const tv = document.getElementById('tv');
  if(tv) {
    const zones = document.querySelectorAll('.project-zone');
    const tvZone = document.querySelector('.tvs');
    tv.addEventListener('click', (event) => {
      zones.forEach((zone) =>{
        zone.classList.add('d-none');
      });
      tvZone.classList.remove('d-none');
      tvZone.scrollIntoView({behavior: "smooth"});
      // active tabs
      const categories = document.querySelectorAll('.category');
      categories.forEach((category) => {
        category.classList.remove('active');
        tv.classList.add('active');
      });
      //
    });
  }
};

const filterByLive = () => {
  const live = document.getElementById('live');
  if(live) {
    const zones = document.querySelectorAll('.project-zone');
    const liveZone = document.querySelector('.lives');
    live.addEventListener('click', (event) => {
      zones.forEach((zone) =>{
        zone.classList.add('d-none');
      });
      liveZone.classList.remove('d-none');
      liveZone.scrollIntoView({behavior: "smooth"});
      // active tabs
      const categories = document.querySelectorAll('.category');
      categories.forEach((category) => {
        category.classList.remove('active');
        live.classList.add('active');
      });
      //
    });
  }
};

const filterByFashion = () => {
  const fashion = document.getElementById('fashion');
  if(fashion) {
    const zones = document.querySelectorAll('.project-zone');
    const fashionZone = document.querySelector('.fashions');
    fashion.addEventListener('click', (event) => {
      zones.forEach((zone) => {
        zone.classList.add('d-none');
      });
      fashionZone.classList.remove('d-none');
      fashionZone.scrollIntoView({behavior: "smooth"});
      // active tabs
      const categories = document.querySelectorAll('.category');
      categories.forEach((category) => {
        category.classList.remove('active');
        fashion.classList.add('active');
      });
      //
    });
  }
};


const filterByEvent = () => {
  const evenement = document.getElementById('evenement');
  if(evenement) {
    const zones = document.querySelectorAll('.project-zone');
    const evenementZone = document.querySelector('.events');
    evenement.addEventListener('click', (event) => {
      zones.forEach((zone) => {
        zone.classList.add('d-none');
      });
      evenementZone.classList.remove('d-none');
      evenementZone.scrollIntoView({behavior: "smooth"});
      // active tabs
      const categories = document.querySelectorAll('.category');
      categories.forEach((category) => {
        category.classList.remove('active');
        evenement.classList.add('active');
      });
      //
    });
  }
};

export { filterByTv };
export { filterByLive };
export { filterByFashion };
export { filterByEvent };
