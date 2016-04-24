const clients = require('../../data/clients.js')
const templates = require('../../data/templates.js')

const mbKey = process.env.NODE_ENV === 'test' ? process.env.MBIRD_TEST : process.env.MBIRD
const messageBird = require('messagebird')(mbKey)

module.exports = [
  {
    path: '/api/clients',
    method: 'GET',
    handler: (request, reply) => {
      reply(clients)
    }
  },
  {
    path: '/api/clients/{id}',
    method: 'GET',
    handler: (request, reply) => {
      reply(findClient(request.params.id))
    }
  },
  {
    path: '/api/clients/{id}/setAssessmentComplete',
    method: 'PUT',
    handler: (request, reply) => {
      const client = findClient(parseInt(request.params.id))

      client.assessmentCompleted = true

      messageBird.messages.create(messageBirdParams(client, 1), (err, response) => {
        if (err) {
          console.log(err)
          return reply(err)
        }
        console.log(response)
        reply('assessment status updated')
      })
    }
  },
  {
    // For updating letter status.
    path: '/api/clients/{id}/letters/{letterId}/{status}',
    method: 'PUT',
    handler: (request, reply) => {
      const client = findClient(request.params.id)
      const letter = findLetter(client.letters, request.params.letterId)
      const newStatus = parseInt(request.params.status)

      letter.status = newStatus

      messageBird.messages.create(messageBirdParams(client, newStatus, letter), (err, response) => {
        if (err) {
          console.log(err)
          return reply(err)
        }
        console.log(response)
        reply('status updated')
      })
    }
  }
]

function findClient (id) {
  return clients.reduce((result, client) => {
    if (client.id == id) result = client // eslint-disable-line

    return result
  }, null)
}

function findLetter (letters, letterId) {

  return letters.reduce((result, letter) => {
    if (letter.id == letterId) result = letter // eslint-disable-line

    return result
  }, null)
}

function messageBirdParams (client, templateId, letter) {
  return {
    originator: process.env.ORIGINATOR,
    recipients: [
      client.mobileNumber
    ],
    body: templates[templateId](client, letter)
  }
}
