
const store = {
  img: undefined,
  title: undefined,
  notes: undefined,
  status: undefined
}

const form = document.querySelector(".add-item-form");
const formBtn = document.querySelector(".add-item");
const closeIcon = document.querySelector("#icon-close");

formBtn.addEventListener("click", (e) => {
  form.style.display = "inline-block";
  form.classList.add("show-form");
  div.classList.remove("open");
  div.classList.add("close");
});

closeIcon.addEventListener("click", (e) => {
  form.style.display = "none";
  form.classList.remove("show-form");
})

// form handler  
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const title = document.querySelector("#title").value.trim();
  const notes = document.querySelector("#my-notes").value.trim();
  const status = document.querySelector("#status").value.trim();
  
  if (title === '') {
    const p = document.querySelector("#title-error");
    p.innerText = "please enter a 'Title'";
    
  } 
  if (notes === '') {
    const p = document.querySelector("#notes-error");
    p.innerText = "please enter your 'notes or description'";
  } 
  if (store.img === undefined) {
    const p = document.querySelector("#img-error");
    p.innerText = "please enter a 'Image'";
  }  
  
  if (title != '' && notes != '' && status != '') {
    store.title = title;
    store.notes = notes;
    store.status = status;
  }

});