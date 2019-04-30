const axios = require('axios')
const apiToken = process.env.REACT_APP_TOKEN
const queryString = `&language=en-US&region=ID&sort_by=release_date.desc&certification_country=ID&include_adult=false&include_video=false&page=1`
const movieDB_url = `https://api.themoviedb.org/3/discover/movie?`

export const getMovies = () => {
    const url = `${movieDB_url}api_key=${apiToken}${queryString}`
    return axios 
    .get(url)
    .then(response => {
      console.log(response.data.results)
      return response.data.results
    }).catch(error => {
      console.warn(error)
      return error
    })
  }
