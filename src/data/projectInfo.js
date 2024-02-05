import appointDoctor from '../assets/appointDoctor.webp';
import nation from '../assets/nation.webp';
import math from '../assets/math.webp';
import leader from '../assets/leaderboard.webp';
import cms from '../assets/cms.webp';
import space from '../assets/space.webp';
import jscap from '../assets/jscap.webp';
import first from '../assets/first.webp';
import awesome from '../assets/awesome.webp';
import todo from '../assets/todo.webp';
import portfolio from '../assets/portfolio.webp';
import mingleMate from '../assets/mingleMate.png';
import collabcanvas from '../assets/collabCanvas.png';

const projectInfo = [
  {
    id: 1,
    title: 'MingleMate',
    made: ' on January 2024',
    collaborator: ['Sattar'],
    description: 'MingleMate is a mobile-first, responsive web application designed for efficient collection management. Catering to both non-authenticated and authenticated users, MingleMate ensures a seamless experience while maintaining privacy and access controls....',
    technologies: ['TypeScript', 'Tailwind', 'Rails', 'React', 'PostgreSQL', 'API', 'Full-stack'],
    image: mingleMate,
    link: 'https://mingle-mate.vercel.app/',
    github: 'https://github.com/AbdusSattar-70/MingleMate_client',
  },
  {
    id: 2,
    title: 'CollabCanvas',
    made: ' on december 2023',
    collaborator: ['Sattar'],
    description: ' A web application resembling a collaborative drawing board, similar to Google Jamboard. Users can access the boards without registration or authentication, using arbitrary nicknames. Each user can either create a new board or join existing ones, allowing multiple users to draw simultaneously. Changes are visible in real-time to others, with drawn elements persisting indefinitely....',
    technologies: ['WebSocket', 'React', 'Node', 'Tailwind', 'Mongodb', 'Express.js', 'Full-stack'],
    image: collabcanvas,
    link: 'https://collabcanvas-client.onrender.com/',
    github: 'https://github.com/AbdusSattar-70/CollabCanvas_client',
  },
  {
    id: 4,
    title: 'Appoint with a Doctor',
    made: ' on August 2023',
    collaborator: ['Lengushuru', 'Enoch', 'Daniel', 'Tracy', 'Sattar'],
    description: 'The Appoint Doctor Project is a user-friendly web app for booking doctor appointments. It offers secure login using Devise-jwt and supports multiple user roles (patient, doctor, admin). Admins can add/delete doctors. Users can schedule/cancel appointments and view their appointment list. The app simplifies the process of finding and managing medical appointments online....',
    technologies: ['Rails', 'React', 'Redux', 'PostgreSQL', 'JavaScript', 'Bootstrap', 'API', 'Full-stack'],
    image: appointDoctor,
    link: 'https://abdussattar-70.github.io/appoint-doctor-frontend/',
    github: 'https://github.com/Tracy-miranja/appoint-doctor-frontend',
  },

  {
    id: 5,
    title: 'Nation Navigator',
    made: 'on April 2023',
    collaborator: ['Abdus Sattar'],
    description: 'Nation Navigator is a website where you can learn about different countries from around the world. It has information on things like what region the country is in, how many people live there, what the capital city is, what language is spoken, and even what the flag looks like. You can easily search for a country you are interested in and find all the information in a simple and easy-to-read format. The website uses a tool called the Rest Countries API to get the latest and most accurate data. So, if you want to learn about a new country, Nation navigator is a great place to start!....',
    technologies: ['React', 'Redux', 'JSX', 'ES6', 'CSS', 'Jest', 'API'],
    image: nation,
    link: 'https://creative-creponne-9b4329.netlify.app/',
    github: 'https://github.com/AbdusSattar-70/Nation-Navigator',
  },
  {
    id: 6,
    title: 'Math-Magicians',
    made: 'on April 2023',
    collaborator: ['Santosh Konappanavar', 'Abdus Sattar'],
    description: 'Math-Magicians is the first project of the Math Magicians application with React. I set up the environment and tools needed to develop a React application. In this project, I have made a simple SPA that contains three subpages - Made a simple calculator, made a random math-related quote, and Homepage. In addition we made the pair programming for testing the application.....',
    technologies: ['React', 'SPA', 'JSX', 'ES6', 'CSS', 'Jest', 'API'],
    image: math,
    link: 'https://abdussattar-70.github.io/Math-Magicians/',
    github: 'https://github.com/AbdusSattar-70/Math-Magicians',
  },
  {
    id: 7,
    title: 'Leaderboard',
    made: 'on March 2023',
    collaborator: ['Abdus Sattar'],
    description: 'This project is a Single Page Application (SPA) that interacts with a Leaderboard API to display a list of players names and scores. Users can add new players scores to the list, which is then stored in the API. The project uses Webpack for bundling and optimizing code. Webpack allows you to combine all your JavaScript modules into a single file, reducing the number of HTTP requests required to load a web page. This results in a faster and more responsive web page for users. Overall, this project is a great way to gain practical experience in web development and gain valuable knowledge that can be applied to other projects in the future....',
    technologies: ['Webpack', 'SPA', 'ES6', 'HTML', 'HTTPs verb', 'CSS', 'API'],
    image: leader,
    link: 'https://glittering-lily-6961e8.netlify.app/',
    github: 'https://github.com/AbdusSattar-70/Leaderboard',
  },
  {
    id: 8,
    title: 'Bookstore CMS',
    made: 'on March 2023',
    collaborator: ['Abdus Sattar'],
    description: 'In this project, I have made a simple SPA that contains two subpages - Books and Categories. It allows users to add and remove books and those books will be hosted on Bookstore API....',
    technologies: ['React', 'SPA', 'ES6', 'Redux', 'HTTPs verb', 'CSS', 'Jest'],
    image: cms,
    link: 'https://abdussattar-70.github.io/Bookstore-with-react/',
    github: 'https://github.com/AbdusSattar-70/Bookstore-with-react',
  },
  {
    id: 9,
    title: 'Space Travelers Hub',
    made: 'on March 2023',
    collaborator: ['lengushuru charles', 'Abdus Sattar'],
    description: 'Our team developed a web application called the Space Travelers Hub, which enables users to book rockets and participate in selected space missions. The application utilizes real-time data from the SpaceX API and features a user-friendly interface that we designed through pair programming. To ensure the application functions correctly, implemented error handling and thoroughly tested the application to ensure its usability and security. Overall, the Space Travelers Hub is a successful web application that meets the needs of our client, a company providing commercial and scientific space travel services. It offers users a seamless booking experience and helps to make space travel accessible to a wider audience....',
    technologies: ['React', 'SPA', 'ES6', 'Redux', 'HTTPs verb', 'CSS', 'Jest'],
    image: space,
    link: 'https://mellifluous-crumble-2470ac.netlify.app/',
    github: 'https://github.com/lengushuru/Space-Travelers-Hub',
  },
  {
    id: 10,
    title: 'JavaScript Capstone',
    made: 'on March 2023',
    collaborator: ['Kevin Toro', 'Abdus Sattar'],
    description: 'Javascript-Capstone is a project for learning Gitflows, GitHub workflows, and usage of API and SPA. It has two main parts Homepage and Comments modal. Thanks ❤️ to my coding partner Kevin Toro for contributing to creating such an amazing-looking UI In this project, we have used JS, HTML, CSS, webpack, and API for making a demo restaurant. It will allow users to make comments and likes and It will save on the Involvement API. In addition, we also followed the AAA pattern for testing suggested functions....',
    technologies: ['Webpack', 'SPA', 'ES6', 'HTML', 'HTTPs verb', 'CSS', 'API'],
    image: jscap,
    link: 'https://abdussattar-70.github.io/Javascript-Capstone/dist/',
    github: 'https://github.com/AbdusSattar-70/Javascript-Capstone',
  },
  {
    id: 11,
    title: 'First Capstone',
    made: 'on February 2023',
    collaborator: ['Abdus Sattar'],
    description: 'FirstCapstone is a personal learning project aimed at mastering the best practices for utilizing HTML, CSS, and JavaScript. Arcadia MusicFest-2023 For over three decades, Arcadia Academy of Music has been hosting Musicfest, our biggest event that allows our students to showcase their musical talents in front of their peers, friends, and family. Due to the pandemic, last years competition was held online, but this year, we are thrilled to announce that Musicfest is back as an in-person event! Musicfest is a testament to the exceptional teaching, support, and encouragement our students receive at Arcadia Academy of Music. This competition brings all of our locations together to celebrate and showcase the best and brightest musical talents from our community...',
    technologies: ['ES6', 'CI/CD', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    image: first,
    link: 'https://abdussattar-70.github.io/FirstCapstone/',
    github: 'https://github.com/AbdusSattar-70/FirstCapstone',
  },
  {
    id: 12,
    title: 'Awesome Book',
    made: 'on February 2023',
    collaborator: ['Abdus Sattar'],
    description: 'Awesome Book with ES6 is a simple website that displays a list of books and allows you to add and remove books from that list...',
    technologies: ['ES6', 'Git', 'GitHub', 'HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    image: awesome,
    link: 'https://abdussattar-70.github.io/Awesome-Book-ES6/',
    github: 'https://github.com/AbdusSattar-70/Awesome-Book-ES6',
  },
  {
    id: 13,
    title: 'To Do List',
    made: 'on February 2023',
    collaborator: ['Abdus Sattar'],
    description: 'This repo is created for learning objectives on how to create a To-do-list and use Webpack with ES6 .it is a simple website that displays a list of To do tasks and allows you to add and remove tasks from that list..',
    technologies: ['Webpack', 'ES6', 'HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    image: todo,
    link: 'https://abdussattar-70.github.io/To-Do-List/dist/',
    github: 'https://github.com/AbdusSattar-70/To-Do-List',
  },
  {
    id: 14,
    title: 'Portfolio',
    made: 'on January 2023',
    collaborator: ['Mehmet Selçuk Güler', 'Santosh Konappanavar', 'Sonika Kumar', 'Abdus Sattar'],
    description: 'portfolio is my first project for learning Git and GitHub workflows. This is my portfolio website that is made as a part of Microverses task although I will use it for my portfolio when will be completed.I create a complete mobile version and desktop version. It has four main sections headline, works, about me, and a contact form. Thanks ❤️ to my coding partner MEHMET Selçuk Güler for contributing to creating the mobile menu interactivity. In this milestone, we have created mobile and desktop version popUp window using js..',
    technologies: ['ES6', 'CI/CD', 'Git', 'GitHub', 'HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    image: portfolio,
    link: 'https://abdussattar-70.github.io/portfolio/',
    github: 'https://github.com/AbdusSattar-70/portfolio',
  },
];

export default projectInfo;
