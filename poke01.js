async function getData(poke) {
    try{
        //get data from api
        const responce = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
        if(responce.status != 200) {
            throw new Error(responce);
        } else{
            //converts response into json we can use
            const data= await responce.json();
            console.log(data)
            document.getElementById("api-responce").textContent = data.name;
        }
    } catch (error){
        console.log(error)
    }
    
}
getData("Squirtle");