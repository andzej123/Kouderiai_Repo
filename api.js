

let options = {
    method: 'GET',
    headers: { 'x-api-key': 'toblJR7XPlWoRRarN4Dh9Q==LIpHbJkKDuEVwrYT' }
  }
  
  let url = 'https://api.api-ninjas.com/v1/jokes'
  
  
  fetch(url,options)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        }); 

fetch(url, options);