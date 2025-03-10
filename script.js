// Redirect to social media handle
function redirectToSocial() {
  window.location.href = 'https://www.instagram.com/yourhandle'; // Replace with your social media link
}

// Play video on button click
document.getElementById('play-btn').addEventListener('click', () => {
  const video = document.getElementById('video');
  const playBtn = document.getElementById('play-btn');

  video.muted = false;
  video.play()
    .then(() => {
      playBtn.classList.add('hidden'); // Hide play button once video starts
    })
    .catch(error => console.error('Video play failed:', error));
});
