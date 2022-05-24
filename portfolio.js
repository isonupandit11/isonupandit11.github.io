import emoji from "react-easy-emoji";

export const greetings = {
  name: "Sonu Sharma",
  title: "Hi all, I'm Sonu",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with Asp.net/C#, React.js, and MVC Core Framework.",
  resumeLink: "",
};

export const openSource = {
  githubUserName: "isonupandit11",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/isonupandit11",
  instagram: "https://www.instagram.com/isonupandit11",
  twitter: "https://twitter.com/isonupandit11",
  github: "https://github.com/isonupandit11",
  linkedin: "https://www.linkedin.com/in/sonusharma11/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building Full-Fledged Applications Asp.net/C#."),
        emoji("⚡ Building responsive static websites using React.js"),
        emoji("⚡ Building RESTful APIs using .NET Core"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "vscode-icons:file-type-django",
        },

        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working on multiple cloud platforms"),
        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
        ),
        emoji(
          "⚡ Building  & deployment using Azure, AWS, Google Cloud Platform, Digital Ocean, Heroku"
        ),
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "logos:heroku-icon",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "logos:github-actions",
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassname: "logos:cloudinary",
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "logos:nginx",
        },
        {
          skillName: "Sentry",
          fontAwesomeClassname: "logos:sentry-icon",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "60", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "75",
  },
  {
    Stack: "Programming",
    progressPercentage: "70",
  },
];

export const educationInfo = [
  {
    schoolName: "CCS University",
    subHeader: "Bachelors's in Computer Application",
    duration: "August 2018 - April 2021",
    desc: "Participated in various projects with a team of 4 members",
    descBullets: [
      "Developed a web application using ASP.net/C# with SQL Server as database and tailwindcss as a frontend framework.",
    ],
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Cliniminds",
    companylogo: "/img/icons/common/ClinimindLogo.png",
    date: "August 2021 – Present",
    desc: "I work here as Full Stack Developer and have responsibility for developing, maintaining web applications, resolving issues and implementing new features. ",
    descBullets: [
      "Currently developing a new web application from scratch with .net core mvc (.net 6.0) with a fresh ui to give a better and modern user experience to students of Cliniminds.",
      "Developed online subjective examination system with all sorts of features.",
      "Integrated google APIs (Admin Sdk, Drive Api v3, Calender api) to create on demand auto recurring google meet meetings and automate linking recorded meeting videos within LMS.",
      "Day to day maintenance of the application.",
    ],
  },
];

export const projects = [
  {
    name: "Proizvod",
    desc: "This is a E-commerce web app Built Using asp.net C#,jQuery AJAX, Tailwind CSS. SQL Server 2019 is used as database.",
    github: "https://github.com/isonupandit11/proizvod",
  },
];

export const feedbacks = [
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
];
