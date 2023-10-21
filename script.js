const audioElement = document.getElementById('radioStream');
const playButton = document.getElementById('playButton');
const volumeSlider = document.getElementById('volumeSlider');
const seekSlider = document.getElementById('seekSlider');
const rewindButton = document.getElementById('rewindButton');
const forwardButton = document.getElementById('forwardButton');
const liveButton = document.getElementById('liveButton');

function toggleAudio() {
    if (audioElement.paused || audioElement.ended) {
        audioElement.play();
        playButton.textContent = 'Pause';
    } else {
        audioElement.pause();
        playButton.textContent = 'Play';
    }
}

function adjustVolume() {
    audioElement.volume = volumeSlider.value;
}

function rewindAudio() {
    const currentTime = audioElement.currentTime;
    audioElement.currentTime = Math.max(currentTime - 10, 0); // Rewind by 10 seconds
}

function fastForwardAudio() {
    const currentTime = audioElement.currentTime;
    const duration = audioElement.duration || 0;
    audioElement.currentTime = Math.min(currentTime + 10, duration); // Fast-forward by 10 seconds
}

function jumpToLive() {
    // Reload the audio stream to jump to the live part
    audioElement.load();
    audioElement.play();
}

// Add event listener for when the audio stream ends
audioElement.addEventListener('ended', () => {
    playButton.textContent = 'Play';
});

// Initialize the play button text
toggleAudio();
