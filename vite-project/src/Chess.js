const URL = "https://api.chess.com/pub/player/hikaru";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json(); //makes the data into JSON object we can use
      console.log(data);
      document.getElementById("api-responce").textContent = data.name;
      document.getElementById("api-league").textContent = data.league;
      document.getElementById("api-avatar").src = data.avatar
    }
  } catch (error) {
    console.log(error);
    console.log("no bueno");
  }
}
getData(URL);