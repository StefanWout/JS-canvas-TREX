const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const gifUrls = [
    'assets/sprites/IdleDino.gif',
    'assets/sprites/WalkingDino-left.gif',
    'assets/sprites/WalkingDino-right.gif'
];
const gifImages = gifUrls.map(url => {
    const img = new Image();
    img.src = url;
    return img;
});

const object = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 100,
    height: 100,
    speed: 10,
    direction: 'idle', // 'idle', 'left', or 'right'
    currentGifIndex: 0
};

function updateGifIndex() {
    switch (object.direction) {
        case 'left':
            object.currentGifIndex = 1; // Left movement GIF
            break;
        case 'right':
            object.currentGifIndex = 2; // Right movement GIF
            break;
        case 'idle':
        default:
            object.currentGifIndex = 0; // Idle GIF
            break;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const img = gifImages[object.currentGifIndex];
    ctx.drawImage(img, object.x - object.width / 2, object.y - object.height / 2, object.width, object.height);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(gifImages[currentGifIndex], object.x - object.width / 2, object.y - object.height / 2, object.width, object.height);
}

function moveObject(direction) {
    object.direction = direction;
    if (direction === 'left') {
        object.x = Math.max(object.x - object.speed, object.width / 2);
    } else if (direction === 'right') {
        object.x = Math.min(object.x + object.speed, canvas.width - object.width / 2);
    }
    updateGifIndex();
    draw();
}

function stopObject() {
    object.direction = 'idle';
    updateGifIndex();
    draw();
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        moveObject('left');
    } else if (event.key === 'ArrowRight') {
        moveObject('right');
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        stopObject();
    }
});

gifImages[0].onload = () => {
    draw(); // Draw the initial image once the first GIF is loaded
};
