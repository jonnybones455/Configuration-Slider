// Get the HTML elements
const backgroundSelect = document.getElementById('background');
const poleSelect = document.getElementById('pole');
const cabinetSelect = document.getElementById('cabinet');
const shroudSelect = document.getElementById('shroud');
const fusionSelect = document.getElementById('fusion');
const powerFiberSelect = document.getElementById('power-fiber');
const image = document.getElementById('image');

// Event listeners for each select element
backgroundSelect.addEventListener('change', updateImage);
poleSelect.addEventListener('change', updateImage);
cabinetSelect.addEventListener('change', updateImage);
shroudSelect.addEventListener('change', updateImage);
fusionSelect.addEventListener('change', updateImage);
powerFiberSelect.addEventListener('change', updateImage);

// Function to update the image based on the selections
function updateImage() {
    const background = backgroundSelect.value;
    const pole = poleSelect.value;
    const cabinet = cabinetSelect.value;
    const shroud = shroudSelect.value;
    const fusion = fusionSelect.value;
    const powerFiber = powerFiberSelect.value;

    // Construct the image file path based on the selected options
    const imagePath = `images/${background}_${pole}_${cabinet}_${shroud}_${fusion}_${powerFiber}.png`;
    
    // Update the image source
    image.src = imagePath;
}
