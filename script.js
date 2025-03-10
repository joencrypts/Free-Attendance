// Redirect to social media handle
function redirectToSocial() {
  window.location.href = 'https://www.instagram.com/texus_2k25'; // Replace with your social media link
}

// Start video and audio after countdown
window.onload = () => {
  const video = document.getElementById('video');
  const countdown = document.getElementById('countdown');
  const audio = document.getElementById('background-audio');

  countdown.style.display = 'block';
  let count = 3;
  countdown.innerText = count;

  const interval = setInterval(() => {
    count--;
    countdown.innerText = count;
    if (count === 0) {
      clearInterval(interval);
      countdown.style.display = 'none';
      video.style.display = 'block';

      // Start video muted to bypass autoplay restrictions
      video.muted = true;
      video.play().then(() => {
        video.muted = false; // Try to unmute after autoplay starts
      }).catch(error => console.error('Autoplay failed:', error));

      // Start background audio after countdown
      audio.play().catch(error => console.error('Audio play failed:', error));
    }
  }, 1000);
};
