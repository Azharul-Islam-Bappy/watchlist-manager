
const store = {
  img: undefined,
  title: undefined,
  notes: undefined,
  state: undefined,
  id: undefined
}
let count = watchList.length;
let currentEditingID = null;
const mode = document.querySelector(".f-header");
const submitBtn = document.querySelector("button[type='submit'");
const imgIcon = document.querySelector(".upload-icon");

const form = document.querySelector(".add-item-form");
const formBtn = document.querySelector(".add-item");
const closeIcon = document.querySelector("#icon-close");
const formImg = document.querySelector("#background");

formBtn.addEventListener("click", (e) => {
  form.style.display = "inline-block";
  form.classList.add("show-form");
  div.classList.remove("open");
  div.classList.add("close");
});

closeIcon.addEventListener("click", (e) => {
  mode.innerText = "Add Show";
  submitBtn.innerText = "submit";
  form.style.display = "none";
  form.classList.remove("show-form");
  
  imgIcon.src = "../assets/images/icon-upload.svg";
  document.querySelector("#title").value = "";
  document.querySelector("#my-notes").value = "";
  document.querySelector("#status").value = "to-watch";
})

// form handler  
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  
  const title = document.querySelector("#title").value.trim();
  const notes = document.querySelector("#my-notes").value.trim();
  const state = document.querySelector("#status").value.trim();
  
  if (title === '') {
    const p = document.querySelector("#title-error");
    p.innerText = "please enter a 'Title'";
  } else {
    const p = document.querySelector("#title-error");
    p.innerText = "";
  }
  if (notes === '') {
    const p = document.querySelector("#notes-error");
    p.innerText = "please enter your 'notes or description'";
  } else {
    const p = document.querySelector("#notes-error");
    p.innerText = "";
  }
  if (store.img === undefined) {
    const p = document.querySelector("#img-error");
    p.innerText = "please select a 'Image'";
  } else {
    const p = document.querySelector("#img-error");
    p.innerText = "";
  }
  
  if (title != '' && notes != '' && state != '' && (currentEditingID || store.img !== undefined)) {
    
    if (currentEditingID) {
      const index = watchList.findIndex(show => show.id == currentEditingID);
      
      if (index !== -1) {
        
        watchList[index].title = title;
        watchList[index].notes = notes;
        watchList[index].state = state;
        
        if (store.img) {
          watchList[index].img = store.img;
        }
        
        currentEditingID = null;
        mode.innerText = "Add Show";
        submitBtn.innerText = "submit";
        imgIcon.src = "../assets/images/icon-upload.svg";
        document.querySelector("#title").value = "";
        document.querySelector("#my-notes").value = "";
        document.querySelector("#status").value = "to-watch";
        const p = document.querySelector("#img-error");
        p.innerText = '';
      }
      
    } else {
      store.title = title;
      store.notes = notes;
      store.state = state;
      store.id = count++;
      watchList.push({...store});
    }
    
    
    localStorage.setItem("watch-list", JSON.stringify(watchList)); 
      
    form.style.display = "none";
    form.classList.remove("show-form");
    submitBtn.innerText = "submit";
    
    renderWatchlist();
  }
});

// file type checker
function fileTypeCheck(file, allowedFileTypes) {
  if (!Array.isArray(allowedFileTypes)) {
    throw new Error('allowedType must be array');
  }
  
  if (!allowedFileTypes.includes(file.type)) return `file must be of ${allowedFileTypes.join(', ')} type`;
  
  return true;
}

function fileReader(elem, allowedFileTypes, callback) {
  elem.addEventListener("change", (e) => {
    const file = e.target.files[0];
    
    if(!file) {
      callback({error: 'Please select a image'});
      return;
    }
    
    const typeCheck = fileTypeCheck(file, allowedFileTypes);
    
    if (typeCheck != true) {
      callback({error: typeCheck});
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      callback({data: e.target.result, fileName: e.filename});
      return;
    }
    reader.readAsDataURL(file);
  });
}

function callback(obj) {
  if (obj.error) {
    const error = document.querySelector("#img-error");
    error.innerText = error;
  } else if (obj.data) {
    
    const imgName = document.querySelector(".msg");
    
    imgIcon.src = obj.data;
    imgName.innerText = obj.fileName;
    
    store.img = obj.data
  }
}

fileReader(formImg, ['image/jpg', 'image/jpeg', 'image/png'], callback);