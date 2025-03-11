

// Watch list logic

let watchList = JSON.parse(localStorage.getItem("watch-list")) || [];

function renderWatchlist() {
  if (watchList.length > 0) {
    const container = document.createElement('section');
    
    watchList.forEach(() => {
      const img = document.createElement('img');
      const title = document.createElement('h3');
      const description = document.createElement('p');
      const span = document.createElement('span');
      
      img.classList.add('shows-background');
      title.classList.add('shows-title');
      description.classList.add('shows-description'); 
      span.classList.add('shows-status');
      
    });
  }
}
