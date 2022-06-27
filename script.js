const buttonStart = document.querySelector('#start')
const buttonPause = document.querySelector('#stop')
const audio = document.querySelector('.audio')
const door = document.querySelector('#door')
const inner = document.querySelector('#inner microwave')

audio.volume = 0.01

function playAudio() {
    if (door.classList.contains("doorOpen")) {
        toggleDoor()
    }
    audio.play()
}

function pauseAudio() {
    audio.pause()
}

function toggleDoor() {
    if (audio.paused) {
        door.classList.toggle('doorOpen')
    }
}

buttonStart.addEventListener('click', playAudio)
buttonPause.addEventListener('click', pauseAudio)
door.addEventListener('click', toggleDoor)