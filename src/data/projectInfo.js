import appointDoctor from '../assets/appointDoctor.png';
import spendigo from '../assets/spandigo.jpg';
import recipe from '../assets/recipe.png';

const projectInfo = [
  {
    id: 1,
    title: 'Appoint with a Doctor',
    made: ' on August 2023',
    collaborator: ['sattar', 'Lengushuru', 'Enoch', 'Daniel', 'Tracy'],
    description: 'The Appoint Doctor Project is a user-friendly web app for booking doctor appointments. It offers secure login using Devise-jwt and supports multiple user roles (patient, doctor, admin). Admins can add/delete doctors. Users can schedule/cancel appointments and view their appointment list. The app simplifies the process of finding and managing medical appointments online....',
    technologies: ['React', 'PostgreSQL', 'JavaScript', 'Bootstrap', 'Rails', 'Redux', 'API', 'Full-stack'],
    image: appointDoctor,
    link: 'https://profound-heliotrope-436869.netlify.app/',
    github: 'https://github.com/Tracy-miranja/appoint-doctor-frontend',
  },
  {
    id: 2,
    title: 'SpendiGo',
    made: 'on July 2023',
    collaborator: ['sattar'],
    description: 'The SpendiGo a mobile web app for efficient budget management. This app allows users to track their expenses by maintaining a list of transactions categorized by type. By utilizing the app, users can easily visualize the amount of money they have spent and on what....',
    technologies: ['Ruby', 'Ruby on Rails', 'Full-stack', 'PostgreSQL', 'CSS', 'Rspec', 'Capybara'],
    image: spendigo,
    link: 'https://spendigo.onrender.com/',
    github: 'https://github.com/AbdusSattar-70/SpendiGo',
  },
  {
    id: 3,
    title: 'Recipe App',
    made: 'on March 2022',
    collaborator: ['sattar', 'Peter Okorafor'],
    description: 'Food Recipe App keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe....',
    technologies: ['Tailwind', 'Ruby', 'PostgreSQL', 'Full-stack', 'Ruby on Rails', 'Rspec', 'Capybara'],
    image: recipe,
    link: 'https://food-recipe-app-pwft.onrender.com/',
    github: 'https://github.com/peterdtitan/food-recipe-app',
  },
  {
    id: 4,
    title: 'Leaderboard',
    made: 'on March 2022',
    collaborator: ['sattar', 'santosh', 'rafiq'],
    description: 'Leaderboard is my demo project for learning...',
    technologies: ['html', 'bootstrap', 'Ruby', 'HTML', 'CSS', 'JavaScript'],
    image: 'https://drive.google.com/uc?id=17j0ggpWJG7h1_fBVx1gYieOo99DqWcG0',
    link: 'https://abdussattar-70.github.io/Leaderboard/dist',
    github: 'https://github.com/AbdusSattar-70/Leaderboard',
  },
  {
    id: 5,
    title: 'To Do List',
    made: 'on March 2022',
    collaborator: ['sattar', 'santosh', 'rafiq'],

    description: 'A daily selection of privately personalized reads...',
    technologies: ['html', 'bootstrap', 'Ruby', 'HTML', 'CSS', 'JavaScript'],
    image: 'https://drive.google.com/uc?id=1oWGPsqXV2ql5xeLzaPRClWFU4zn3X2wJ',
    link: 'https://abdussattar-70.github.io/ToDoListAgain/dist/',
    github: 'https://github.com/AbdusSattar-70/ToDoListAgain',
  },
  {
    id: 6,
    title: 'SpendiGo!',
    made: 'on March 2022',
    collaborator: ['sattar', 'santosh', 'rafiq'],

    description: 'In this exercise repo, I wrote a few practical tests...',
    technologies: ['html5', 'Ruby', 'Rails', 'HTML', 'CSS', 'JavaScript'],
    image: 'https://drive.google.com/uc?id=17j0ggpWJG7h1_fBVx1gYieOo99DqWcG0',
    link: 'https://spendigo.onrender.com/',
    github: 'https://github.com/AbdusSattar-70/SpendiGo',
  },
  {
    id: 7,
    title: 'FirstCapstone',
    made: 'on March 2022',
    collaborator: ['sattar', 'santosh', 'rafiq'],

    description: 'This repo is a part of the learning purpose...',
    technologies: ['HTML', 'CSS', 'JavaScript', 'HTML', 'CSS', 'JavaScript'],
    image: 'https://drive.google.com/uc?id=17j0ggpWJG7h1_fBVx1gYieOo99DqWcG0',
    link: 'https://abdussattar-70.github.io/FirstCapstone/',
    github: 'https://github.com/AbdusSattar-70/FirstCapstone',
  },
];

export default projectInfo;
