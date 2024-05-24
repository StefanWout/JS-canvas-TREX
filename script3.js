
// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// const gifUrls = ['assets/sprites/IdleDino.gif', 'assets/sprites/WalkingDino - left.gif', 'assets/sprites/WalkingDino-right.gif']; // Replace with your GIF URLs
// let currentGifIndex = 0;
// const gifImages = gifUrls.map(url => {
//     const img = new Image();
//     img.src = url;
//     return img;
// });

// const object = {
//     x: canvas.width / 2,
//     y: canvas.height / 2,
//     width: 100, // Set the width of the GIF
//     height: 100, // Set the height of the GIF
//     speed: 10
// };

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(gifImages[currentGifIndex], object.x - object.width / 2, object.y - object.height / 2, object.width, object.height);
// }

// function changeGif() {
//     currentGifIndex = (currentGifIndex + 1) % gifUrls.length;
// }

// function moveObject(direction) {
//     if (direction === 'left') {
//         object.x = Math.max(object.x - object.speed, object.width / 2);
//     } else if (direction === 'right') {
//         object.x = Math.min(object.x + object.speed, canvas.width - object.width / 2 );
//     }
//     changeGif();
//     draw();
// }

// document.addEventListener('keydown', (event) => {
//     if (event.key === 'ArrowLeft') {
//         moveObject('left');
//     } else if (event.key === 'ArrowRight') {
//         moveObject('right');
//     }
// });

// gifImages[0].onload = () => {
//     draw(); // Draw the initial image once the first GIF is loaded
// };
//-----------------------------------------------------------------------------------------------------------

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const gifUrls = ['assets/sprites/IdleDino.gif', 'assets/sprites/WalkingDino - left.gif', 'assets/sprites/WalkingDino-right.gif']; // Replace with your GIF URLs
let currentGifIndex = 0;
const gifImages = gifUrls.map(url => {
    const img = new Image();
    img.src = url;
    return img;
});

const object = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 100, // Set the width of the GIF
    height: 100, // Set the height of the GIF
    speed: 10
};

function draw(currentGifIndex) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(gifImages[currentGifIndex], object.x - object.width / 2, object.y - object.height / 2, object.width, object.height);
}


function moveObject(direction) {
    if (direction === 'left') {
        object.x = Math.max(object.x - object.speed, object.width / 2);
        currentGifIndex = 1; // Set to the second GIF for left movement
    } else if (direction === 'right') {
        object.x = Math.min(object.x + object.speed, canvas.width - object.width / 2 );
        currentGifIndex = 2; // Set to the third GIF for right movement
    }
    draw();
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        moveObject('left');
    } else if (event.key === 'ArrowRight') {
        moveObject('right');
    } else {
        currentGifIndex = 0;
}
});

gifImages[0].onload = () => {
    draw(); // Draw the initial image once the first GIF is loaded
};
//-----------------------------------------------------------------------------------------------------------

