// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";
import { revealName } from '../components/reveal_name';
import { revealAddPhotos } from '../components/reveal_forms';
import { lightCards } from '../components/light_cards';
// import { filterByTv } from '../components/filter_category';
// import { filterByLive } from '../components/filter_category';
// import { filterByFashion } from '../components/filter_category';
// import { filterByEvent } from '../components/filter_category';
import { initUpdateNavbarOnScroll } from '../components/init_navbar';
import { revealSearch } from '../components/reveal_search';
import { searchAutofocus } from '../components/search_autofocus';
import { resizeFlex } from '../components/size_flex';
import { displayScroll } from '../components/remove_scroll';
import { changeContent } from '../components/change_content';
// import { changeCarouselToText } from '../components/change_content';
// import { changeTextTo2D } from '../components/change_content';

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

const textContent = document.querySelector('.text-3D');
const carouselContent = document.querySelector('.carousel-3D');
const illustrContent = document.querySelector('.content-2D');

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  console.log("M-Light");
  revealName();
  revealAddPhotos();
  lightCards();
  // filterByTv();
  // filterByLive();
  // filterByFashion();
  // filterByEvent();
  initUpdateNavbarOnScroll();
  revealSearch();
  searchAutofocus();
  resizeFlex();
  displayScroll();
  // changeTextToCarousel();
  changeContent();
});

