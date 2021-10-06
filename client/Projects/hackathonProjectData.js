const projectData = [
  {
    id: 0,
    name: "A Dog's Journey",
    links: [
      {
        name: 'Medium',
        url: 'https://kmschroeder91.medium.com/building-a-game-with-three-js-f5796ecf15cf',
      },
      {
        name: 'GitHub Repo',
        url: 'https://github.com/Ka9kdc/aDogsJourney',
      },
    ],
    image: {
      src: 'images/smartmockups_kjkmxumj.png',
      alt: "Mock up of the A Dog's Journey Game",
    },
    text: [
      'A simple 3D browser game built with Three.js where the player moves a dog around the field collecting dog bones and avoid obstacles.',
      'This was a 4 day hackathon style project, where I had to learn a new piece of technology.',
      ' Along with building the game, I wrote an article on how to build the game.',
    ],
    techUsed: ['Three.js', 'HTML', 'CSS', 'Javascript'],
    hackathon: true,
    org: 'FullStack',
    date: 'October 2020',
    solo: true,
  },
  {
    id: 1,
    name: 'Bros-Apothecary',
    links: [
      {
        name: 'Deployed',
        url: 'http://bros-apothecary.herokuapp.com/',
      },
      {
        name: 'GitHub Repo',
        url: 'https://github.com/grace-shopper-team-c/grace-shopper',
      },
    ],
    image: {
      src: 'images/smartmockups_kjkotk4z.png',
      alt: 'Mock up of the Bros Apothacary e-commerce store.',
    },
    text: [
      'A mock e-Commerce website selling your everyday (hu)man apothecary essentials.',
      'Wrote the vertical code slices and test using Express, Sequelize, Redux, React, Mocha and Chai for all items, single item and admin components ',
      'Deployed website using Heroku and Travis CI ',
      'Designed site with CSS3 ',
    ],
    techUsed: ['Sequelize', 'Express', 'Node.js', 'React', 'Redux'],
    hackathon: false,
    org: 'FullStack',
    date: 'September/October 2020',
    solo: false,
  },
  {
    id: 2,
    name: 'Createmates',
    links: [
      {
        name: 'Deployed',
        url: 'https://createmate.herokuapp.com',
      },
      {
        name: 'GitHub Repo',
        url: 'https://github.com/createmates/createmates',
      },
    ],
    video: {
      width: '560',
      height: '315',
      src: 'https://www.youtube.com/embed/rTwLXFVN_I0',
      frameBorder: '0',
      allow:
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
      allowFullScreen: true,
      title: 'demo video of createmates',
    },
    image: {
      src: 'images/smartmockups_kjkhgdqm.png',
      alt: "Mock up of the createmate's wep application",
    },
    text: [
      'A Progressive Web Application for artists seeking to connect and collaborate. Artists can link up, chat, and enter a video conference room to reinvigorate a working practice and have access to community during a prolonged time of isolation.',
      'Using Node, Express, React, Redux, Postgres/Sequelize as well as Socket.io, we created a Progressive Web App with built-in video and chat features. We relied on Node.js’s WebRTC API and sockets to build a persistent connection between two users. For our front-end, we used Redux to manage state across many React components, Bootstrap for styling, and Digital Ocean to manage media storage. We learned the challenges of managing multi-form data, the various approaches to implement live video streaming and chat capabilities, and how to connect users in real-time.',
    ],
    techUsed: [
      'Node',
      'Express',
      'React',
      'Redux',
      'Postgres',
      'Sequelize',
      'WebRTC',
      'Digital Ocean',
      'Bootstrap',
      'CSS',
      'Socket.io',
    ],
    hackathon: false,
    org: 'FullStack',
    date: 'October 2020',
    solo: false,
  },
  {
    id: 3,
    name: 'Lunch Time',
    links: [
      {
        name: 'Submission',
        url: 'https://mintbean.io/meets/1210c780-f910-4511-aec8-a364420f8333/projects/6f615a06-d879-48c1-9775-2480cb8578e0',
      },
      {
        name: 'Deployed',
        url: 'https://lunchtime-62b9b.web.app/',
      },
      {
        name: 'GitHub Repo',
        url: "https://github.com/Cwlowe/Lunch_time'",
      },
    ],
    video: {
      width: '560',
      height: '315',
      src: 'https://www.youtube.com/embed/xh6DzVkeUH8',
      frameBorder: '0',
      allow:
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
      allowFullScreen: true,
      title: 'demo video of lunch time',
    },
    image: {
      src: '',
      alt: '',
    },
    text: [
      'In April 2021, Leslie Meng, Calvin Lowe and I built Lunch Time as part of the Mintbean and StepZen weeklong learn-a-thon. The goal of the project was to make a web application using GraphQL and the StepZen API.',
      'Lunch Time is a web application that will tell a user if they can afford to buy lunch and still pay all of their bills before their next paycheck. Lunch Time was build using Next.js, GraphQL, StepZen, React and Material-ui .',
      'One interesting thing, I learned this week is that you can use google sheets as your database. Once we got the google sheet connected to our code using StepZen, It was really easy to add new rows and fix errors in our data.',
    ],
    techUsed: ['Next.js', 'GraphQL', 'StepZen', 'React', 'Material-ui'],
    hackathon: true,
    org: 'Mintbean',
    date: 'May 2021',
    solo: false,
  },
  {
    id: 4,
    name: 'Block Crusher',
    links: [
      {
        name: 'Submission',
        url: 'https://mintbean.io/meets/7c1ff845-3410-4b5c-8965-b80de1374d77/projects/2bdb4831-aa6e-4c9a-a6d8-b64fec1d2484',
      },
      {
        name: 'Deployed',
        url: 'https://ka9kdc.github.io/BlockCrusherPuzzleGame/',
      },
      {
        name: 'GitHub Repo',
        url: 'https://github.com/Ka9kdc/BlockCrusherPuzzleGame',
      },
    ],
    gif: {
      width: '360',
      height: '360',
      frameBorder: '0',
      src: 'https://imgflip.com/embed/5305ji',
      title: 'gif of block crusher game play',
    },
    image: {
      src: '',
      alt: '',
    },
    text: [
      'Block Crusher is a candy crush style puzzle game.',
      'The game was built over the course of one week for a Mintbean Learn-a-thon in March 2021. The goal of the learn-a-thon was to build a browser turn-based puzzle game.',
      'The idea for this game came to me after solving the candy crush algo on leetcode. Having already solved how to clear the board of matching tiles after a player moves. It was not that big of a leap to implement the game board and allow for a player to move tiles around.',
      'The goal of the game is to clear the board and reach a target score. I created several levels with an increasing variety of colored tiles and columns to clear. As columns clear and tiles become visable, empty columns will disappear from the game board. This allows for continuing game play by elimiting empty tiles that can not be traded. Another feature I implented was a randomize button. Clicking the button with randomly reassign the visable tiles to the bottom rows allowing for more tiles to fall down on to the game board.',
    ],
    techUsed: ['HTML', 'CSS', 'Javascript'],
    hackathon: true,
    org: 'Mintbean',
    date: 'March 2021',
    solo: true,
  },
  {
    id: 5,
    name: 'Tetrix',
    links: [
      {
        name: 'Submission',
        url: '',
      },
      {
        name: 'Deployed',
        url: 'https://ka9kdc.github.io/tetrix/',
      },
      {
        name: 'GitHub Repo',
        url: 'https://github.com/Ka9kdc/tetrix',
      },
    ],
    image: {
      src: '',
      alt: '',
    },
    gif: {
      style: { width: '80%', height: 'auto' },
      src: 'images/ezgif.com-gif-maker.gif',
      title: 'gif of tetris blocks rotating',
    },
    text: [
      'This is a tetris Clone. In this version of Tetris the speed at which the blocks fall will increase as your level increases.',
      'The game was built over the course of one week for a Mintbean hire-a-thon in August 2021. The goal of the hire-a-thon was to build a 2D game without a game engine.',
      'In the game, there are seven types of blocks that will falling down one at a time. The blocks are in the shape of the letters: L, J, T, S, Z, I and O. All the blocks can be rotated and moved while falling, so you can control where they are placed.',
      'The goal is to a fill row with the falling blocks to clear the row and prevent your board from filling up. Everytime your clear five rows, your level will increase and the blocks will slowly start to fall faster. The game end when no more blocks can enter the board from the top.',
    ],
    techUsed: ['HTML', 'CSS', 'Javascript'],
    hackathon: true,
    org: 'Mintbean',
    date: 'August 2021',
    solo: true,
  },
  {
    id: 6,
    name: 'Notes For Friends',
    links: [
      {
        name: 'DevPost Submission',
        url: 'https://devpost.com/software/notes-for-friends',
      },
      {
        name: 'Deployed',
        url: 'https://notes-with-friends.herokuapp.com/',
      },
      {
        name: 'GitHub Repo',
        url: 'https://github.com/HKLT-Together-Hackaton/Notes-For-Friends',
      },
    ],
    video: {
      width: '560',
      height: '315',
      src: 'https://www.youtube.com/embed/KF1bfWFr1vI',
      frameBorder: '0',
      allow:
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
      allowFullScreen: true,
      title: 'submission video for notes for friends',
    },
    image: {
      src: '',
      alt: '',
    },
    text: [
      'Notes for Friends connects people via chat.',
      'Notes for Friends is a full-stack application built with Node.js,  Express, React, Redux, and Sequelize. We also utilized bootstrap to  help aid with front-end styling, and vanilla JS to tie in some fun  add-on functionality.',
      'A three person built it over the course of 48 hours for TechTogether Seattle 2021.',
    ],
    techUsed: ['React', 'Redux', 'Express', 'Node', 'Socket', 'HTML', 'CSS'],
    hackathon: true,
    org: 'TechTogether Seattle 2021',
    date: 'January 2021',
    solo: false,
  },
  {
    id: 7,
    name: 'WCRA Website Redesigned',
    links: [
      {
        name: 'W9CUU.ORG',
        url: 'https://w9ccu.org',
      },
    ],
    image: {
      src: 'images/smartmockups_kuehezis.jpg',
      alt: '',
    },
    text: [
      'In March 2021, the w9ccu website crashed due to the hosting service no longer supporting the php version used on the website. At the request of the WCRA board, I was asked to remake the website using wordpress.',
      '',
    ],
    techUsed: ['Wordpress', 'HTML', 'CSS'],
    hackathon: false,
    org: 'Wheaton Community Radio Amatuers (WCRA)',
    date: 'April 2021',
    solo: true,
  },
  {
    id: 8,
    name: 'Learn-A-Bit',
    links: [
      {
        name: 'Deployed',
        url: 'https://ka9kdc.github.io/Learn-a-bit/',
      },
      {
        name: 'GitHub Repo',
        url: 'https://github.com/Ka9kdc/Learn-a-bit/tree/ChallengeSet02/Projects/ChallengeSet02',
      },
    ],
    image: {
      src: 'images/smartmockups_kuapdm3b.jpg',
      alt: 'Mock up of my project',
    },
    text: [
      'Their learn-a-bit challenges are small static webpage creations focusing on html and css responsive design. For the challenge you are given an image of what your site should look like in a mobile friendly view and on a desktop.',
      "For the first week's challenge; we were tasked with making a header section and an image gallery. During this challenge I focused on learning and implementing css animations and transitions in a mobile first designs.",
      'Week 2: we were tasked with making a pricing page and a review page. During this challenge, I focused on learning and implementing css variables and creating icons with just css.',
      'Week three: we were tasked with making a contact form and footer along with combining the previous weeks challenges into a single page. During  this challenge, I learned that you can import an html file into another html file using the object or iframe tags. However doing so and keeping a neat responsive design, can be challenging because you have to specify the height and width you need the iframe to be to prevent having multiple scroll bars and hidden text on your page.',
    ],
    techUsed: ['HTML', 'CSS'],
    hackathon: true,
    org: 'Mintbean',
    date: 'September 2021',
    solo: true,
  },
  // {id:9,
  //    name: '',
  //   links: [
  //     {
  //       name: 'Submission',
  //       url: '',
  //     },
  //     {
  //       name: 'Deployed',
  //       url: '',
  //     },
  //     {
  //       name: 'GitHub Repo',
  //       url: '',
  //     },
  //   ],
  //   image: {
  //     src: '',
  //     alt: '',
  //   },
  //   text: ['', ''],
  //   techUsed: [],
  //   hackathon: true,
  //   org: 'Mintbean',
  //   date: '2021',
  // solo: true
  // },
  // {id:10,
  //    name: '',
  //   links: [
  //     {
  //       name: 'Submission',
  //       url: '',
  //     },
  //     {
  //       name: 'Deployed',
  //       url: '',
  //     },
  //     {
  //       name: 'GitHub Repo',
  //       url: '',
  //     },
  //   ],
  //   image: {
  //     src: '',
  //     alt: '',
  //   },
  //   text: ['', ''],
  //   techUsed: [],
  //   hackathon: true,
  //   org: 'Mintbean',
  //   date: '2021',
    // solo: true
  // },
];

export default projectData;
