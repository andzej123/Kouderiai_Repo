const jokePlace = document.getElementById("joke");
const refreshButton = document.getElementById("refresh");

// let options = {
//   method: "GET",
//   headers: { "x-api-key": "toblJR7XPlWoRRarN4Dh9Q==LIpHbJkKDuEVwrYT" },
// };

// let url = "https://api.api-ninjas.com/v1/jokes";

// fetch(url, options)
//   .then((res) => res.json()) // parse response as JSON
//   .then((data) => {
//     joke.innerHTML = `${data[0].joke}`;
//   })
//   .catch((err) => {
//     console.log(`error ${err}`);
//   });

const endpoint = "https://v2.jokeapi.dev/joke/Programming?type=single";

async function fetchData(url) {
  const apiUrl = url;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    jokePlace.innerHTML = `${data.joke}`;
  } catch (err) {
    console.log(err.message);
  }
}

refreshButton.addEventListener("click", () => {  
  location.reload()
});

fetchData(endpoint);