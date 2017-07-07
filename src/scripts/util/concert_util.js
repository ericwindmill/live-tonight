// Make API calls to your server or external APIs like Giphy...



export const fetchConcerts = data => {
  // let today = 
  // let tomorrow = 
  // let radius = 
  // let zip = 
  fetch('http://api.jambase.com/events?zipCode=94110&radius=60&startDate=2017-07-06&endDate=2017-07-07&page=0&api_key=3dwvyy34qeajjs6q4q7vam2g')
    .then(resp => (resp.json()))
    .then(data => {
      return data
    })
}


