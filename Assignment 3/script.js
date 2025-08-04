const apiKey = "live_wWyEAvyia3yKIbWSklg2fViAeg8zw0qXSSCD1I8lt35PUch5d7cWa10REZqQbaYb"; 
const catImage = document.getElementById("Image");
const button = document.getElementById("showCat");

button.addEventListener("click", () => {
  fetch("https://api.thecatapi.com/v1/images/search", {
    headers: {
      "x-api-key": apiKey
    }
  })
    .then(response => response.json())
    .then(data => {
      catImage.src = data[0].url;
    })
    .catch(error => {
      console.error("Error cat image:", error);
    });
});
