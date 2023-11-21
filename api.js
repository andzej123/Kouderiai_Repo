const joke = document.getElementById("joke");
const refreshButton = document.getElementById("refresh");

let options = {
    method: 'GET',
    headers: { 'x-api-key': 'toblJR7XPlWoRRarN4Dh9Q==LIpHbJkKDuEVwrYT' }
  }
  
  let url = 'https://api.api-ninjas.com/v1/jokes'
  
  
  fetch(url,options)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          joke.innerHTML = `${data[0].joke}`;
        })
        .catch(err => {
            console.log(`error ${err}`)
        }); 


refreshButton.addEventListener('click', () => {  
  location.reload();
  fetch(url, options);
});
