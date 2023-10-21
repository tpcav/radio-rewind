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
    
    // Define the live time (you may need to adjust this value)
    const liveTime = duration; // Set it to the total duration for simplicity
    
    // Calculate the new time, but don't exceed the live time
    const newTime = Math.min(currentTime + 10, liveTime);
    
    audioElement.currentTime = newTime;
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
