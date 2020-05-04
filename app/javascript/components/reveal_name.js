const revealName = () => {
  const cards = document.querySelectorAll(".card-project");
  if(cards) {
    cards.forEach((card) => {
      card.addEventListener('mouseover', (event) => {
        cards.forEach((card) => {
          card.classList.remove('lighter');
          card.classList.add('darker');
        });
        event.currentTarget.classList.remove('darker');
        event.currentTarget.classList.add('lighter');
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
      });
    });
  }
};

export { revealName };
export { resetOpacity };

// document.querySelectorAll("img").forEach((img) => {
//   img.addEventListener("click", (event) => {
//     event.currentTarget.classList.toggle("img-circle");
//   });
// });
