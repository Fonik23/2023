const input = document.querySelector('input')

const key = '6ef21418'


async function getData (){
    const url = `https://www.omdbapi.com/?s=Star+wars&apikey=${key}`
    const resp = await fetch(url)
    const data = await resp.json()
    console.log(data)
}
getData()





