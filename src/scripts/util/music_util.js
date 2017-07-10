export const requestSpotify = () => {
  fetch('https://accounts.spotify.com/authorize/?client_id=d74123e690874e9dab232e5c93750106&response_type=code&redirect_uri=http://localhost:8080/')
    .then(resp => {
      console.log(resp)
    })
}

