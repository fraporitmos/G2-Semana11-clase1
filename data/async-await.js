async function getDataAsyncAwait(){
    try{
        const resp = await fetch("https://extinct-api.herokuapp.com/api/v1/animal/")
        const respJson = await resp.json()
        return respJson.data[0]

    }catch(error){
        return {}
    } finally {
       
    }
}



