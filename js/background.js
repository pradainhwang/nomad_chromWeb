const images = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const img = new Image();

img.src = `img/${chosenImage}`;

img.classList.add('bgImg');



// const bgImage = document.createElement('img');

// bgImage.src = `img/${chosenImage}`;

document.querySelector(".background").prepend(img);

// document.body.prepend(img);

// document.body.appendChild(bgImage);