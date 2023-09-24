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