const test = require('tape')
const templates = require('../backend/data/templates.js')
const clients = require('../backend/data/clients.js')

test('template test', t => {
  t.plan(1)

  const client = clients[0]
  const letter = client.letters[0]

  console.log(templates[1](client))
  console.log(templates[2](client, letter))
  console.log(templates[3](client, letter))
  console.log(templates[4](client, letter))

  t.equal(true, true)

})
