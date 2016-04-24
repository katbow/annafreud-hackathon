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
      const params = messageBirdParams(client.number, templates[1](client))

      if (client.assessmentCompleted) return reply('assessment status updated')

      client.assessmentCompleted = true

      messageBird.messages.create(params, (err, response) => {
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
      const template = templates[newStatus](client, letter)

      letter.status = newStatus

      messageBird.messages.create(messageBirdParams(client.number, template), (err, response) => {
        if (err) {
          console.log(err)
          return reply(err)
        }

        if (newStatus === 3) {
          // Send SMS to stakeholder also.
          messageBird.messages.create(messageBirdParams(
            letter.stakeholder.number,
            templates[5](letter.stakeholder.name, client)),
          _ => _)
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

function messageBirdParams (number, template) {
  return {
    originator: process.env.ORIGINATOR,
    recipients: [
      number
    ],
    body: template
  }
}
