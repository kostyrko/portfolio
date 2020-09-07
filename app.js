
// source: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link


// const toggle = document.getElementById('toggle')
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      document.getElementById('toggle').checked = false;
      // console.log(document.getElementById('toggle').checked);
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          // ! not supported by safari
          behavior: 'smooth'
      });
  });
});