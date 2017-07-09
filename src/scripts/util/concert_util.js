// Make API calls to your server or external APIs like Giphy...
export const fetchConcerts = zip => {
  let d = new Date()
  let today = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
  let tomorrow = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() + 1}`
  fetch(`http://api.jambase.com/events?zipCode=${zip}&radius=60&startDate=${today}&endDate=${tomorrow}&page=0&api_key=3dwvyy34qeajjs6q4q7vam2g`)
    .then(resp => (resp.json()))
    .then(data => {
      return data
    })
}

