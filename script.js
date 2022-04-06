const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];
//api
const count= 10;
const apiKey = '4W88gEjxULv_XfQOKMeqArpa_P-_vWrL53H9cGc-nqw';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function displayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
      // Create <a> to link to Unsplash
       const item = document.createElement('a');
       item.setAttribute('href', photo.links.html);
       item.setAttribute('target', '_blank');
      // Create <img> for photo
       const img = document.createElement('img');
       img.setAttribute('src', photo.urls.regular);
       img.setAttribute('alt', photo.alt_description);
       img.setAttribute('title', photo.alt_description);
      // Put <img> inside <a>, then put both inside imageContainer Element
       item.appendChild(img);
       imageContainer.appendChild(item);
    });

}

// get photos from api unsplash
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    }catch(error){

    }
}

getPhotos();