let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open('GET', url_api, true)
    xhttp.onreadystatechange = (() => {
      if (xhttp.readyState === 4) {
        (xhttp.status === 200)
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error('Error => ', url_api))
      }
    })
    xhttp.send()
  })
}
module.exports = fetchData

// function fetchData(url_api, callback) {
//   let xhttp = new XMLHttpRequest();
//   xhttp.open('GET', url_api, true);
//   xhttp.onreadystatechange = function(event) {
//     if (xhttp.readyState === 4) {
//       if (xhttp.status === 200) {
//         callback(null, JSON.parse(xhttp.responseText));
//       } else {
//         const error = new Error('Error => ' + url_api);
//         return callback(error, null);
//       }
//     }
//   }
//   xhttp.send();
// }