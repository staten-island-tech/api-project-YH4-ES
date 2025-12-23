let who = "hikaru"
let i = 0
let body = document.querySelector(".chesschessContainer")

async function getThemPeople(country, people) {
  try {
    let responcen = await fetch (`https://api.chess.com/pub/country/${country}/players`)
    if (responcen.status != 200) {
      throw new Error(responcen);

    } else {
      let data = await responcen.json()
      let result = [];

      for(var i in data)
      result.push([i, data [i]]);
      console.log(result)
      body.insertAdjacentHTML("afterbegin", 
        `

        `
      )
    }
  } catch (error){
    console.log(error)
  }

}
getThemPeople("US")

function certainnumb (country, people) {
  let ctry = document.getElementById(country)
  ctry.textContent = `Load first ${people} users in ${country}`
}
certainnumb("US", 50);
certainnumb("JP", 50);
certainnumb("CN", 50);
certainnumb("DE", 50);


const URL = `https://api.chess.com/pub/player/${who}`;

async function example(){
try {
    const response = await fetch(URL);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json(); //makes the data into JSON object we can use
      console.log(data);
      console.log(who)
      document.getElementById("api-responce").textContent = data.name;
      document.getElementById("api-league").textContent = data.league;
      document.getElementById("api-avatar").src = data.avatar
      document.getElementById("api-location").textContent = data.location;
      document.getElementById("api-streamertoggle").textContent = `Is streamer?: ${data.is_streamer}`
      document.getElementById("api-id").textContent = data.player_id
    
}} catch (error){
  console.log(error)
}
}
async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json(); //makes the data into JSON object we can use
      console.log(data);
      console.log(who)
      
      body.insertAdjacentHTML(`afterbegin`,
        `<div class="chesscontainer" data-container = "${i}">
        <div class = "m-5 flex flex-row bg-[#1D291D] text-[#FEF9E3]">

            <h1 id ="api-league" class = "text-[#FEF9E3]"></h1>
            <img id = "api-avatar" src="" alt="stockholm"></img>
        </div> 
        <div class = "m-5 bg-[#1D291D] text-[#FEF9E3]">
            <h2 id = "api-location"></h2>
            <h2 id = "api-streamertoggle"></h2>
            <h2 id = "api-id"></h2>
        </div>
    </div>
        `
      )
      console.log(data);
      console.log(who)
      document.getElementById("api-responce").textContent = data.name;
      document.getElementById("api-league").textContent = data.league;
      document.getElementById("api-avatar").src = data.avatar
      document.getElementById("api-location").textContent = data.location;
      document.getElementById("api-streamertoggle").textContent = `Is streamer?: ${data.is_streamer}`
      document.getElementById("api-id").textContent = data.player_id
      
    }
  } catch (error) {
    console.log(error);
    console.log("no bueno");
  }
}
getData(URL);
document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault()
    var formdata = new FormData(e.target)
    console.log(Object.fromEntries(formdata))
    let datatemp = Object.fromEntries(formdata)
    who = datatemp.guy
    getData(`https://api.chess.com/pub/player/${who}`)
})