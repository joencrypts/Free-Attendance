// Redirect to social media handle
function redirectToSocial() {
  window.location.href = 'https://www.instagram.com/texus_2k25'; // Replace with your social media link
}

// Start video with countdown after 3 seconds
window.onload = () => {
  const video = document.getElementById('video');
  const countdown = document.getElementById('countdown');

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

      // Start video and unmute
      video.muted = false;
      video.play().catch(error => console.error('Video play failed:', error));
    }
  }, 1000);
};
