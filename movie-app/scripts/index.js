const movies = document.querySelector('.movies')
const input = document.querySelector('input')
const form = document.querySelector('.header__form')
const button = document.querySelector('.header__btn')

const key = '6ef21418'
const url = `https://www.omdbapi.com/?s=Star+wars&apikey=${key}`

document.addEventListener('DOMContentLoaded' , () => {
    input.focus()
})

async function getData (url){
    const resp = await fetch(url)
    const data = await resp.json()
    console.log(data)
    startMovie(data)
}
getData(url)

const startMovie = (data) => {
    movies.innerHTML = ''
    data.Search.forEach(element => {
        const item = document.createElement('div')
        item.classList.add('movie')
        item.innerHTML = `
            <div class="movie__poster" style="background-image: url('${element.Poster}');"> </div>
            <div class="movie__box">
                <h4 class="movie__title">${element.Title}</h4>
                <p class="movie__year">Year:<span class="movie__year-value">${element.Year}</span></p>
            </div>`
        movies.appendChild(item)
    });
}




button.addEventListener('click', (event) => {
    event.preventDefault()
    const url = `https://www.omdbapi.com/?s=${input.value}&apikey=${key}`
    console.log(url)
    getData(url)
})


input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        event.preventDefault()
        const url = `https://www.omdbapi.com/?s=${input.value}&apikey=${key}`
        console.log(url)
        getData(url)
    }
})

