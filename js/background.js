const images=["01.jpeg", "02.jpg", "03.jpg"];

const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImages = document.createElement("img");

bgImages.src = `img/${chosenImage}`;

document.body.appendChild(bgImages);