// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const mainImg = document.querySelector('#expose img');
  const audioElement = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  // Initialize confetti
  const jsConfetti = new JSConfetti();

  // Horn Selection
  hornSelect.addEventListener('change', (event) => {
    const selectedHorn = event.target.value;
    
    if (selectedHorn === 'air-horn') {
      mainImg.src = 'assets/images/air-horn.svg';
      mainImg.alt = 'Air Horn';
      audioElement.src = 'assets/audio/air-horn.mp3';
    } else if (selectedHorn === 'car-horn') {
      mainImg.src = 'assets/images/car-horn.svg';
      mainImg.alt = 'Car Horn';
      audioElement.src = 'assets/audio/car-horn.mp3';
    } else if (selectedHorn === 'party-horn') {
      mainImg.src = 'assets/images/party-horn.svg';
      mainImg.alt = 'Party Horn';
      audioElement.src = 'assets/audio/party-horn.mp3';
    } else {
      mainImg.src = 'assets/images/no-image.png';
      mainImg.alt = 'No image selected';
      audioElement.src = '';
    }
  });

  // 2. Volume Control
  volumeSlider.addEventListener('input', (event) => {
    const volumeValue = event.target.value;
    
    // Set audio volume (scale 0-1)
    audioElement.volume = volumeValue / 100;

    // Update volume icon
    if (volumeValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volumeValue >= 1 && volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volumeValue >= 33 && volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else if (volumeValue >= 67) {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });

  // 3. Play Sound
  playButton.addEventListener('click', () => {
    // Only play if a horn is selected
    if (hornSelect.value === 'select') return;

    audioElement.play();

    // Trigger confetti if Party Horn is selected
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
