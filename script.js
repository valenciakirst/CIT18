document.addEventListener('DOMContentLoaded', function() {

    const navbarHeight = document.getElementById('navbar').offsetHeight;
  

    const sections = document.querySelectorAll('section');
  
  
    sections.forEach(section => {
      section.style.paddingTop = navbarHeight + 'px';
    });
  

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');
  
 
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  

    if (prefersDarkScheme) {
      body.classList.add('dark-mode');
    }
  

    darkModeToggle.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
    });
  });

  const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", modeToggle.checked);
});

  