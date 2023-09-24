const play = document.querySelector('.player__icon-center > .player__play')
const pause = document.querySelector('.player__icon-center > .player__stop')
const prev = document.querySelector('.player__prev')
const next = document.querySelector('.player__next')
const audio = document.querySelector('.audio')

play.addEventListener('click', () => {
    console.log('a')
    audio.play()
    play.classList.add('dn')
    pause.classList.remove('dn')
})

pause.addEventListener('click', () => {
    audio.pause()
    play.classList.remove('dn')
    pause.classList.add('dn')
})

const songOne = {
    name: 'Lofi Fruits Music',
    songName: 'Stan',
    cover: 'assets/img/lofi.png',
    trackPath: 'assets/audio/stan.mp3',
}
const songTwo = {
    name: 'Purple Disco Machine',
    songName: 'In The Dark',
    cover: 'assets/img/pdm.png',
    trackPath: 'assets/audio/pdm.mp3',
}
const songThree = {
    name: 'Lofi Fruits Music',
    songName: 'Peaceful melody',
    cover: 'assets/img/lofi.png',
    trackPath: 'assets/audio/peaceful_melody.mp3',
}
const songFour = {
    name: 'The Cramps',
    songName: 'Goo Goo Muck',
    cover: 'assets/img/cramps.png',
    trackPath: 'assets/audio/goo.mp3',
}

const playlist = [songOne, songTwo, songThree , songFour]
