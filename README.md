# Anna Freud Hackathon

The main goal of this application is to provide a way for a clinician to keep track of letters which need to be sent on
behalf of patients. The patients also need to be notified each step of the way for when letters have been started, completed
and sent out to different parties.

### User Stories

![](http://s31.postimg.org/5cuw8dp8r/DSC_1007.jpg)

# Data Model
```
const clients = [ // array of objects

  {
    id: 1, // int
    firstName: 'Sarah', // string
    lastName: 'Jones', // string
    mobileNumber: '0750751234', // string
    assessmentCompleted: true // boolean,
    clinician: {
      name: 'Dr. Rudolph Krantz',
      number: '07865342478'
    },
    letters: [ // array of objects
      {
        id: 7, // int,
        status: 1, // int ( 1 -> 4 )
        stakeholder: { // obj
          id: 9, // int
          name: 'St. Widget\'s College' // string
          relationship: 'School' // string
        }
      },
      {
        ...
      }
    ]
  },
  {
    ...
  }

]
```

### Letter Statuses
- 1 - 'Pre-start'
- 2 - 'In progress'
- 3 - 'Completed, ready to post'
- 4 - 'Sent'
