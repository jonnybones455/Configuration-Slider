// Function to update the images based on the selections
function updateImages() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear the image container before adding new layers

    const background = document.getElementById('background').value;
    const pole = document.getElementById('pole').value;
    const cabinet = document.getElementById('cabinet').value;
    const shroud = document.getElementById('shroud').value;
    const fusion = document.getElementById('fusion').value;
    const powerFiber = document.getElementById('power-fiber').value;

    // Add the background image
    if (background !== 'transparent') {
        const backgroundImg = createImageElement(`images/${background}.png`); // Images are in the 'images/' folder
        imageContainer.appendChild(backgroundImg);
    }

    // Add the pole/lamp-post image
    if (pole !== 'none') {
        const poleImg = createImageElement(`images/${pole}.png`); // Images are in the 'images/' folder
        imageContainer.appendChild(poleImg);
    }

    // Add other layers similarly
    if (cabinet !== 'none') {
        const cabinetImg = createImageElement(`images/${cabinet}.png`);
        imageContainer.appendChild(cabinetImg);
    }

    if (shroud !== 'no-shroud') {
        const shroudImg = createImageElement(`images/${shroud}.png`);
        imageContainer.appendChild(shroudImg);
    }

    if (fusion !== 'no-fusion') {
        const fusionImg = createImageElement(`images/${fusion}.png`);
        imageContainer.appendChild(fusionImg);
    }

    if (powerFiber !== 'none') {
        const powerFiberImg = createImageElement(`images/${powerFiber}.png`);
        imageContainer.appendChild(powerFiberImg);
    }
}

// Helper function to create image elements
function createImageElement(src) {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'config-layer'; // Add class for styling
    return img;
}
