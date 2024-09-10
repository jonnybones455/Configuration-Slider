// Get the HTML elements
const backgroundSelect = document.getElementById('background');
const poleSelect = document.getElementById('pole');
const cabinetSelect = document.getElementById('cabinet');
const shroudSelect = document.getElementById('shroud');
const fusionSelect = document.getElementById('fusion');
const powerFiberSelect = document.getElementById('power-fiber');
const imageContainer = document.getElementById('image-container'); // A container for stacking images

// Event listeners for each select element
backgroundSelect.addEventListener('change', updateImages);
poleSelect.addEventListener('change', updateImages);
cabinetSelect.addEventListener('change', updateImages);
shroudSelect.addEventListener('change', updateImages);
fusionSelect.addEventListener('change', updateImages);
powerFiberSelect.addEventListener('change', updateImages);

// Function to update the images based on the selections
function updateImages() {
    // Clear the image container before adding new layers
    imageContainer.innerHTML = '';

    // Get selected options
    const background = backgroundSelect.value;
    const pole = poleSelect.value;
    const cabinet = cabinetSelect.value;
    const shroud = shroudSelect.value;
    const fusion = fusionSelect.value;
    const powerFiber = powerFiberSelect.value;

    // Add the background image
    if (background !== 'transparent') {
        const backgroundImg = createImageElement(`images/${background}.png`);
        imageContainer.appendChild(backgroundImg);
    }

    // Add the pole/lamp-post image
    if (pole !== 'none') {
        const poleImg = createImageElement(`images/${pole}.png`);
        imageContainer.appendChild(poleImg);
    }

    // Add the cabinet image
    if (cabinet !== 'none') {
        const cabinetImg = createImageElement(`images/${cabinet}.png`);
        imageContainer.appendChild(cabinetImg);
    }

    // Add the shroud image
    if (shroud !== 'no-shroud') {
        const shroudImg = createImageElement(`images/${shroud}.png`);
        imageContainer.appendChild(shroudImg);
    }

    // Add the fusion image
    if (fusion !== 'no-fusion') {
        const fusionImg = createImageElement(`images/${fusion}.png`);
        imageContainer.appendChild(fusionImg);
    }

    // Add the power/fiber image
    if (powerFiber !== 'none') {
        const powerFiberImg = createImageElement(`images/${powerFiber}.png`);
        imageContainer.appendChild(powerFiberImg);
    }
}

// Helper function to create an image element
function createImageElement(src) {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'config-layer'; // Apply some styling for layering
    return img;
}
