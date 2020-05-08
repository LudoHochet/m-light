const lightCards = () => {
  const cardsZones = document.querySelectorAll('.project-zone')
  const cards = document.querySelectorAll(".card-project");
  if(cardsZones) {
    cardsZones.forEach((zone) => {
      zone.addEventListener('mouseleave', (event) => {
        cards.forEach((card) => {
          card.classList.remove('darker');
          card.classList.add('lighter-smooth');
          card.children[0].style.visibility = "hidden";
        });
      });
    });
  }
};

export { lightCards };
