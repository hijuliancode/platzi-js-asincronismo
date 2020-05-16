const fetchData = require('../utils/fetchData')
let API = 'https://rickandmortyapi.com/api/character/'

fetchData(API)
  .then(data => {
    console.log(data.info.count)
    console.log(data)
    return fetchData(`${API}${data.results[0].id}`)
  })
  .then(data => {
    console.log(data.name)
    console.log(data)
    return fetchData(`${data.origin.url}`)
  })
  .then(data => {
    console.log(data.dimension)
    console.log(data)
    return data.dimension
  })
  .catch(err => console.error(err))