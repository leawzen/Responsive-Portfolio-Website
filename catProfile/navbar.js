document
  .querySelector(".nav-burger")
  .addEventListener("click", function(event) {
    document.querySelector(".nav-container").classList.toggle("show");
    let navItems = document.querySelectorAll(".nav-container-item");
    navItems.forEach(item => item.classList.toggle("show"));
  });
