/* eslint-disable */
module.exports = {
  1: client => `
    ${client.firstName}, your assessment has been completed and action letters to stakeholders are being prepared.
  `,
  2: (client, letter) => `
    ${client.firstName}, the letter to ${letter.stakeholder.name} is being prepared. Please contact ${client.clinician.name} at ${client.clinician.number} for any further information.
  `,
  3: (client, letter) => `
    ${client.firstName}, the letter to ${letter.stakeholder.name} has been completed and will be posted out soon. Please contact ${client.clinician.name} at ${client.clinician.number} for any further information.
  `,
  4: (client, letter) => `
    ${client.firstName}, the letter to ${letter.stakeholder.name} has now been posted out. Please contact ${client.clinician.name} at ${client.clinician.number} for any further information.
  `
}
