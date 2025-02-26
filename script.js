let timer;
let currentShot = 0;
const totalShots = 4;

document.getElementById('capture').addEventListener('click', startCapture);

function startCapture() {
  currentShot = 0;
  takePhoto();
}

function takePhoto() {
  if (currentShot < totalShots) {
    document.getElementById('timer').innerHTML = 3;
    timer = setInterval(() => {
      let timeLeft = parseInt(document.getElementById('timer').innerHTML);
      if (timeLeft > 1) {
        document.getElementById('timer').innerHTML = timeLeft - 1;
      } else {
        clearInterval(timer);
        captureImage();
        current
function captureImage() {
  // Get member selection
  const member = document.getElementById('memberSelect').value;

  // Set overlay image based on selected member
  const overlayPath = member === "Joshua" ? "images/joshua-overlay.png" : "images/yushi-overlay.png";
  document.getElementById('overlayImage').src = overlayPath;
  document.getElementById('overlayImage').style.display = "block";
  
  // Logic to capture the image from the video and apply the overlay
  // This is where you would use canvas to capture the video frame and apply the overlay
}
  
  // Logic to capture the image from the video and apply the overlay
  // This is where you would use canvas to capture the video frame and apply the overlay
  // Example:
  // const canvas = document.createElement('canvas');
  // const context = canvas.getContext('2d');
  // context.drawImage(videoElement, 0, 0);
  // context.drawImage(overlayImageElement, 0, 0);
  // Save or display the final image
}
