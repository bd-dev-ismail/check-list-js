const url = "https://jsonplaceholder.typicode.com/photos";
fetch(url)
  .then((res) => res.json())
  .then((data) => displayPhotos(data));

const displayPhotos = (photos) =>{
    const displayContainer = document.getElementById("display-container");
    photos = photos.slice(0, 20);
    photos.forEach(element => {
        // console.log(element);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
              <img src="${element.thumbnailUrl}" alt="" />
              <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
        </div>
        `;
        displayContainer.appendChild(div);
    });
};
displayPhotos();