const messagebird = require('messagebird')(process.env.API_KEY)

module.exports = {
  method: 'GET',
  path: '/sendNotification',
  handler: (req, reply) => {
    var params = {
      originator: '+447860039045',
      recipients: [
        '00447985156114'
      ],
      body: 'Bazinga!!'
    }

    messagebird.messages.create(params, (err, response) => {
      console.log(err ? err : response)
    })
    reply('BAZINGAAAA')
  }
}
