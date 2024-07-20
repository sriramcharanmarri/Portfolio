function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function changeIconColor(i,x) {
  document.getElementById(i).src = "./assets/"+x+".gif";
}

function changeIconToDefault(i,x) {
  document.getElementById(i).src = "./assets/"+x+".png";
}
