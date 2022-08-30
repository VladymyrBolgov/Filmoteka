import API from "../apiService/movieAPI";
import { Notify } from "notiflix";

const gallery = document.querySelector('.films__list');

gallery.addEventListener('click', getTrailer);

async function getTrailer(event) {
  if(event.target.parentNode.dataset.id) {
      const idFilm = event.target.parentNode.dataset.id;
      try { 
          const data = await API. getMovieTrailers(`${idFilm}`);
          const checkSite = data[0].site;
          if (checkSite === "YouTube") {
              const filmKey = data[0].key;
              const ref = `<a 
              class="iframe-lightbox-link"
              href="https://www.youtube.com/embed/${filmKey}?autoplay=1&mute=1">
              // <svg width="50" height="50">
              //     <use href="/Filmoteka/symbol-defs.a103b832.svg#icon-youtube"></use>
              // </svg>
              </a>`;
              const modalWindow = document.querySelector('.modal');
              modalWindow.insertAdjacentHTML('beforeend', ref);
              [].forEach.call(document.getElementsByClassName("iframe-lightbox-link"), function(el) {
                el.lightbox = new IframeLightbox(el);
              });
          }
          else {
          Notify.failure('Sorry, but there is no trailer for this film', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
          }
      }
      catch(error) {
          console.log(error);
      };
  }
};



