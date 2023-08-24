import spendigo from '../assets/spendigo.png';
import recipe from '../assets/recipe.png';
import blog from '../assets/blog.png';
import catalog from '../assets/catalog.png';
import medical from '../assets/medical.png';
import vet from '../assets/vet.png';

const projectInfo2 = [
  {
    id: 1,
    title: 'SpendiGo',
    made: 'on July 2023',
    collaborator: ['Sattar'],
    description: 'The SpendiGo a mobile web app for efficient budget management. This app allows users to track their expenses by maintaining a list of transactions categorized by type. By utilizing the app, users can easily visualize the amount of money they have spent and on what....',
    technologies: ['Ruby', 'Rails', 'Full-stack', 'PostgreSQL', 'CSS', 'Rspec', 'Capybara'],
    image: spendigo,
    link: 'not deployed',
    github: 'https://github.com/AbdusSattar-70/SpendiGo',
  },
  {
    id: 2,
    title: 'Recipe App',
    made: 'on July 2023',
    collaborator: ['Peter Okorafor', 'Sattar'],
    description: 'Food Recipe App keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe....',
    technologies: ['Tailwind', 'Ruby', 'PostgreSQL', 'Full-stack', 'Ruby on Rails', 'Rspec', 'Capybara'],
    image: recipe,
    link: 'not deployed',
    github: 'https://github.com/peterdtitan/food-recipe-app',
  },
  {
    id: 3,
    title: 'Blogging Haven',
    made: 'on June 2023',
    collaborator: ['Rishi Mishra', 'Matee Safi', 'Sattar'],
    description: 'The Blogging Haven is set to become a prime illustration of a blog website. It encompasses a project that tasked me with the creation of a fully operational website, showcasing a comprehensive list of posts and empowering readers to engage with them through comments and post likes. It has been constructed using PostgreSQL and Ruby on Rails....',
    technologies: ['Ruby', 'Ruby on Rails', 'CSS', 'PostgreSQL', 'Full-stack', 'Rspec'],
    image: blog,
    link: 'not deployed',
    github: 'https://github.com/AbdusSattar-70/Blogging-Haven',
  },
  {
    id: 4,
    title: 'The Catalog of My Things',
    made: 'on June 2023',
    collaborator: ['Christian Kiyong', 'Okpah Igbo', 'Abdus Sattar'],
    description: 'The Ruby-Group-Capstone project The Catalog of My Things app is a Ruby-based solution for managing and organizing your collection of books, games, and music albums. It allows you to add new items, explore your collection by labels, genres, and authors, and provides a user-friendly interface for easy navigation. It is a convenient tool to keep track of your personal inventory of books, games, and music albums....',
    technologies: ['Ruby', 'Rspec', 'SQL', 'Inheritance', 'Abstraction', 'Polymorphism', 'Encapsulation', 'TDD', 'Json'],
    image: catalog,
    link: 'not deployed',
    github: 'https://github.com/AbdusSattar-70/Ruby-Group-Capstone',
  },
  {
    id: 5,
    title: 'OOP School Library',
    made: 'on May 2023',
    collaborator: ['Tshobohwa Salomon', 'Abdus Sattar'],
    description: 'The OOP-School-Library project consists of three classes: Person, Student, and Teacher. The Person class has attributes for identification, name, and age, along with getters and setters. It also has a method to check if a person is of age or has parental permission.The Student class inherits from Person and adds a classroom attribute. It includes a method called play_hooky to represent skipping class.The Teacher class also inherits from Person and includes a specialization attribute. It overrides the can_use_services. method to always return true.Each class is saved in a separate file for better organization. The project provides a foundation for a library management system in a school environment....',
    technologies: ['SQL', 'TDD', 'Ruby', 'Inheritance', 'Abstraction', 'Polymorphism', 'Encapsulation', 'Rspec', 'Json'],
    image: catalog,
    link: 'not deployed',
    github: 'https://github.com/AbdusSattar-70/oop-school-library',
  },
  {
    id: 6,
    title: 'Medical Clinic Database',
    made: 'on May 2023',
    collaborator: ['Lovi Madaan', 'Abdus Sattar'],
    description: 'The medical clinic database is a relational database management system (RDBMS) that focuses on managing data related to animals and users. By following the provided instructions, users can recreate the database by executing the schema.sql files. The schema file contains the necessary SQL statements to create the tables and define the relationships for managing animal data, user data, and possibly other relevant information. This includes table structures, data types, primary keys, foreign keys, and constraints. Once the database is set up with the tables and populated with the sample data, users can explore and interact with the information using the provided sample queries in the queries.sql file....',
    technologies: ['RDBMS', 'PostgreSQL', 'SQL', 'ERD', 'UML'],
    image: medical,
    link: 'not deployed',
    github: 'https://github.com/AbdusSattar-70/medical-clinic-database',
  },
  {
    id: 7,
    title: 'Vet Clinic Database',
    made: 'on May 2023',
    collaborator: ['Lovi Madaan', 'Abdus Sattar'],
    description: 'The vet-clinic-database is a relational database management system (RDBMS) that focuses on managing data related to animals and users. By following the provided instructions, users can recreate the database by executing the schema.sql and data.sql files Overall, the vet-clinic-database project offers a comprehensive solution for managing animal and user data in an RDBMS. It provides a pre-defined schema, sample data, and example queries, enabling users to recreate the database, populate it with relevant information, and perform various operations on the data.....',
    technologies: ['RDBMS', 'PostgreSQL', 'SQL', 'ERD', 'UML'],
    image: vet,
    link: 'not deployed',
    github: 'https://github.com/AbdusSattar-70/vet-clinic-database',
  },
];

export default projectInfo2;
