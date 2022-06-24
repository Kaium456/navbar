let navbar = document.getElementById("bg-navbar");

window.onscroll = () => {
  let scrollNav = window.scrollY;

  if (scrollNav >= 100) {
    navbar.classList.add("after_nav_scrool");
  } else {
    navbar.classList.remove("after_nav_scrool");
  }
};
