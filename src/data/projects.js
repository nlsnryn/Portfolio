import Skillable from "@/assets/images/SKILLABLE.png";
import Weather from "../assets/images/Weather.png";
import QuizApp from "../assets/images/QuizApp.png";
import Notes from "../assets/images/Notes.png";
import TPJ from "../assets/images/capstone.png";
import Meme from "../assets/images/Memegen.png";
import Pinia from "../assets/images/Pinia.png";
import Lazhapee from "../assets/images/Lazhapee.png";
import Laragigs from "../assets/images/Laragigs.png";

export default [
  {
    id: 1,
    title: "MIS for TPJ Farm",
    description:
      "A desktop application for TPJ Farm company that can add, monitor their livestocks and reports.",
    technologies: ["VB.Net", "MySQL", "Guna UI"],
    repository: "https://github.com/nlsnryn/Capstone-Project",
    image: TPJ,
    demo: false,
    api: false,
  },
  {
    id: 2,
    title: "Skillable",
    description:
      "It is an application wherein you can create account and login. You can also store, update and delete some notes or skills",
    technologies: [
      "Vue",
      "JavaScript",
      "Tailwind CSS",
      "Laravel",
      "Rest Api",
      "Pinia",
      "MySQL",
      "Postman",
    ],
    repository: "https://github.com/nlsnryn/Skillable.UI",
    image: Skillable,
    demo: false,
    api: "https://github.com/nlsnryn/Skillable.API",
  },
  {
    id: 3,
    title: "Lazhapee",
    description: "E-commerce website created using Vue JS and Tailwind CSS",
    technologies: [
      "Vue",
      "JavaScript",
      "Tailwind CSS",
      "Fake Store Api",
      "Pinia",
      "Axios",
    ],
    repository: "https://github.com/nlsnryn/Lazhapee",
    image: Lazhapee,
    demo: false,
    api: "https://fakestoreapi.com/",
  },
  {
    id: 4,
    title: "WeatherRN",
    description:
      "A webapp for tracking city or state weather real time using fahreinheit",
    technologies: ["Vue", "JavaScript", "Tailwind CSS", "Axios", "Api"],
    repository: "https://github.com/nlsnryn/WeatherNR",
    image: Weather,
    demo: "https://weatherrn-nlsnryn.netlify.app/",
    api: false,
  },
  {
    id: 5,
    title: "QuizApp",
    description:
      "Quiz app that you can answer some questions and getting score once done",
    technologies: ["Vue", "CSS"],
    repository: "https://github.com/nlsnryn/Quiz-App",
    image: QuizApp,
    demo: "https://quizapp-nlsn.netlify.app/",
    api: false,
  },
  {
    id: 6,
    title: "I need to do",
    description: "A vue application to do notes",
    technologies: ["Vue", "Tailwind CSS", "Pinia"],
    repository: "https://github.com/nlsnryn/Pinia-Vue",
    image: Pinia,
    demo: "https://ineedtodo.netlify.app/",
    api: false,
  },
  {
    id: 7,
    title: "VueNotes",
    description: "A vue application that you can store some notes",
    technologies: ["Vue", "CSS"],
    repository: "https://github.com/nlsnryn/My-Vue-Notes",
    image: Notes,
    demo: "https://nelsonryan-my-vue-notes.netlify.app/",
    api: false,
  },
  {
    id: 8,
    title: "Memes Generator",
    description:
      "A react application that generate some memes picture and can input custom text.",
    technologies: ["React", "Tailwind CSS", "Api"],
    repository: "https://github.com/nlsnryn/Meme-Generator",
    image: Meme,
    demo: "https://nlsn-app-memegen.netlify.app/",
    api: false,
  },
  {
    id: 9,
    title: "Laragigs",
    description: "Laravel application with authentication and job listings.",
    technologies: ["Laravel", "Tailwind CSS", "Alpine JS"],
    repository: "https://github.com/nlsnryn/Laragigs",
    image: Laragigs,
    demo: false,
    api: false,
  },
];
