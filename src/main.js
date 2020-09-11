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