// Example user
const user = {
  _id: '60402959d9008f2ca82d17af',
  name: 'Dillon Titcomb',
  email: 'dillontitcomb@gmail.com',
  image:
    'https://lh5.googleusercontent.com/-GtvkLu65TiY/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucndaXTPVF7J_OXNX3kRa1ZojoXejw/s96-c/photo.jpg',
  createdAt: '2021-03-04T00:27:05.481+00:00',
  updatedAt: '2021-03-04T00:27:05.481+00:00',
};

// Example profile
const profile = {
  user: 'refToUserId',
  first_name: 'dillon',
  last_name: 'titcomb',
  habits: [
    {
      name: 'Sober January',
      startDate: 'Date Object',
      endDate: 'Date Object',
      tasks: [
        {
          name: "Don't Drink",
          resistance: 3,
          urgency: 2,
        },
        {
          name: 'Drink Water',
          resistance: 1,
          urgency: 1,
        },
      ],
    },
    {
      name: 'Squat Challenge',
      startDate: 'Date Object',
      endDate: 'Date Object',
      tasks: [
        {
          name: 'Do 30 squats',
          resistance: 2,
          urgency: 3,
        },
      ],
    },
  ],
};

// Example days collection
const days = [
  {
    date: 'June 4',
    tasks: ['taskId', 'taskId', 'taskId'],
    scorePossible: 10,
    scoreAchieved: 10,
    completionPercentage: 100,
  },
  {
    date: 'June 5',
    tasks: ['taskId', 'taskId', 'taskId'],
    scorePossible: 7,
    scoreAchieved: 10,
    completionPercentage: 70,
  },
];

// Example tasks collection
const tasks = [
  {
    name: 'Do 15 burpees',
    resistance: 3,
    urgency: 1,
    complete: false,
    active: true,
    habit: 'habitId',
    day: 'dayId',
    user: 'userId',
  },
];
