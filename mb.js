const mbKey = process.env.NODE_ENV === 'test' ? process.env.MBIRD_TEST : process.env.MBIRD
const messageBird = require('messagebird')(mbKey)

messageBird.messages.read('03cd79704571b7e06568f01b93037279', (err, response) => {
  if (err) {
    console.log(err)
  }
  console.log(response)
})
