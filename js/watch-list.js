

// Watch list logic

let watchList = JSON.parse(localStorage.getItem("watch-list")) || [];

function renderWatchlist(list = watchList) {
  
  let container = document.querySelector('.show-grid');
  console.log(container);
  
  if(!container) {
    container = document.createElement('section');
    container.classList.add('show-grid');
    document.querySelector("body").appendChild(container);
  } else{
    container.innerHTML = '';
  }
  
  if (list.length === 0) {
    container.innerHTML = '<p>No Shows Found :(</p>';
    return;
  }
  
  list.forEach((e) => {
    // creating element for show card
    const div = document.createElement('div');
    const img = document.createElement('img');
    const editBtn = document.createElement('img');
    const title = document.createElement('h3');
    const span = document.createElement('span');
    const Titlewrapper = document.createElement('div');
    const description = document.createElement('p');
    const descriptionWrapper = document.createElement('div');
    
    // adding classname
    div.classList.add('grid-item')
    img.classList.add('grid-item-img');
    editBtn.classList.add('grid-item-editBtn');
    title.classList.add('grid-item-title');
    span.classList.add('grid-item-status');
    description.classList.add('grid-item-description');
    Titlewrapper.classList.add('grid-item-title-wrapper');
    descriptionWrapper.classList.add('grid-item-description-wrapper');
    
    // adding attributes
    img.src = e.img;
    span.innerText = ` [status: ${e.state}]`;
    title.innerText = `${e.title}  `
    description.innerText = e.notes;
    editBtn.src = "../assets/images/icon-edit.svg";
    editBtn.setAttribute("data-id", e.id);
    
    
    // creating card structure
    div.appendChild(img);
    
    Titlewrapper.appendChild(title);
    Titlewrapper.appendChild(span);
    Titlewrapper.appendChild(editBtn);
    div.appendChild(Titlewrapper);
    
    descriptionWrapper.appendChild(description);
    div.appendChild(descriptionWrapper);
    
    container.appendChild(div);
    
  });
}

// Initial render
renderWatchlist();

// edit feature
const editBtns = document.querySelectorAll(".grid-item-editBtn");
editBtns.forEach(item => {
  item.addEventListener("click", (e) => {
    const editID = e.currentTarget.getAttribute("data-id");
    currentEditingID = editID;
    
    const showToEdit = watchList.find(show => show.id == editID);
    
    form.style.display = "inline-block";
    form.classList.add("show-form");
    div.classList.remove("open");
    div.classList.add("close");
    
    mode.innerText = "Edit Show";
    submitBtn.innerText = "save"
    
    imgIcon.src = showToEdit.img;
    document.querySelector("#title").value = showToEdit.title;
    document.querySelector("#my-notes").value = showToEdit.notes;
    document.querySelector("#status").value = showToEdit.state;
  })
});

// filtering function 
function filterWatchlist(query) {
  const filteredList = watchList.filter(show =>  show.title.toLowerCase().includes(query.toLowerCase()) );
  renderWatchlist(filteredList);
}

const searchInput = document.querySelector("#input-field");
searchInput.addEventListener("input", (e) => {
  const query = e.target.value; 
  filterWatchlist(query);
})