
// navbar logic  

const div = document.querySelector(".nav-items-container");
const openBtn = document.querySelector(".open-menu");
const closeBtn = document.querySelector(".close-menu");

openBtn.addEventListener("click", (e) => {
  console.log(e);
  div.classList.remove("close")
  div.classList.add("open");
})

closeBtn.addEventListener("click", (e) => {
  console.log(e);
  div.classList.remove("open");
  div.classList.add("close");
})