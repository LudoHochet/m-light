const lightCards = () => {
  const cardsZone = document.querySelector('.project-zone')
  const cards = document.querySelectorAll(".card-project");
  if(cardsZone) {
    cardsZone.addEventListener('mouseleave', (event) => {
      cards.forEach((card) => {
          card.classList.remove('darker');
          card.classList.add('lighter-smooth');
          card.children[0].style.visibility = "hidden";
        });
    });
  }
};

export { lightCards };
