
// LANGUAGE
// based on idea provided by https://www.youtube.com/watch?v=PaJrDAmrOB4&ab_channel=MichaelSchwartz
import polish from './translations/pl.js'
const [pl] = polish
const dataReload = document.querySelectorAll('[data-reload]')

if (window.location.hash) {
  // console.log('has hash');
  // console.log(window.location.hash);
  if (window.location.hash === "#pl") {
    const idArr = Object.keys(pl)
    idArr.forEach(elem => {
      document.getElementById(elem).innerHTML = pl[elem]
    })
    console.log(document.querySelector('.cv--link').href)
    document.querySelector('.cv--link').href = './cv_pl.pdf'
  }
}

dataReload.forEach(function (elem) {
  elem.addEventListener('click', function(){
    // console.log(window.location.hash);
    window.location.hash = elem.hash
    // console.log(elem);
    location.reload()
    return false
  })
})


// Smooth scrolling - hamburger-menu hiding
// based on code provided by: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
// ! jQuery
$('a[href^="#"]').on('click', function(event) {
  // $('#toggle').checked = false;
  $('#toggle:checked').prop('checked', false)
  console.log($('#toggle:checked').val());
  const target = $(this.getAttribute('href'));
  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 300);
  }
});

// Scroll-spy
// based on code provided by: https://medium.com/p1xts-blog/scrollspy-with-just-javascript-3131c114abdc
document.addEventListener('DOMContentLoaded', function(){
  const sections = document.querySelectorAll("section")
  const menu_links = document.querySelectorAll(".nav-link");

  const makeActive = (link) => menu_links[link].classList.add("active");
  const removeActive = (link) => menu_links[link].classList.remove("active");
  const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
  const sectionMargin = 200;

  let currentActive = 0;
  window.addEventListener("scroll", () => {
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1
    if (current !== currentActive) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    }
  });
}, false);