function toggleSidebar() {

  var sidebar = document.querySelector(".sidebar");

  var menuicon = document.querySelector(".menu-icon")

  sidebar.classList.toggle("open");
  menuicon.classList.toggle("rotate");
}

