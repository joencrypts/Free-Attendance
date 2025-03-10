// Redirect to social media handle
function redirectToSocial() {
  window.location.href = 'https://www.instagram.com/texus_2k25'; // Replace with your social media link
}

// Unmute video and play audio together after user interaction
document.addEventListener('click', () => {
  const video = document.getElementById('video');
  const audio = document.getElementById('background-audio');

  // Unmute and play video
  if (video.muted) {
    video.muted = false;
    video.play().catch(error => console.error('Video play failed:', error));
  }

  // Play background audio
  if (audio.paused) {
    audio.play().catch(error => console.error('Audio play failed:', error));
  }
}, { once: true });
