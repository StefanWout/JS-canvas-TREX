document.addEventListener("DOMContentLoaded", function () {
    // Function to load the Idle GIF and start animation
    function loadIdleGIF() {
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");
        

        // Clear the canvas before loading the new GIF
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Load the new GIF using Gifler
        gifler('assets/sprites/IdleDino.gif').get(function (anim) {
            window.animation = anim;
            anim.animateInCanvas(canvas);
        });
        }
        loadIdleGIF();
});



// function loadWalkingGIF(gifPath) {
//     let canvas = document.getElementById("myCanvas");
//     let ctx = canvas.getContext("2d");

//     // Clear the canvas before loading the new GIF
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Load the new GIF using Gifler
//     gifler(gifPath).get(function (anim) {
//         // Store the animation object for later use
//         window.animation = anim;
//         anim.animateInCanvas(canvas);
//     });
// }

// // Function to handle arrow key events
// function handleArrowKey(event) {
//     if (window.animation) {
//         var keyCode = event.keyCode;

//         switch (keyCode) {
//             case 37: // Left arrow key
//                 loadWalkingGIF('assets/sprites/WalkingDino - left.gif');
//                 break;
//             case 39: // Right arrow key
//                 loadWalkingGIF('assets/sprites/WalkingDino-right.gif');
//                 break;
//         }
//     }
// }

// Load the initial GIF when the DOM content is fully loaded


// Add event listener for arrow key events
// document.addEventListener("keydown", handleArrowKey);


 













// function drawGrid(ctx, canvasWidth, canvasHeight, numRows, numCols) {
//     const cellWidth = canvasWidth / numCols;
//     const cellHeight = canvasHeight / numRows;

//     ctx.strokeStyle = 'black';  // Set the stroke color for the grid lines
//     ctx.lineWidth = 1;          // Set the line width for the grid lines

//     // Draw vertical lines
//     for (let x = 0; x <= canvasWidth; x += cellWidth) {
//         ctx.beginPath();
//         ctx.moveTo(x, 0);
//         ctx.lineTo(x, canvasHeight);
//         ctx.stroke();
//     }

//     // Draw horizontal lines
//     for (let y = 0; y <= canvasHeight; y += cellHeight) {
//         ctx.beginPath();
//         ctx.moveTo(0, y);
//         ctx.lineTo(canvasWidth, y);
//         ctx.stroke();
//     }
// }
// drawGrid(ctx, canvas.width, canvas.height, 10, 10);
