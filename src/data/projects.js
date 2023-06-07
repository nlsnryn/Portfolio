import Skillable from "@/assets/images/SKILLABLE.png";
import Weather from "../assets/images/Weather.png";
import QuizApp from "../assets/images/QuizApp.png";
import Notes from "../assets/images/Notes.png";
import TPJ from "../assets/images/capstone.png";
import Meme from "../assets/images/Memegen.png";

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
  },
  {
    id: 2,
    title: "Skillable",
    description:
      "It is a application that you can create account and login. You can also store, update and delete some notes or skills",
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
  },
  {
    id: 3,
    title: "WeatherRN",
    description:
      "A webapp for tracking city or state weather real time using fahreinheit",
    technologies: ["Vue", "JavaScript", "Tailwind CSS", "Axios", "Api"],
    repository: "https://github.com/nlsnryn/WeatherNR",
    image: Weather,
    demo: "https://weatherrn-nlsnryn.netlify.app/",
  },
  {
    id: 4,
    title: "QuizApp",
    description:
      "Quiz app that you can answer some questions and getting score once done",
    technologies: ["Vue"],
    repository: "https://github.com/nlsnryn/Quiz-App",
    image: QuizApp,
    demo: "https://quizapp-nlsn.netlify.app/",
  },
  {
    id: 5,
    title: "VueNotes",
    description: "A vue application that you can store some notes",
    technologies: ["Vue"],
    repository: "https://github.com/nlsnryn/My-Vue-Notes",
    image: Notes,
    demo: "https://nelsonryan-my-vue-notes.netlify.app/",
  },
  {
    id: 6,
    title: "Memes Generator",
    description:
      "A react application that generate some memes picture and can input custom text.",
    technologies: ["React", "Tailwind CSS", "Api"],
    repository: "https://github.com/nlsnryn/Meme-Generator",
    image: Meme,
    demo: "https://nlsn-app-memegen.netlify.app/",
  },
];
