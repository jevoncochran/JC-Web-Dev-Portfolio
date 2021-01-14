import foodTruckTrackR1 from "../../assets/projects/foodTruckTrackR/food-truck-trackr-screenshot.png";
import foodTruckTrackR2 from "../../assets/projects/foodTruckTrackR/foodTruckTrackR2.png";
import foodTruckTrackR3 from "../../assets/projects/foodTruckTrackR/foodTruckTrackR3.png";
import foodTruckTrackR4 from "../../assets/projects/foodTruckTrackR/foodTruckTrackR4.png";
import foodTruckTrackR5 from "../../assets/projects/foodTruckTrackR/foodTruckTrackR5.png";
import foodTruckTrackR6 from "../../assets/projects/foodTruckTrackR/foodTruckTrackR6.png";

import dinnerAndDessert1 from "../../assets/projects/dinnerAndDessert/dinnerAndDessert1.png";
import dinnerAndDessert2 from "../../assets/projects/dinnerAndDessert/dinnerAndDessert2.png";
import dinnerAndDessert3 from "../../assets/projects/dinnerAndDessert/dinnerAndDessert3.png";
import dinnerAndDessert4 from "../../assets/projects/dinnerAndDessert/dinnerAndDessert4.png";
import dinnerAndDessert5 from "../../assets/projects/dinnerAndDessert/dinnerAndDessert5.png";

import ljpeg1 from "../../assets/projects/ljpeg/ljpeg.png";
import ljpeg2 from "../../assets/projects/ljpeg/ljpeg2.png";
import ljpeg3 from "../../assets/projects/ljpeg/ljpeg3.png";
import ljpeg4 from "../../assets/projects/ljpeg/ljpeg4.png";

import knowledgeablePestControl1 from "../../assets/projects/KnowledgeablePestControl/knowledgeablePestControl1.png";
import knowledgeablePestControl2 from "../../assets/projects/KnowledgeablePestControl/knowledgeablePestControl2.png";
import knowledgeablePestControl3 from "../../assets/projects/KnowledgeablePestControl/knowledgeablePestControl3.png";
import knowledgeablePestControl4 from "../../assets/projects/KnowledgeablePestControl/knowledgeablePestControl4.png";

import ftc1 from "../../assets/projects/FTC/ftc1.png";
import ftc2 from "../../assets/projects/FTC/ftc2.png";
import ftc3 from "../../assets/projects/FTC/ftc3.png";

const projects = [
  {
    title: "Food Truck TrackR",
    images: [
      foodTruckTrackR1,
      foodTruckTrackR6,
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
    online: "https://amazing-murdock-b254c2.netlify.app",
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
  {
    title: "Knowledgeable Pest Control",
    images: [
      knowledgeablePestControl1,
      knowledgeablePestControl4,
      knowledgeablePestControl2,
      knowledgeablePestControl3,
    ],
    description:
      "Professional website for locally-owned pest control business based in Detroit, MI",
    technologies: ["React", "Material UI", "Sass", "EmailJS"],
    purpose:
      "I was hired to build this site from scratch and worked as the sole developer on this project. This project allowed me to further enhance my skills, especially as it relates to styling (CSS) and design. I partnered with a freelance graphic designer to create the company logo. The site design is exclusively mine. ",
    details: [],
    online: "https://wizardly-jang-397c4e.netlify.app/",
    github: "https://github.com/jevoncochran/pest-control",
  },
  {
    title: "For The Culture Clothing",
    images: [ftc1, ftc2, ftc3],
    description:
      "E-commerce website/collaborative platform for locally-owned Washington D.C.-based clothing line",
    technologies: [
      "React",
      "Redux",
      "Sass",
      "EmailJS",
      "Shopify",
      "Cloud Firestore",
    ],
    purpose:
      "I was contracted to work on this project by the owner of the business. Originally, there was another developer working on this site. However, the owner needed a developer with a more keen eye for design. The initial developer had built the site on Wordpress. I was able to revamp this site, ditching the Wordpress format to instead build a React app from scratch in order to more freely satisfy the needs of this client.",
    details: [
      {
        detail: "E-commerce platform powered by Shopify through which",
        subdetails: [
          "customers can place and pay for orders",
          "owner can process orders and manage Shopify store",
        ],
      },
      {
        detail:
          "Platform for other clothing line entrepreneurs to sell their products through the site",
        subdetails: [
          "Collaborators to send inquiries to business owner",
          "Collaborators can also process orders and manage their branch of the Shopify store",
        ],
      },
      {
        detail:
          "Customers and potential customers can subscribe up for newsletter",
      },
    ],
    online: "",
    github: "https://github.com/jevoncochran/FTC-Clothing",
  },
];

projects.forEach((project, i) => {
  project.id = i + 1;
});

export { projects };
