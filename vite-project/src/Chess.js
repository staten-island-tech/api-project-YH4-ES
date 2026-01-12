let who = "hikaru"
let i = 0
let body = document.querySelector(".chesschessContainer")
let lastloadiscountry = false

async function getThemPeople(country, people) {
  try {
    let responcen = await fetch (`https://api.chess.com/pub/country/${country}/players`)
    if (responcen.status != 200) {
      throw new Error(responcen);

    } else {
      lastloadiscountry = true
      
      body.innerHTML = ""
      let data = await responcen.json()
      for (let i = 0; i <= people ; i++) {
        let who = data.players[i]
        getData(`https://api.chess.com/pub/player/${who}`)
      }
    }
  } catch (error){
    console.log(error)
  }

}

function enableCountryButtons(country, people) {
  let button = document.getElementById(country)
  button.addEventListener("click", () => { getThemPeople(country, people)})
}

enableCountryButtons("US", 50)
enableCountryButtons("JP", 50)
enableCountryButtons("CN", 50)
enableCountryButtons("DE", 50)

function certainnumb (id, people) {
  let ctry = document.getElementById(id)
  ctry.textContent = `Load first ${people} users in ${id}`
}
certainnumb("US", 50);
certainnumb("JP", 50);
certainnumb("CN", 50);
certainnumb("DE", 50);


const URL = `https://api.chess.com/pub/player/${who}`;


async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      
      const data = await response.json(); //makes the data into JSON object we can use
      
      body.insertAdjacentHTML(`afterbegin`,
        `<div class="chesscontainer" data-container = "${i}">
        <div class = "m-5 flex flex-row bg-[#1D291D] text-[#FEF9E3]">
        <img class= "border-solid border-2 m-3" id = "api-avatar" src="" alt="stockholm"></img>
          <div class = "flex flex-col">
            <h1 id = "api-name" class = "text-[#FEF9E3]"></h1>
            <h1 id ="api-league" class = "text-[#FEF9E3]"></h1>
          </div>
        </div>
        <div class = "m-5 bg-[#1D291D] text-[#FEF9E3]">
            <h2 id = "api-location"></h2>
            <h2 id = "api-streamertoggle"></h2>
            <h2 id = "api-id"></h2>
            <h2 id = "api-title"></h2>
            <a id = "api-link" href=""></a>
        </div>
    </div>
        `
      )
      console.log(data);
      document.getElementById("api-name").textContent = data.name;
      document.getElementById("api-league").textContent = data.league;
      document.getElementById("api-avatar").src = data.avatar
      document.getElementById("api-location").textContent = data.location;
      document.getElementById("api-streamertoggle").textContent = `Is streamer?: ${data.is_streamer}`
      document.getElementById("api-id").textContent = `id: ${data.player_id}`
      document.getElementById("api-title").textContent = `title: ${data.title}`
      document.getElementById("api-link").textContent = `link: ${data.url}`
      document.getElementById("api-link").href = `${data.url}`
      if (data.url){
        document.getElementById("api-link").style.color = "blue"
      }
      
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
    var who = datatemp.guy
    if (lastloadiscountry == true) {
        console.log("Cleared")
        body.innerHTML = ""
      }
    getData(`https://api.chess.com/pub/player/${who}`)
})

document.getElementById("customloader").addEventListener("submit", function(e) {
  e.preventDefault()
  var formdata = new FormData(e.target)
  console.log(Object.fromEntries(formdata))
  let datatemp = Object.fromEntries(formdata)
  var country = datatemp.country
  var people = datatemp.people
  console.log(country)

  let button = document.getElementById("custom")
  button.textContent = `Load first ${people} users in ${country}`
  
  button.addEventListener("click", () => {getThemPeople(country, people)})
})