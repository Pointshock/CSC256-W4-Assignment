// Javascript to control the slideshow
window.onload = initLinks;

var thePic = 0;
// Make an array to hold the images
var picArray = new Array("/assets/Snow_peaks.jpg", "/assets/Snow_bank.jpg", "/assets/Clouds.jpg", "/assets/Back_country.jpg");

// Function to initialize the links
function initLinks() {
    document.getElementById("prevLink").onclick = processPrevious;
    document.getElementById("nextLink").onclick = processNext;
}

// Function to change to previous image
function processPrevious() {
    if (thePic == 0) {
        thePic = picArray.length;
    }
    thePic--;
    document.getElementById("myPicture").src = picArray[thePic];
    return false;
}

// Function to change to next image
function processNext() {
    thePic++;
    if (thePic == picArray.length) {
        thePic = 0;
    }
    document.getElementById("myPicture").src = picArray[thePic];
    return false;
}