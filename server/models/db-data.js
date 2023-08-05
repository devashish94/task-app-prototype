module.exports = {
  task_lists: [
    { name: 'work', pin: true },
    { name: 'personal', pin: true },
    { name: 'tomorrow', pin: false },
    { name: 'save for later', pin: true },
    { name: 'new task list', pin: false },
    { name: 'today', pin: false },
    { name: 'upcoming', pin: false }
  ],
  tasks: [
    {
      list_name: 'work',
      title: 'make this PR',
      description: 'get this pull request merged by today itself',
      completed: true,
    },
    {
      list_name: 'upcoming',
      title: 'study graphs',
      description: 'do this topic, or don\'t get a job at google',
      completed: false,
    },
    {
      list_name: 'today',
      title: 'sleep',
      description: 'get enough sleep every night to last the day',
      completed: false,
    },
    {
      list_name: 'today',
      title: 'brush',
      description: 'brush your teeth twice a day',
      completed: false,
    },
    {
      list_name: 'work',
      title: 'new task',
      description: '',
      completed: true
    }
  ]
}
