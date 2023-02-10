const sidebar = document.querySelector(".sidebar");
const sideBarCloseBtn = document.querySelector(".sidebar__close-btn");

// toggle menu btn
if (sidebar && sideBarCloseBtn) {
  sideBarCloseBtn.onclick = () => {
    sidebar.classList.toggle("active");
  };
}

// remove & add class active in menu items
const activeList = document.querySelectorAll(".sidebar__list__item ");

activeList.forEach((el, i, arr) => {
  el.onclick = () => {
    arr.forEach((value) => {
      value.classList.remove("active");
    });
    el.classList.add("active");
  };
});
