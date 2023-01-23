const imageContainer = document.getElementById("image-container")
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = '0C2EqBIvWAvfg-QwUbI7zyAnsAV4JIcVXKaaR3syuXY'
const apiUrl = `https://api.unsplash.com/photos/random/?
client_id=${apiKey}&count=${count}`


function setAttribute(element,attributes){
    for(const key in attributes){
      element.setAttribute(key,attributes[key])
    }
}

// Create Elements For Links & Photos , Add to DOM
function displayPhotos(){
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to unsplash
    const item = document.createElement('a');
  
    setAttribute(item, {
      href :photo.links.html,
      target:'_blank',
    })

    // create <img> for photo
    const img = document.createElement('img');

    setAttribute(img, {
      src:photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    })

    // put <img> inside <a> then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);

  })
}

// Get photos from unsplash API
async function getPhotos() {
  try {

    const response = await fetch(apiUrl)
    photosArray  = await response.json()
    displayPhotos();
  } catch (error) {
    // Catch error Here
  }


}

// On load
getPhotos();