function toggleMenu(){
    document.getElementById("navigations").classList.toggle("active");
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollY = window.scrollY; // Get the current scroll position
  
    const stickyThreshold = 50; // Adjust this value to control when it becomes sticky
  
    if (scrollY > stickyThreshold) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });