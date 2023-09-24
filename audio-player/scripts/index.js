const play = document.querySelector('.player__icon-center > .player__play')
const pause = document.querySelector('.player__icon-center > .player__stop')
const prev = document.querySelector('.player__prev')
const next = document.querySelector('.player__next')
const audio = document.querySelector('.audio')
const nameArt = document.querySelector('.player__art')
const nameSong = document.querySelector('.player__song')
const screenPlayer = document.querySelector('.player__screen')
const background = document.querySelector('.background')
const progressRange = document.querySelector('.progress__range')
const startTime = document.querySelector('.progress__start-time')
const endTime = document.querySelector('.progress__end-time')




//--------------------Playlist-------------
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


//--------------------Buttons-------------

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

//--------------------CurrentTrack-------------
let playlistIndex = 0

const getTime = (timeValue) => {
    let minutes = Math.floor(timeValue / 60)
    let seconds = Math.floor(timeValue % 60)
    if(seconds < 10){
        seconds = `0${seconds}`
    }
    return `${minutes}:${seconds}`
}

const currentTrack = (playlistIndex) => {
    let track = playlist[playlistIndex]
    nameArt.textContent = track.name
    nameSong.textContent = track.songName
    screenPlayer.style.backgroundImage = `url('${track.cover}')`
    background.style.backgroundImage = `url('${track.cover}')`

    audio.addEventListener('loadeddata', () => {
        progressRange.max = audio.duration
        endTime.textContent = getTime(audio.duration)
        
    })
}

currentTrack(playlistIndex)