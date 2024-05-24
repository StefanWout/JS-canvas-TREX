const gifs = [
    'assets/gifs/IdleDino.gif',
    'assets/gifs/WalkingDino-left.gif',
    'assets/gifs/WalkingDino-right.gif',
    'assets/gifs/IdleDinoRotate.gif'
];

let currentGifIndex = 0;
const gifImages = gifs.map(src => {
    const img = new Image();
    img.src = src;
    return img;
});

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let dinoX = canvas.width / 2;
const dinoY = canvas.height - 100; // Dino positioned at the bottom

const drawDino = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    const img = gifImages[currentGifIndex];
    ctx.drawImage(img, dinoX, dinoY);
};

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentGifIndex = 2; // Walking right
        dinoX += 10; // Move right
    } else if (event.key === 'ArrowLeft') {
        currentGifIndex = 1; // Walking left
        dinoX -= 10; // Move left
    } else {
        if (currentGifIndex === 1) {
            currentGifIndex = 3; // Reversed idle image
        } else {
            currentGifIndex = 0; // Idle
        }
    }
    // Ensure the dino stays within the canvas bounds
    dinoX = Math.max(0, Math.min(dinoX, canvas.width - gifImages[currentGifIndex].width));
    drawDino();
});

// Initial draw
gifImages[0].onload = drawDino; // Ensure the first image is loaded before drawing