const movies = document.querySelector('.movies')
const input = document.querySelector('input')
const form = document.querySelector('.header__form')
const button = document.querySelector('.header__btn')

const key = '6ef21418'
const url = `https://www.omdbapi.com/?s=Star+wars&page=1&apikey=${key}`
console.log(url)
document.addEventListener('DOMContentLoaded' , () => {
    input.focus()
})

async function getData (url){
    const resp = await fetch(url)
    const data = await resp.json()
    movies.innerHTML = ''
    console.log(data)
    startMovie(data)
}
getData(url)

async function getTotalResults (value) {
    let page = 0
    while(page <= 3){
        page++
        const url = `https://www.omdbapi.com/?s=${value}&page=${page}&apikey=${key}`
        const res = await fetch(url)
        const data = await res.json()
        startMovie(data)
    }
    
    return getTotalResults
}


const startMovie = (data) => {
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




// button.addEventListener('click', (event) => {
//     if(input.value !== ''){
//         event.preventDefault()
//         const url = `https://www.omdbapi.com/?s=${input.value}&apikey=${key}`
//         console.log(url)
//         getData(url)
//     } else {
//         alert('aaaaa')
//     }
    
// })


// input.addEventListener('keydown', (event) => {
//     if(event.key === 'Enter'){
//         event.preventDefault()
//         const url = `https://www.omdbapi.com/?s=${input.value}&apikey=${key}`
//         console.log(url)
//         getData(url)
//     }
// })

const btnCheck = () => {
    button.addEventListener('click', (event)=>{
        if(event.target.contains('button')){
            return true
        } else {
            return false
        }
    })
}

const keyboardCheck = () => {
    input.addEventListener('keydown', (event) => {
        if(event.key === 'Enter'){
            return true
        } else {
            return false
        }
    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event)
    if(input.value !== ''){
        if(btnCheck || keyboardCheck){
            console.log(url)
            // getData(url)
            movies.innerHTML = ''
            getTotalResults(input.value)
        }
    }
    else{
        alert('Input cannot be empty')
    }
})