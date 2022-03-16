import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { IProject, IServices, ISkill } from "./type";

export const services: IServices[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    description:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    description:
      "handle database, server, api using <b>Node </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    description: "I can develop robust  REST API using <b>axios</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    description: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    description:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "35",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "30",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Google Keep Clone",
    description: "This app is a google keep",
    image_path: "/projects/Google-keep.png",
    deployed_url: "https://goggle-keep.vercel.app/",
    github_url: "https://github.com/tsr-kairi",
    category: ["react"],
    key_techs: ["React", "Material UI"],
  },
  {
    id: 2,
    name: "Student Mark Tracker",
    image_path: "/projects/Student-mark-tracker.png",
    deployed_url: "https://visual-algorithm.web.app/",
    github_url: "https://github.com/tsr-kairi",
    category: ["html/css"],
    description:
      "An web app which shows how an individual student's marks are distributed across the subjects",
    key_techs: ["React", "Tailwind CSS"],
  },

  {
    id: 3,
    name: "Todo App",
    image_path: "/projects/Todo-list.png",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/tsr-kairi",
    category: ["html/css", "mongo"],
    description:
      "A simple todo app which allows you to add, delete and edit your todo list",
    key_techs: ["React", "Material UI"],
  },

  {
    id: 4,
    name: "Animated Navigation Bar",
    image_path: "/projects/Animated-navigation.png",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/tsr-kairi",
    category: ["mongo"],
    description: "An animated navigation bar is that animates in and out",
    key_techs: ["React", "Tailwind CSS"],
  },

  {
    id: 5,
    name: "Local Storage",
    image_path: "/projects/Local-storage.png",
    deployed_url: "",
    github_url: "https://github.com/tsr-kairi",
    category: ["next"],
    description:
      "A simple local storage app is an app which stores data in local storage",
    key_techs: ["React", "Tailwind CSS"],
  },
  {
    id: 6,
    name: "Local Storage",
    image_path: "/projects/Local-storage.png",
    deployed_url: "",
    github_url: "https://github.com/tsr-kairi",
    category: ["html/css"],
    description:
      "A simple local storage app is an app which stores data in local storage",
    key_techs: ["React", "Tailwind CSS"],
  },
  {
    id: 7,
    name: "Local Storage",
    image_path: "/projects/Local-storage.png",
    deployed_url: "",
    github_url: "https://github.com/tsr-kairi",
    category: ["react"],
    description:
      "A simple local storage app is an app which stores data in local storage",
    key_techs: ["React", "Tailwind CSS"],
  },
  {
    id: 8,
    name: "Local Storage",
    image_path: "/projects/Local-storage.png",
    deployed_url: "",
    github_url: "https://github.com/tsr-kairi",
    category: ["next"],
    description:
      "A simple local storage app is an app which stores data in local storage",
    key_techs: ["React", "Tailwind CSS"],
  },
  {
    id: 9,
    name: "Local Storage",
    image_path: "/projects/Local-storage.png",
    deployed_url: "",
    github_url: "https://github.com/tsr-kairi",
    category: ["react"],
    description:
      "A simple local storage app is an app which stores data in local storage",
    key_techs: ["React", "Tailwind CSS"],
  },
  {
    id: 10,
    name: "Local Storage",
    image_path: "/projects/Local-storage.png",
    deployed_url: "",
    github_url: "https://github.com/tsr-kairi",
    category: ["mongo"],
    description:
      "A simple local storage app is an app which stores data in local storage",
    key_techs: ["React", "Tailwind CSS"],
  },
];
