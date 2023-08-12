const clape = document.querySelectorAll('.clapa');
const negative = document.getElementById('negative-1');
                    //Create button
const btn = document.createElement('button');
document.getElementById('pian').insertAdjacentElement('afterbegin', btn);
btn.classList.add('btn-sound-js');
btn.innerHTML = '⏯';
btn.addEventListener('click', toggleAudioState);
                    //Create button
document.addEventListener('keydown', aKeyDown);

clape.forEach((clapa, i) => {
    clapa.classList.add(`c${i + 1}`)
    const soundUrl = `./sounds/key${i < 9 ? '0' + (1 + i) : i + 1}.mp3`;
    clapa.addEventListener('click', () => playSound(soundUrl, i + 1));
});

const allKeys = new Map([
    [1, 'a'],
    [2, 's'],
    [3, 'd'],
    [4, 'f'],
    [5, 'g'],
    [6, 'h'],
    [7, 'j'],
    [8, 'k'],
    [9, 'l'],
    [10, ';'],
    [11, 'Shift'],
    [12, 'z'],
    [13, 'x'],
    [14, 'c'],
    [15, 'v'],
    [16, 'b'],
    [17, 'n'],
    [18, 'm'],
    [19, ','],
    [20, '.'],
    [21, '/'],
    [22, 'ArrowLeft'],
    [23, 'ArrowUp'],
    [24, 'ArrowRight'],
]);

function aKeyDown(event) {
    for (let [k, key] of allKeys) {
        if (event.key === key) {
            let selectedKey = document.querySelector(`.c${k}`);
            selectedKey.classList.add('color-when-pressed');
            setTimeout(() => {
                selectedKey.classList.remove('color-when-pressed');
            }, "100");
            playSound(`./sounds/key${k <= 9 ? '0' + k : k}.mp3`, Array.from(allKeys.keys())[k - 1]);
        }
    }
};

function playSound(soundUrl, k) {
    let selectedKey = document.querySelector(`.c${k}`);
    selectedKey.classList.add('color-when-pressed');
    setTimeout(() => {
        selectedKey.classList.remove('color-when-pressed');
    }, "100");
    new Audio(soundUrl).play();
};

function toggleAudioState() {
    if (negative.paused) {
        negative.play();
        btn.classList.add('isActive');
        btn.setAttribute('id', 'btn-sound-1')
    } else {
        negative.pause();
        btn.classList.remove('isActive');
    }
};