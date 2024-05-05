let lockedReels = {};

function toggleLock(reelId) {
    const reel = document.getElementById(reelId);
    if (lockedReels[reelId]) {
        reel.classList.remove('locked');
        delete lockedReels[reelId];
    } else {
        reel.classList.add('locked');
        lockedReels[reelId] = true;
    }
}




document.getElementById('spin').addEventListener('click', function() {
    let images = ["../jsproject/volume0.png", "../jsproject/volume50.png", "../jsproject/volume100.png"];
    let reels = document.querySelectorAll('.reel');
    let results = [];
    for (let reel of reels) {
        if (!lockedReels[reel.id]) { 
            let result = images[Math.floor(Math.random() * images.length)];
            reel.src = result;
            results.push(result.split('/').pop());  
        } else {
            results.push(reel.src.split('/').pop()); 
        }
    }
    if (!checkSpecialVolumeAdjustment(results)) {
        updateVolume(results);
    }
    checkWin(results);
});

function checkSpecialVolumeAdjustment(results) {
    if (results[0] === "volume0.png" && results[1] === "volume50.png" && results[2] === "volume100.png") {
        document.getElementById('winModal').style.display = 'block';
        document.getElementById('result').textContent = 'Special volume adjust mode activated!';
        return true;
    }
    return false;
}

function updateVolume(results) {
    const volumeCounts = {
        'volume0.png': 0,
        'volume50.png': 50,
        'volume100.png': 100
    };

    if (results.includes("../jsproject/volume0.png")) {
        setVolume(0);
    } else if (results[0] === results[1] && results[1] === results[2]) {
        setVolume(volumeCounts[results[0]]);
    }
}




function setVolume(volume) {
    document.getElementById('volumeControl').value = volume;
    document.getElementById('volumeDisplay').textContent = volume + '%';
    document.getElementById('volumePercentage').textContent = volume + '%';
    updateVolumeBar(volume);
}

function updateVolumeBar(volume) {
    const bar = document.getElementById('volumeBar');
    bar.style.width = volume + '%';
}

function checkWin(results) {
    if (results[0] === results[1] && results[1] === results[2]) {
        if (Math.random() < 0.02) {
            document.getElementById('winModal').style.display = 'block';
            document.getElementById('result').textContent = 'Congratulations! You win!';
        } else {
            document.getElementById('result').textContent = "Don't give up :>)";
        }
    } else {
        document.getElementById('result').textContent = 'Oof so close!';
    }
}

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('winModal').style.display = 'none';
});

document.getElementById('volumeControl').addEventListener('input', function() {
    let volume = parseInt(this.value);
    document.getElementById('volumeDisplay').textContent = volume + '%';
    document.getElementById('volumePercentage').textContent = volume + '%';
    updateVolumeBar(volume);
});




