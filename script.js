
window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const muteBtn = document.getElementById('mute-toggle');

    // Try to autoplay
    audio.volume = 0.2;
    audio.play().catch(() => {
        // Will fail unless user interacts (some browsers block autoplay with sound)
    });

    // Toggle mute
    muteBtn.addEventListener('click', () => {
        audio.muted = !audio.muted;
        muteBtn.textContent = audio.muted ? '🔇' : '🔊';
    });
});
