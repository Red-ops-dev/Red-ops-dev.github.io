document.getElementById('spinButton').addEventListener('click', () => {
    spinReels();
});

const images = [
    'speakerVolume0.png',
    'speakerVolume33.png',
    'speakerVolume66.png',
    'speakerVolume100.png'
];

function checkWinCondition(results) {
    const winCombo = [
        'speakerVolume33.png',
        'speakerVolume66.png',
        'speakerVolume100.png'
    ];
    const isWin = results[0] === winCombo[0] && results[1] === winCombo[1] && results[2] === winCombo[2];

    if (isWin && Math.random() < 0.02) { // 2% chance to trigger the win condition
        showModal();
    }
}

function spinReels() {
    const results = [];
    document.querySelectorAll('.reel img').forEach(reel => {
        const result = images[Math.floor(Math.random() * images.length)];
        console.log("Setting image source to:", result); // Log the result to see what's being set
        reel.src = result;
        results.push(result);
    });
    checkWinCondition(results);
}



function showModal() {
    const modal = document.getElementById('winModal');
    modal.style.display = 'block'; // Show the modal
    document.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none'; // Hide the modal when close button is clicked
    });
    const volumeSlider = document.getElementById('volumeSlider');
    volumeSlider.addEventListener('input', function() {
        const volumeDisplay = document.getElementById('volumeDisplay');
        volumeDisplay.textContent = 'Volume: ' + this.value + '%'; // Update volume display as the slider moves
    });
}