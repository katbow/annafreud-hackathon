module.exports = [
  {
    id: 1,
    firstName: 'Ellie',
    lastName: 'Ottawa',
    number: '07517860443',
    //number: process.env.RONAN,
    assessmentCompleted: false,
    clinician: {
      name: 'Dr. Rudolph Krantz',
      number: '07865342478'
    },
    letters: [
      {
        id: 2,
        status: 1,
        stakeholder: {
          id: 4,
          name: 'Mrs. Mary Ottawa',
          number: '07517860443',
          relationship: 'Parent'
        }
      },
      {
        id: 3,
        status: 1,
        stakeholder: {
          id: 5,
          name: 'St. Fibbert\'s College',
          number: '07885727095',
          relationship: 'School'
        }
      }
    ]
  },
  {
    id: 10,
    firstName: 'Marty',
    lastName: 'McFly',
    number: '07511111111',
    assessmentCompleted: false,
    clinician: {
      name: 'Dr. Rudolph Krantz',
      number: '07865342478'
    },
    letters: [
      {
        id: 11,
        status: 1,
        stakeholder: {
          id: 13,
          name: 'Dr. Steven Conch',
          relationship: 'GP'
        }
      },
      {
        id: 12,
        status: 1,
        stakeholder: {
          id: 14,
          name: 'Clapton Academy',
          relationship: 'School'
        }
      }
    ]
  }
]
