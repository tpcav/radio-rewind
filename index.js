const playSound = require('play-sound')(opts = {});

const streamURL = 'http://stream.revma.ihrhls.com/zc1997';

// Play the radio stream
playSound.play(streamURL);

// If you want to stop the playback, you'll need to handle it differently since play-sound doesn't provide a direct stop method.
