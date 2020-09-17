import polish from './translations/pl.js'
const [pl] = polish
const dataReload = document.querySelectorAll('[data-reload]')

if (window.location.hash) {
  console.log('has hash');
  console.log(window.location.hash);
  if (window.location.hash === "#pl") {
    const idArr = Object.keys(pl)
    idArr.forEach(elem => {
      document.getElementById(elem).innerHTML = pl[elem]
    })
  }
}

dataReload.forEach(function (elem) {
  elem.addEventListener('click', function(){
    console.log(window.location.hash);
    window.location.hash = elem.hash
    // console.log(elem);
    location.reload()
    return false
  })
})



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