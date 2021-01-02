let timeMin = 0;
let timeSec = 0;
let timeMiliSec = 0;
let timer;

let startFlg = 0

$(document).ready( function(){
    document.getElementById('min').innerText = 0;
    document.getElementById('sec').innerText = 0;
    document.getElementById('milisec').innerText = 0;
    changeButtonState(0);
});

let countTime = function() {
    timeMiliSec++;

    if(timeMiliSec === 10) {
        timeSec++;
        timeMiliSec = 0;
    }

    if(timeSec === 60) {
        timeMin++;
        timeSec = 0;
    }

    document.getElementById('min').innerText = timeMin;
    document.getElementById('sec').innerText = timeSec;
    document.getElementById('milisec').innerText = timeMiliSec;
}



function startCount() {
    timer = setInterval(countTime, 100);
    changeButtonState(1);
}

function stopCount() {
    clearInterval(timer);
    changeButtonState(0);
}

function resetCount() {
    timeMin = 0;
    timeSec = 0;
    timeMiliSec = 0;
    document.getElementById('min').innerText = 0;
    document.getElementById('sec').innerText = 0;
    document.getElementById('milisec').innerText = 0;
}

// ボタン状態変更
function changeButtonState(state) {
    if (state === 1) {
        $("#start").prop('disabled', true);
        $("#stop").prop('disabled', false);
        $("#reset").prop('disabled', true);
    }
    
    if (state === 0) {
        $("#start").prop('disabled', false);
        $("#stop").prop('disabled', true);
        $("#reset").prop('disabled', false);
    }
}


