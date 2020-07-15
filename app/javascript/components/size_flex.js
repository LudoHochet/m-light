const resizeFlex = () => {
  const items = document.querySelectorAll('.about-item');
    if (items) {
      items.forEach((item) => {
        item.addEventListener('click', (event) => {
          items.forEach((block) => {
            block.classList.remove('open');
            block.classList.add('light');
            const contents = document.querySelectorAll('.content');
            contents.forEach((content) => {
              content.classList.add('d-none');
            })
          })
          event.currentTarget.classList.add('open');
          event.currentTarget.classList.remove('light');
          event.currentTarget.children[event.currentTarget.children.length - 1].classList.remove('d-none');
        });
      })
    }
}

export { resizeFlex };
