// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textToSpeak = document.getElementById('text-to-speak');
  const playButton = document.querySelector('button');
  const face = document.querySelector('#explore img');

  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }

  playButton.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(textToSpeak.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
        break;
      }
    }

    synth.speak(utterThis);
    face.src = 'assets/images/smiling-open.png';

    utterThis.onend = () => {
      face.src = 'assets/images/smiling.png';
    };
  });
}