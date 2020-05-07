const revealName = () => {
  const cards = document.querySelectorAll(".card-project");
  if(cards) {
    cards.forEach((card) => {
      card.addEventListener('mouseover', (event) => {
        cards.forEach((card) => {
          card.classList.remove('lighter');
          card.classList.remove('lighter-smooth');
          card.classList.add('darker');
          card.children[0].style.visibility = "hidden";
        });
        event.currentTarget.classList.remove('darker');
        event.currentTarget.classList.add('lighter');
        event.currentTarget.children[0].style.visibility = "visible";
      });
    });
  }
};

export { revealName };
