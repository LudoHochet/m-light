
const resizeFlex = () => {
  const items = document.querySelectorAll('.about-item');
    if (items) {
      items.forEach((item) => {
        item.addEventListener('click', (event) => {
          items.forEach((block) => {
            // reduit tous les blocks et ajoute la class light
            // console.log("reduction");
            block.classList.remove('open');
            block.classList.add('light');
            // cache tous les contenus
            const contents = document.querySelectorAll('.content');
            contents.forEach((content) => {
              content.classList.add('d-none');
              // cahe le sous contenu menu 3D
              const menu3D = document.querySelector('.menu-3D');
              if (menu3D) {
                menu3D.classList.add('d-none');
              }
            })
          })
          // agrandit la div sur laquelle on a cliqué
          event.currentTarget.classList.add('open');
          event.currentTarget.classList.remove('light');
          // affiche son contenu. la div content est la 2ème de chaque div "about-item"
          event.currentTarget.children[1].classList.remove('d-none');
          if (event.currentTarget.children[2]) {
            event.currentTarget.children[2].classList.remove('d-none');
          }
        });
      })
    }
}

export { resizeFlex };
