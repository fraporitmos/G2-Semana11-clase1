var container = document.getElementById("container")
var btnGenerate = document.getElementById("btnGenerate")

getDataAsyncAwait().then( data=> {
    container.innerHTML = cardAnimalExtinted(data)
})    

btnGenerate.addEventListener('click', ()=>{
    getDataAsyncAwait().then( data=> {
        container.innerHTML = cardAnimalExtinted(data)
    })    
})


