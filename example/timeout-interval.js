let i = 0
const interval =  setInterval( () => {
    i= i + 1
   console.log("me ejecuto cada 2 segundos ...", i)
}, 2000)



const timeout = setTimeout( () => {
    clearInterval(interval)
    console.log("Llamando a setTimeOut")
    console.log("Cancelando setInterval")
}, 10000)






