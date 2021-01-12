import foodTruckTrackR1 from "../../assets/projects/foodTruckTrackR/food-truck-trackr-screenshot.png";
import foodTruckTrackR2 from "../../assets/projects/foodTruckTrackR/foodTruckTrackR2.png";
import foodTruckTrackR3 from "../../assets/projects/foodTruckTrackR/foodTruckTrackR3.png";
import foodTruckTrackR4 from "../../assets/projects/foodTruckTrackR/foodTruckTrackR4.png";
import foodTruckTrackR5 from "../../assets/projects/foodTruckTrackR/foodTruckTrackR5.png";

import dinnerAndDessert1 from "../../assets/projects/dinnerAndDessert/dinnerAndDessert1.png";
import dinnerAndDessert2 from "../../assets/projects/dinnerAndDessert/dinnerAndDessert2.png";
import dinnerAndDessert3 from "../../assets/projects/dinnerAndDessert/dinnerAndDessert3.png";
import dinnerAndDessert4 from "../../assets/projects/dinnerAndDessert/dinnerAndDessert4.png";
import dinnerAndDessert5 from "../../assets/projects/dinnerAndDessert/dinnerAndDessert5.png";

import ljpeg1 from "../../assets/projects/ljpeg/ljpeg.png";
import ljpeg2 from "../../assets/projects/ljpeg/ljpeg2.png";
import ljpeg3 from "../../assets/projects/ljpeg/ljpeg3.png";
import ljpeg4 from "../../assets/projects/ljpeg/ljpeg4.png";

const projects = [
  {
    title: "Food Truck TrackR",
    images: [
      foodTruckTrackR1,
      foodTruckTrackR2,
      foodTruckTrackR5,
      foodTruckTrackR3,
      foodTruckTrackR4,
    ],
    description:
      "A simple to use web and mobile application that effortlessly connects food truck vendors and hungry customers",
    technologies: [
      "React",
      "Redux",
      "Material UI",
      "Firebase",
      "Sass",
      "Google Maps API",
      "Stripe",
      "Postgres",
      "NodeJS",
      "Knex",
      "Express",
    ],
    purpose:
      "I started this application as part of a team for which this was the assigned project while a student at Lamba School. After completing the necessary MVP requirements as stipulated by course instructors, I decided to continue working on this project to hone my skills even further.",
    details: [
      {
        detail: "a web/mobile application that allows:",
        subdetails: [
          "customers to create an account and from there, place orders from food trucks in their area as well as leave reviews, management favorites, and upload pics",
          "truck operators to create an account from which they can manage customer orders, trucks, menu items and images",
        ],
      },
      {
        detail: "backend end built with Node.js",
        subdetails: ["express", "Postgres database", "Knex query builder"],
      },
      {
        detail: "State management using Redux",
        subdetails: [
          "Redux persist package handles persisting state to local storage",
        ],
      },
      {
        detail: "combination of Material UI and Sass for styling",
      },
      {
        detail: "State management using Redux",
        subdetails: [
          "Redux persist package handles persisting state to local storage",
        ],
      },
      { detail: "client side routing handled by React Router DOM" },
      { detail: "Used Firebase cloud service for storing images" },
      {
        detail:
          "Used the Google Maps API and Google Places API for rendering/requests related to physical location of trucks and users",
      },
      { detail: "All payments handled via Stripe" },
    ],
    github: "https://github.com/jevoncochran/Food-Truck-TrackR",
  },
  {
    title: "ljpeg.com",
    images: [ljpeg1, ljpeg2, ljpeg3, ljpeg4],
    description:
      "Online portfolio to showcase the work of Chicago-based photographer and multimedia creative, La’Tasha Janay Pollard",
    technologies: ["React", "Material UI", "Sass", "EmailJS"],
    purpose:
      "I was hired to build this website from scratch and as the sole developer on this project. This project allowed me to further enhance my skills, especially as it relates to styling (CSS) and design.",
    details: [
      {
        detail:
          "Digital portfolio through which the photographer can showcase her work and facilitate contact with potential clients",
      },
      {
        detail:
          "Email JS handles inquiries between site owner and potential clients",
      },
      {
        detail: "Statement managed through Context API",
      },
      {
        detail: "client side routing handled by React Router DOM",
      },
    ],
    online: "https://tender-mcnulty-be0be2.netlify.app/",
    github: "https://github.com/jevoncochran/ljpeg",
  },
  {
    title: "Dinner and Dessert",
    images: [
      dinnerAndDessert1,
      dinnerAndDessert2,
      dinnerAndDessert3,
      dinnerAndDessert4,
      dinnerAndDessert5,
    ],
    description:
      "Professional website for a family-owned food catering venture based in Detroit, MI",
    technologies: [
      "React",
      "Redux",
      "Material UI",
      "Firebase",
      "Sass",
      "Websocket",
      "PayPal",
      "Postgres",
      "NodeJS",
      "Knex",
      "Express",
      "EmailJS",
    ],
    purpose:
      "I was contracted to work on this project by the owners of this business. I built this project from scratch and was the sole developer. It allowed me to further enhance skills I had developed previously, especially as it relates to back-end development.",
    details: [
      {
        detail: "a website and application through which:",
        subdetails: [
          "Customers can  place and pay for food orders online, send inquiries and leave reviews",
          "Administrators can manage orders, menu items available for online order, customer reviews and images",
        ],
      },
      {
        detail: "backend end built with Node.js",
        subdetails: ["express", "Postgres database", "Knex query builder"],
      },
      {
        detail: "State management using Redux",
        subdetails: [
          "Redux persist package handles persisting state to local storage",
        ],
      },
      { detail: "client side routing handled by React Router DOM" },
      { detail: "Used Firebase cloud service for storing images" },
      { detail: "Email JS package handles inquiry sendoff to administrator" },
      { detail: "All payments handled via PayPal" },
      {
        detail:
          "Websocket API handles synching of orders between customers and administrators",
      },
    ],
    online: "https://thirsty-albattani-9f2210.netlify.app/",
    github: "https://github.com/jevoncochran/Dinner-And-Dessert-Website",
  },
];

projects.forEach((project, i) => {
  project.id = i + 1;
});

export { projects };
