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
let timer;
let currentShot = 0;
const totalShots = 4;

// Access the camera
async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const videoElement = document.getElementById('camera');
    videoElement.srcObject = stream;
  } catch (error) {
    console.error("Error accessing the camera: ", error);
  }
}

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
        currentShot++;
        takePhoto(); // Move to the next shot
      }
    }, 1000);
  }
}

function captureImage() {
  // Get member selection
  const member = document.getElementById('memberSelect').value;

  // Set overlay image based on selected member
  const overlayPath = member === "Joshua" ? "images/joshua-overlay.png" : "images/yushi-overlay.png";
  document.getElementById('overlayImage').src = overlayPath;
  document.getElementById('overlayImage').style.display = "block";

  // Logic to capture the image from the video and apply the overlay
  // Example to capture image will be implemented here
}

// Start the camera when the page loads
startCamera();
