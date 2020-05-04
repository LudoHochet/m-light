const revealName = () => {
  const cards = document.querySelectorAll(".card-project");
  if(cards) {
    cards.forEach((card) => {
      card.addEventListener('mouseover', (event) => {
        cards.forEach((card) => {
          card.classList.remove('lighter');
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

const resetOpacity = () => {
  const banner = document.querySelector(".banner");
  if(banner) {
    banner.addEventListener('mouseover', () => {
      const cards = document.querySelectorAll(".card-project");
      cards.forEach((card) => {
        card.classList.remove('darker');
        card.classList.add('lighter');
        card.children[0].style.visibility = "hidden";
      });
    });
  }
};

export { revealName };
export { resetOpacity };
