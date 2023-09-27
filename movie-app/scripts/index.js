const input = document.querySelector('input')

const key = '6ef21418'

const url = `https://www.omdbapi.com/?s=Star+wars&apikey=${key}`

async function getData (){
    const resp = await fetch(url)
    const data = resp.json()
    console.log(data)
}
getData()