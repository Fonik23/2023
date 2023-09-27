const movies = document.querySelector('.movies')

const input = document.querySelector('input')

const key = '6ef21418'


async function getData (){
    const url = `https://www.omdbapi.com/?s=Star+wars&apikey=${key}`
    const resp = await fetch(url)
    const data = await resp.json()
    console.log(data)
    startMovie(data)
}
getData()

const startMovie = (data) => {
    
    data.Search.forEach(element => {
        const item = document.createElement('div')
        item.innerHTML = ` 
        <div class="movie">
            <div class="movie__poster" style="background-image: url('${element.Poster}');"> </div>
            <div class="movie__box">
                <h4 class="movie__title">${element.Title}</h4>
                <p class="movie__year">Year:<span class="movie__year-value">${element.Year}</span></p>
            </div>
        </div>`
        movies.appendChild(item)
    
    
    });
}



