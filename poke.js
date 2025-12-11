async function getData(poke) {
    try{
        //get data from api
        const responce = await fetch(`https://pokeapi.com/api/v2/pokemon/${poke}`);
        if(responce.status != 200) {
            throw new Error(responce);
        } else{
            //converts response into json we can use
            const data= await response.json();
            console.log(data)
            document.getElementById("api-response").textContent = data = data.name;
        }
    } catch (error){
        console.log(error)
    }
    
}
getData("Squirtle");