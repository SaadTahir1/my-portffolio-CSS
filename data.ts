import {RiComputerLine} from "react-icons/ri"
import { IProject, iService, Skill } from "./type";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

export const services: iService[] = [

    {
      Icon: RiComputerLine,
      title: "Front-End Developer",
      about: 'I can build a beautiful and scalable SPA using <b> HTML </b> , <b> CSS </b> and various frameworks.',
      id: undefined
    },

    {
      Icon: FaServer,
      title: "Back-End Developer",
      about: "handle database, server, api using <b> Express </b> and other popular frameworks.",
      id: undefined
    },

    {
      Icon: AiOutlineApi,
      title: "API Development",
      about: "I can develop robust REST API using <b> Django-rest-api </b> & <b> Node API </b> .",
      id: undefined
    },

    {
      Icon: MdDeveloperMode,
      title: "Competitive Coder",
      about: " a daily problem solver in <b>HackerRank </b> and <b> LeetCode </b> ",
      id: undefined
    },

    {
      Icon: AiOutlineAntDesign,
      title: "UI/UX designer",
      about: "stunning user interface designer using <b> Figma </b> and <b> Framer </b> .",
      id: undefined
    },

    {
      Icon: RiComputerLine,
      title: "Trader",
      about: 'I also do trading of Ethereum , SOLANA , BitCoin and other coins.',
      id: undefined
    },
];

export const languages: Skill[] = [
    {
       Icon: BsCircleFill,
       name: 'Python',
       level: '45',
    },
    {
       Icon: BsCircleFill,
       name: 'Java Script',
       level: '60',
    },
    {
       Icon: BsCircleFill,
       name: 'React Native',
       level: '80',
    },
    {
       Icon: BsCircleFill,
       name: 'React',
       level: '70',
    },
    {
       Icon: BsCircleFill,
       name: 'Django',
       level: '80',
    },
    {
       Icon: BsCircleFill,
       name: 'Bootstrap',
       level: '80',
    },
 ]
 
 export const tools: Skill[] = [
    {
       Icon: BsCircleFill,
       name: 'Figma',
       level: '85',
    },
    {
       Icon: BsCircleFill,
       name: 'Photoshop',
       level: '45',
    },
    {
       Icon: BsCircleFill,
       name: 'Illustrator',
       level: '60',
    },
    {
       Icon: BsCircleFill,
       name: 'Framer',
       level: '45',
    },
 ]

 export const projects: IProject[] = [
   { 
     name: "COVID Tracker",
     description:
       "This app shows a statistical view about corona virus over the world",
     image_path: "/images/covid.jpg",
     deployed_url: "!#",
     github_url: "!#",
     category: ["react"],
     key_techs: ["React", "Chart.js", "Material UI"],
   },
   {
     name: "Algorithm Visualizer",
     image_path: "/images/algoVisual.png",
     deployed_url: "!#",
     github_url: "!#",
     category: ["react"],
     description:
       "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
     key_techs: ["React", "firebase", "Framer Motion"],
   },
 
   {
     name: "Dev Talks",
     image_path: "/images/dev.jpg",
     deployed_url: "!#",
     github_url: "!#",
     category: ["node", "mongo", "react"],
     description:
       "Social Media app for developers who can share project,create posts,etc...",
     key_techs: [
       "React",
       "Redux",
       "Node",
       "Express",
       "Mongo",
       "REST API",
       "Bootstrap",
     ],
   },
 
   {
     name: "Realtime Chat App",
     image_path: "/images/chatapp.jpg",
     deployed_url: "!#",
     github_url: "!#",
     category: ["node", "react"],
     description:
       "Basic Realtime Chat App where one can create a room can talk to each other",
     key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
   },
 
   {
     name: "Tweeter Clone",
     image_path: "/images/tweetme.jpg",
     deployed_url: "!#",
     github_url: "!#",
     category: ["django", "react"],
     description:
       "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
     key_techs: ["React", "Django", "Django REST API"],
   },
 
   {
     name: "Color Classification using tf.js",
     image_path: "/images/color.jpg",
     deployed_url: "!#",
     github_url: "!#",
     category: ["express"],
     description:
       "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
     key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
   },
   {
     name: "YouTube using YouTube ",
     image_path: "/images/youtubeClone.png",
     deployed_url: "!#",
     github_url: "!#",
     category: ["express"],
     description:
       'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
     key_techs: [
       "React",
       "Redux",
       "Firebase Auth",
       "YouTube API",
       "Sass",
       "Bootstrap",
     ],
   },
   {
     name: "Football App",
     image_path: "/images/football.png",
     deployed_url: "!#",
     github_url: "!#",
     category: ["react"],
     description:
       "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
     key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
   },
 ];