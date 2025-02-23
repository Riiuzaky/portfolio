import {
  linkedin,
  cpp,
  css,
  express,
  html,
  java,
  javascript,
  kotlin,
  mongo,
  mysql,
  nodejs,
  postgres,
  python,
  selenium,
  react,
  jira,
  Azure,
  Jmeter,
  Appium,
  robotframework,
  tailwind,
  typescript,
  vite,
  choucair,
  Angular,
  github,

  astro,
  playwright,
  dart,
  sophos,
  nextjs2,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "stack",
    title: "Tecnologias",
  }
];

const socials = [
  {
    title: "Github",
    icon: github,
    link: "https://github.com/Riiuzaky",
  },
  {
    title: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/jonathancruzmonroy/",
  }
];

const proficientStack = [
  {
    name: "playwright",
    icon: playwright,
  },
  {
    name: "selenium",
    icon: selenium,
  },
  {
    name: "Jmeter",
    icon: Jmeter,
  },
  {
    name: "Appium",
    icon: Appium,
  },
  {
    name: "robot",
    icon: robotframework,
  },
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "Azure",
    icon: Azure,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "NodeJs",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "HTML",
    icon: html,
  },
  
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Angular",
    icon: Angular,
  },
 
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  }
];

const begginerStack = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "MongoDB",
    icon: mongo,
  },
  {
    name: "Next.js",
    icon: nextjs2,
  },
];

const learningStack = [
 
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Astro",
    icon: astro,
  }
];

const experiences = [
  {
    title: "Analista de Calidad",
    company_name: "Sophos Solutions",
    icon: sophos,
    iconBg: "#E6DEDD",
    date: "Junio 2021 - Mayo 2022",
    points: [
      "Analista de calidad manual y automatizado utilizando tecnologías como Azure, Selenium, Java, SQL",
    ],
    tags: [
      {
        name: "Selenium",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "Azure",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "",
      },
    ],
  },
  {
    title: "Analista QA",
    company_name: "Choucair Testing",
    icon: choucair,
    iconBg: "#E6DEDD",
    date: "Mayo 2022 - Enero 2023",
    points: [
      "Automatizador de pruebas usando tecnologías como Java, Python, Selenium, Cucumber y Gherkin, y patrones como POM Y SCREEMPLAY",
    ],
    tags: [
      {
        name: "Selenium",
        color: "orange-text-gradient",
      },
      {
        name: "Java",
        color: "",
      },
      {
        name: "postgresql",
        color: "text-yellow-900",
      },
    ],
  },
  
];

export {
  socials,
  proficientStack,
  begginerStack,
  learningStack,
  experiences,
};
