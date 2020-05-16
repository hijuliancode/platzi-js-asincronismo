const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    const data = { "code": null, "message": null, }
    if (true) {
      this.data = {
        "code": 1,
        "message": 'Hey!'
      }
      return resolve(this.data)
    } else {
      this.data = {
        "code": 0,
        "message": 'Whooops!'
      }
      return reject(this.data)
    }
  })
}

somethingWillHappen()
  .then(response => console.log(response))
  .catch(error => console.log(error))

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('Hey!')
      }, 2000)
    } else {
      const error = new Error('Whooops!')
      return reject(error)
    }
  })
}

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.error(err))

// Promise All

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(results => {
    console.log('Promise All', results)
  })
  .catch(err => {
    console.error('Promise All', err)
  })