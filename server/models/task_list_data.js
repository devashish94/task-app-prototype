module.exports = {
  task_lists: [
    {
      id: 1,
      name: 'work',
      pin: false
    },
    {
      id: 2,
      name: 'personal',
      pin: true 
    },
    {
      id: 3,
      name: 'tomorrow',
      pin: false
    },
    {
      id: 4,
      name: 'save for later',
      pin: true
    },
    {
      id: 5,
      name: 'new task list',
      pin: false
    }
  ],
  tasks: [
      {
        id: 1,
        list_id: 1,
        title: 'make this PR',
        description: 'get this pull request merged by today itself',
        completed: false,
      },
      {
        id: 2,
        list_id: 4,
        title: 'study graphs',
        description: 'do this topic, or don\'t get a job at google',
        completed: false,
      },
      {
        id: 3,
        list_id: 2,
        title: 'sleep',
        description: 'get enough sleep every night to last the day',
        completed: false,
      },
      {
        id: 4,
        list_id: 2,
        title: 'brush',
        description: 'brush your teeth twice a day',
        completed: true,
      },
      {
        id: 5,
        list_id: 5, 
        title: 'new task',
        description: '',
        completed: true
      }
  ]
}
