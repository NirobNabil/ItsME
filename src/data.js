import React from "react";
import landing1 from "./assets/landing2.png";
import landing2 from "./assets/landing1.jpg";
import landing3 from "./assets/landing3.jpg";
import project1 from "./assets/project2.jpg";
import stylevars from "./stylevars";
import projectSpecialSS from "./assets/projectspecailss.JPG";

const projects = {
  "Electronics Based Startup": {
    url: "Electronics_Based_Startup1",
    name: "Electronics Based Startup",
    nameHTML: ["Electronics Based", <br />, "Startup1"], //this name represents a jsx object
    img: project1,
    specialText:
      "The menu highlights different types of shows to allow a direct access to dedicated content.",
    specialImg: landing3,
    specialSS: projectSpecialSS
  },
  "Electronics Based Startup2": {
    url: "Electronics_Based_Startup2",
    name: "Electronics Based Startup",
    name: ["Electronics Based", <br />, "Startup2"], //this name represents a jsx object
    img: landing2,
    specialText:
      "The menu highlights different types of shows to allow a direct access to dedicated content.",
    specialImg: landing3
  },
  "Electronics Based Startup3": {
    url: "Electronics_Based_Startup3",
    name: "Electronics Based Startup",
    name: ["Electronics Based", <br />, "Startup3"], //this name represents a jsx object
    img: landing1,
    specialText:
      "The menu highlights different types of shows to allow a direct access to dedicated content.",
    specialImg: landing3
  },
  "Electronics Based Startup4": {
    url: "Electronics_Based_Startup4",
    name: "Electronics Based Startup",
    name: ["Electronics Based", <br />, "Startup4"], //this name represents a jsx object
    img: landing2,
    specialText:
      "The menu highlights different types of shows to allow a direct access to dedicated content.",
    specialImg: landing3
  },
  "Electronics Based Startup5": {
    url: "Electronics_Based_Startup5",
    name: "Electronics Based Startup",
    name: ["Electronics Based", <br />, "Startup5"], //this name represents a jsx object
    img: landing1,
    specialText:
      "The menu highlights different types of shows to allow a direct access to dedicated content.",
    specialImg: landing3
  }
};

export { projects };
