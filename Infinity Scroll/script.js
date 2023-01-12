// Unsplash API
const count = 10;
const apiKey = '0C2EqBIvWAvfg-QwUbI7zyAnsAV4JIcVXKaaR3syuXY'
const apiUrl = `https://api.unsplash.com/photos/random/?
client_id=${apiKey}&count=${count}`

// Get photos from unsplash API

async function getPhotos() {
  try {

    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    // Catch error Here
  }


}

// On load
getPhotos();