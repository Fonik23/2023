const play = document.querySelector('.player__icon-center > .player__play')
const pause = document.querySelector('.player__icon-center > .player__stop')
const prev = document.querySelector('.player-prev')
const next = document.querySelector('.player-next')
const audio = document.querySelector('.audio')
const nameArt = document.querySelector('.player__art')
const nameSong = document.querySelector('.player__song')
const screenPlayer = document.querySelector('.player__screen')
const background = document.querySelector('.background')
const progressRange = document.querySelector('.progress__range')
const startTime = document.querySelector('.progress__start-time')
const endTime = document.querySelector('.progress__end-time')
const volumeRange = document.querySelector('.player__vol-range')



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
let playlistIndex = 0

//--------------------Buttons-------------

play.addEventListener('click', () => {
    audio.play()
    play.classList.add('dn')
    pause.classList.remove('dn')
})

pause.addEventListener('click', () => {
    audio.pause()
    play.classList.remove('dn')
    pause.classList.add('dn')
})

next.addEventListener('click', () => {
    console.log('forward')
    if(playlistIndex >= playlist.length - 1) {
        playlistIndex = 0
    } else {
        playlistIndex++
        
    }
    currentTrack(playlistIndex)
    play.click()
})

prev.addEventListener('click', () => {
    console.log('prev')
    if(playlistIndex <= 0) {
        playlistIndex = playlist.length - 1
    }   else {
        playlistIndex--
    }
    currentTrack(playlistIndex)
    play.click()
})

//--------------------CurrentTrack-------------


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
    audio.src = track.trackPath
    audio.addEventListener('loadeddata', () => {
        progressRange.max = audio.duration
        endTime.textContent = getTime(audio.duration)
        
    })
    audio.addEventListener('timeupdate', (event) => {
        console.log(event)
        progressRange.value = audio.currentTime 
        startTime.textContent = getTime(audio.currentTime)
    })
}



progressRange.addEventListener('change', () => {
    audio.currentTime = progressRange.value
})

//--------------------Volume-------------

volumeRange.addEventListener('change', () => {
    if(volumeRange.value === 0){
        audio.volume = 0
    }   else {
        audio.volume = volumeRange.value / 100
    }
    
})


currentTrack(playlistIndex)