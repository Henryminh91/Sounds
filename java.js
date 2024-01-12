const soundFolder = "memeSounds";
const customSounds = [
  {
    fileName: "bombastic-side-eye.mp3",
    hotKey: "q",
  },
  {
    fileName: "movie_1.mp3",
    hotKey: "w",
  },
  {
    fileName: "daddyy-chill.mp3",
    hotKey: "e",
  },
  {
    fileName: "its-me-mario.mp3",
    hotKey: "a",
  },
  {
    fileName: "suprise-motherf-er.mp3",
    hotKey: "r",
  },
  {
    fileName: "anime-wow-sound-effect.mp3",
    hotKey: "s",
  },
];

const soundEffectsEl = document.getElementById("soundEffects");

const createSoundEffect = (audioSrc) => {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = audioSrc.fileName;
  buttonEl.className = "custom-button";

  const audioEl = document.createElement("audio");
  audioEl.src = `${soundFolder}/${audioSrc.fileName}`;
  audioSrc.audioEl = audioEl;

  buttonEl.addEventListener("pointerdown", () => {
    audioEl.play();
  });


  return buttonEl;
};

customSounds.forEach((soundObj) => {
  soundEffectsEl.append(createSoundEffect(soundObj));
});

window.addEventListener("keydown", (event) => {
  const keyPressed = event.key.toLowerCase();
  const isSoundFound = customSounds.find(
    (sound) => sound.hotKey === keyPressed
  );

  if (isSoundFound) {
    isSoundFound.audioEl.play();
  }
});

window.addEventListener("keyup", (event) => {
  const keyPressed = event.key.toLowerCase();
  const isSoundFound = customSounds.find(
    (sound) => sound.hotKey === keyPressed
  );

  if (isSoundFound) {
    isSoundFound.audioEl.pause();
    isSoundFound.audioEl.currentTime = 0;
  }
});
