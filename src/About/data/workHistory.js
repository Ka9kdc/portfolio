export const workHistory = [
  {
    key: 9,
    companyLogo: 'images/fluz-logo.svg',
    companyName: 'Fluz',
    JobTitle: 'Software Engineer',
    start: 'February 2022',
    end: 'Present',
    description: [
      'Develop automation for grabbing and processing daily settlement reports from our payment gateway processors',
      'Created daily reporting for the bank on user balances and activity',
      'Worked with a team to develop Virtual Cards usage flow',
    ],
    customLogoStyle: {backgroundImage: "linear-gradient(0deg, rgb(253,194,81) 0%, rgb(250,188,153) 41%, rgb(247,180,245) 50%, rgb(166,180,247) 76%, rgb(115,181,255) 99%)", padding: "10px", borderRadius: "20px"}
  },
  {
    key: 8,
    companyLogo: 'images/fullstack-academy-logo-color-on-white.png',
    companyName: 'Fullstack Academy',
    JobTitle: 'Amazon Career Choice - Software Engineering/Web Development Mentor II - Part Time',
    start: 'February 2023',
    end: 'Present',
    description: [
      'Teaching assistant and Mentor to cohorts junior web developers covering: software engineering concepts, computer science fundamentals, debugging techniques, schema design, and pair programming',
      'Libraries and frameworks taught were: Javascript, React, Node, Express, SQL, CSS and HTML',
      'Acted as project manager and technical mentor for students during various projects, employing the use of agile methodologies',
      'Conducted mock technical interviews and impromptu lectures',
      'Ran weekly Office Hours and weekly whiteboard algo practice',
    ],
  },
  {
    key: 7,
    companyLogo: 'images/LittleLogoTransparent.png',
    companyName: 'Wheaton Community Radio Amateurs',
    JobTitle: 'Hamfest Chairman',
    start: 'June 2022',
    end: 'Present',
    description: [
      'Organized a radio, computer and electronics expo with over 750 attendees',
      'Handled communication with vendors and six subcommittees',
      'Brought in $2000 each year for the club',
    ],
  },
  {
    key: 6,
    companyLogo: 'images/fullstack-academy-logo-color-on-white.png',
    companyName: 'Fullstack Academy',
    JobTitle: 'Univ Software Engineering/Web Development Mentor - Part Time',
    start: 'December 2021',
    end: 'February 2023',
    description: [
      'Teaching assistant and Mentor to cohorts junior web developers covering: software engineering concepts, computer science fundamentals, debugging techniques, schema design, and pair programming',
      'Libraries and frameworks taught were: Javascript, React, Node, Express, SQL, CSS and HTML',
      'Acted as project manager and technical mentor for students during various projects, employing the use of agile methodologies',
      'Conducted mock technical interviews and impromptu lectures',
      'Ran weekly Office Hours and weekly whiteboard algo practice',
    ],
  },
  {
    key: 4,
    companyLogo: 'images/fullstack-academy-logo-color-on-white.png',
    companyName: 'Fullstack Academy',
    JobTitle: 'Software Engineering/Web Development Instructional Associate',
    start: 'July 2021',
    end: 'December 2021',
    description: [
      'Teaching assistant to a cohort of 12 junior web developers covering: software engineering concepts, computer science fundamentals, debugging techniques, schema design, and pair programming',
      'Libraries and frameworks taught were: jquery, Javascript, React, Node, Express, SQL, CSS and HTML',
      'Conducted mock technical interviews and impromptu lectures',
      'Ran weekly Office Hours and weekly whiteboard algo practice',
    ],
  },
  {
    key: 5,
    companyLogo: 'images/LittleLogoTransparent.png',
    companyName: 'Wheaton Community Radio Amateurs',
    JobTitle: 'Webmaster',
    start: 'November 2019',
    end: 'Present',
    link: 'w9ccu.org',
    description: [
      'Integrate PayPal allowing membership dues, Hamfest tickets and vendor orders to be processed and paid online',
      'Update website monthly with meeting minutes and notices for club membership',
      'Enhanced online renewals form using Javascript, PHP, HTML and CSS allowing for emails are sent upon submission.',
      'Rebuild and redesigned website with Wordpress',
    ],
  },
  {
    key: 1.3,
    companyLogo: 'images/fullstack-academy-logo-color-on-white.png',
    companyName: 'Fullstack Academy',
    JobTitle: 'Software Engineering/Web Development Teaching Fellow',
    start: 'November 2020',
    end: 'February 2021',
    description: [
      'Teaching assistant to a cohort of 40+ students covering: software engineering concepts, computer science fundamentals, debugging techniques, schema design and pair programming',
      'Acted as project manager and technical mentor for teams of 4 students during 4 projects, employing the use of agile methodologies',
      'Conducted technical admissions interviews',
      'Ran weekly whiteboard algo lectures',
    ],
  },
  {
    key: 2,
    companyLogo: 'images/LittleLogoTransparent.png',
    companyName: 'Wheaton Community Radio Amateurs',
    JobTitle: 'Hamfest Chairman',
    start: 'February 2016',
    end: 'January 2020',
    description: [
      'Organized a radio, computer and electronics expo with over 750 attendees',
      'Handled communication with vendors and six subcommittees',
      'Brought in $2000 each year for the club',
    ],
  },
  {
    key: 1,
    companyLogo: 'images/209-2092285_office-depot-office-max-png-logo.png',
    companyName: 'Office Depot',
    JobTitle: 'Print and Copy Supervisor',
    start: 'April 2015',
    end: 'February 2020',
    description: [
      'Trained co-workers on new equipment and procedures',
      'Ensured supplies were in-stock to produce client orders',
      'Handled placing and producing orders for over 50 clients a week',
      'Achieved over department sales goals almost every quarter',
    ],
  },
].sort((a,b) => b.key - a.key);
