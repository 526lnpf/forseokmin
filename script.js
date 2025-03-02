let currentShot = 0;
const totalShots = 4;
const timerDisplay = document.getElementById('timer');
const photosContainer = document.getElementById('photos');

// Start the camera when the page loads
document.addEventListener('DOMContentLoaded', () => {
    startCamera();
});

// Function to access the camera
async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        document.getElementById('camera').srcObject = stream;
    } catch (error) {
        console.error("Error accessing the camera: ", error);
    }
}

// Event listener for the Capture button
document.getElementById('capture').addEventListener('click', startCapture);

function startCapture() {
    currentShot = 0;
    photosContainer.innerHTML = ''; // Clear previous photos
    captureWithDelay();
}

// Function to handle countdown and photo capture
function captureWithDelay() {
    if (currentShot < totalShots) {
        let countdown = 3;
        timerDisplay.innerHTML = countdown;
        let countdownInterval = setInterval(() => {
            countdown--;
            timerDisplay.innerHTML = countdown;
            if (countdown === 0) {
                clearInterval(countdownInterval);
                takePhoto();
                currentShot++;
                if (currentShot < totalShots) {
                    setTimeout(captureWithDelay, 1000); // Delay before next countdown
                } else {
                    timerDisplay.innerHTML = ""; // Clear timer after last shot
                }
            }
        }, 1000);
    }
}

// Function to take a photo
function takePhoto() {
    const video = document.getElementById('camera');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');

    // Draw the video frame onto the canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Draw overlay if selected
    const overlay = document.getElementById('overlayImage');
    if (overlay.src && overlay.style.display !== 'none') {
        ctx.drawImage(overlay, 0, 0, canvas.width, canvas.height);
    }

    // Save the captured image
    const photo = document.createElement('img');
    photo.src = canvas.toDataURL('image/png');
    photo.classList.add("captured-photo"); // Add CSS class for styling
    photosContainer.appendChild(photo);
}

// Event listener for overlay selection
document.getElementById('overlaySelect').addEventListener('change', function() {
    const overlayImage = document.getElementById('overlayImage');
    overlayImage.src = this.value;
    overlayImage.style.display = "block";
});

// Allow users to upload their own overlay
document.getElementById('overlayUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const overlayImage = document.getElementById('overlayImage');
            overlayImage.src = e.target.result;
            overlayImage.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});

// Populate member selection dynamically based on group
document.getElementById('groupSelect').addEventListener('change', function() {
    const group = this.value;
    const memberSelect = document.getElementById('memberSelect');
    memberSelect.innerHTML = ''; // Clear previous options

    const members = {
        'Seventeen': ['S. Coups', 'Jeonghan', 'Joshua', 'Jun', 'Hoshi', 'Wonwoo', 'Woozi', 'DK', 'Mingyu', 'The8', 'Seungkwan', 'Vernon', 'Dino'],
        'NCT WISH': ['Sion', 'Riku', 'Yushi', 'Jaehee', 'Ryo', 'Sakuya']
    };

    if (members[group]) {
        members[group].forEach(member => {
            const option = document.createElement('option');
            option.value = member;
            option.textContent = member;
            memberSelect.appendChild(option);
        });
        memberSelect.style.display = 'block'; // Show dropdown
    } else {
        memberSelect.style.display = 'none';
    }
});
