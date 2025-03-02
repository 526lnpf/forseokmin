let timer;
let currentShot = 0;
const totalShots = 4;

// Start the camera when the page loads
document.addEventListener('DOMContentLoaded', () => {
  startCamera();
});

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

// Update members when a group is selected
document.getElementById('groupSelect').addEventListener('change', updateMembers);

function updateMembers() {
  const group = document.getElementById('groupSelect').value;
  const memberSelect = document.getElementById('memberSelect');
  
  // Clear existing options
  memberSelect.innerHTML = '';

  // Add members based on selected group
  if (group === 'Seventeen') {
    const members = ['S. Coups', 'Jeonghan', 'Joshua', 'Jun', 'Hoshi', 'Wonwoo', 'Woozi', 'DK', 'Mingyu', 'The8', 'Seungkwan', 'Vernon', 'Dino'];
    members.forEach(member => {
      memberSelect.innerHTML += `<option value="${member}">${member}</option>`;
    });
  } else if (group === 'NCT WISH') {
    const members = ['Sion', 'Riku', 'Yushi', 'Jaehee', 'Ryo', 'Sakuya'];
    members.forEach(member => {
      memberSelect.innerHTML += `<option value="${member}">${member}</option>`;
    });
  }

  // Show the members dropdown if options exist
  memberSelect.style.display = memberSelect.innerHTML ? 'block' : 'none';
}

// Capture button event listener
document.getElementById('capture').addEventListener('click', startCapture);

function startCapture() {
  currentShot = 0;
  // Clear any previously captured photos
  document.getElementById('photos').innerHTML = '';
  takePhoto();
}

function takePhoto() {
  if (currentShot < totalShots) {
    let countdown = 3;
    const timerDisplay = document.getElementById('timer');
    timerDisplay.innerHTML = countdown;
    
    timer = setInterval(() => {
      countdown--;
      if (countdown <= 0) {
        clearInterval(timer);
        timerDisplay.innerHTML = 'Smile!';
        captureFrame();
        currentShot++;
        // Brief pause before starting next countdown
        setTimeout(takePhoto, 500);
      } else {
        timerDisplay.innerHTML = countdown;
      }
    }, 1000);
  } else {
    // All shots taken; clear the timer display.
    document.getElementById('timer').innerHTML = '';
  }
}

function captureFrame() {
  const video = document.getElementById('camera');
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext('2d');
  
  // Draw the current frame from the video onto the canvas.
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Optionally, you can also draw an overlay image here if needed.
  // For example:
  // const overlayImage = document.getElementById('overlayImage');
  // if (overlayImage.src && overlayImage.style.display !== 'none') {
  //   ctx.drawImage(overlayImage, 0, 0, canvas.width, canvas.height);
  // }

  // Append the captured photo to the photos container.
  const photosContainer = document.getElementById('photos');
  canvas.className = 'captured-photo';
  photosContainer.appendChild(canvas);
}
