import veterinaryPic from "../images/Veterinary-patients.webp";
import drinkCartPic from "../images/Drinks-cart.webp";
import caloryTrackerPic from "../images/Calory-tracker.webp";

export const PROJECTS_DATA = [
  {
    name: "Drinks Cart App",
    description:
      "In this app you can put an ingredient or a name of a drink on the input and search on an API database all the drinks recipes related to it, and if you like the drink you can store it on your favorites section.",
    link: "https://github.com/luchosr/drinks-cart-app",
    stack: ["React", "TypeScript", "Zustand", "ZOD", "TailwindCSS"],
    imgsrc: drinkCartPic,
  },
  {
    name: "Veterinary Patients App",
    description:
      "This is an app to keep track of veterinary patients, you can create a ticket as an appointment with  patient's status, edit it and delete it.",
    link: "https://github.com/luchosr/veterinary-patients",
    stack: ["React", "TypeScript", "Zustand", "TailwindCSS"],
    imgsrc: veterinaryPic,
  },
  {
    name: "Calories Tracker",
    description:
      "This is an app to track daily calories burned during exercise or added up in food intake.",
    link: "https://github.com/luchosr/calories-counter",
    stack: ["React", "TypeScript", "Context API", "TailwindCSS"],
    imgsrc: caloryTrackerPic,
  },
];
