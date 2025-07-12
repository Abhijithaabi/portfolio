import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  infosys,
  csharp,
  unity,
  unreal,
  nestJs,
  nu10,
  echofox,
  trailOfEchos,
  vr,
  comicChaos,
  threecca,
  jigsaw,
  memoora,
  bob,
  skew,
  fps,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C#", icon: csharp },
  { title: "Unity", icon: unity },
  { title: "Unreal Engine", icon: unreal },
  { title: "NestJs", icon: nestJs },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Senior Systems Engineer",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#161329",
    date: "Feb 2021 - Dec 2022",
    points: [
      "Led end-to-end delivery of multiple enterprise-grade solutions by collaborating with cross‑functional teams on development, testing, implementation, and post‑launch support..",
      "Provided on‑call support and troubleshooting, achieving a 98% SLA compliance rate and improving customer satisfaction scores.",
      "Authored detailed technical documentation and conducted knowledge‑transfer sessions, ramping up new team members 40% faster."
    ],
  },
  {
    title: "Software/Game Developer",
    company_name: "Nu10 Technologies",
    icon: nu10,
    iconBg: "#161329",
    date: "Jan 2023 - Aug 2024",
    points: [
      "Designed and built multiplayer game features in Unity, integrated with Photon for real‑time networking, resulting in smooth, lag‑free gameplay for up to 50 concurrent users.",
      "Leveraged Firebase (Realtime Database, Authentication, Cloud Functions) to implement cloud‑sync of player data and authentication.",
      "Architected and maintained scalable RESTful APIs using NestJS and PostgreSQL on AWS (EC2, RDS, Lambda), serving financial‑tech clients with 99.9% uptime.",
      "Implemented secure authentication (JWT) and role‑based access control, ensuring compliance with industry security standards."
    ],
  },
  {
    title: "Senior Game Developer",
    company_name: "Echofox Design Labs",
    icon: echofox,
    iconBg: "#161329",
    date: "Oct 2024 - Present",
    points: [
      "Building games for mobile, PC, and VR using Unity and C#, from concept to release.",
      "Collaborate with designers and artists to prototype and develop engaging gameplay features.",
      "Optimize performance across platforms and integrate third-party tools like ads, analytics, and IAPs.",
      "Handle testing, debugging, and deployment for multiple devices, ensuring smooth user experiences."
    ],
  },
];

export const projects = [
  {
    name: "Trails Of Echos - Echofox",
    description:
      "Trails of Echos is a story‑driven endless runner where you ride through procedurally generated ancient temple landscapes, collecting mystical mask fragments to uncover the lost legacy of the celestial‑taught Kalarupas.",
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "c#", color: "green-text-gradient" },
     
    ],
    image: trailOfEchos,
  },
  {
    name: "VR Defender Series - Echofox",
    description:
      "VR Defender Series:  is an immersive VR action-shooter where players become frontier marshals defending towns against waves of outlaws using strategic defenses, sharpshooting skills, and classic western grit.",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "Unity", color: "green-text-gradient" },
      { name: "VR", color: "pink-text-gradient" },
    ],
    image: vr,
    
  },
  {
    name: "Comic Chaos – Nu10 Technologies",
    description:
      "A mobile Match-3 puzzle game set in a vibrant comic book universe, featuring stylized heroes, unique power-ups, animated effects, and smooth gameplay built with Unity.",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "Unity", color: "green-text-gradient" },
      { name: "FireBase", color: "pink-text-gradient" },
    ],
    image: comicChaos,


  },
  {
    name: "Fintech Onboarding System",
    description:
      " At Nu10 Technologies (Client: 3CCA) I Built a scalable client onboarding workflow for a fintech platform using NestJS, TypeORM, PostgreSQL, and AWS. Streamlined user registration, document verification, and approval flows to improve onboarding efficiency and automation.",
    tags: [
      { name: "nestJs", color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "aws", color: "pink-text-gradient" },
    ],
    image: threecca,
    
  },
  {
    name: "Jodo Jigsaw – Nu10 Technologies",
    description:
      "Developed a multiplayer jigsaw puzzle game in Unity, featuring real-time challenges with friends or up to four players in party mode. Players can choose from various puzzle sets or play solo by capturing a photo through the camera, which is dynamically converted into a playable jigsaw puzzle.",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "Unity", color: "green-text-gradient" },
      { name: "Photon", color: "pink-text-gradient" },
    ],
    image: jigsaw,
  },
  {
    name: "Memoora – Nu10 Technologies",
    description:
      "Created a cognitive training game in Unity designed to help ADHD patients improve attention span through engaging gameplay and scientifically-backed mental tasks. Integrated tests like the Stroop Test into interactive mini-games that blend therapy and fun to support focus and cognitive control.",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "Unity", color: "green-text-gradient" },
    ],

    image: memoora,
  },
  {
    name: "Trade Finance Solutions",
    description:
      "At Infosys (Client: Bank of Baroda) Worked on upgrading overseas Finacle systems and developing digital solutions for Letter of Credit (LC) issuance workflows in the Trade Finance domain. Improved process efficiency and compliance by streamlining legacy systems and enhancing user experience.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "xml", color: "green-text-gradient" },
    ],

    image: bob,
    
  },
  {
    name: "Skew – Personal Project",
    description:
      "Designed and developed a hyper-casual mobile game in Unity, where players control a cube that can only turn left and right on alternate taps. Simple yet addictive mechanics challenge players’ timing and spatial awareness in an endless arcade-style run.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: skew,
    source_code_link: "https://github.com/Abhijithaabi/Skew",
  },
  {
    name: "Multiplayer FPS  – Personal Project",
    description:
      "Built a working multiplayer FPS proof of concept in Unity, featuring Deathmatch mode with room creation, matchmaking, and real-time gameplay. Players can host or join rooms with friends and compete in fast-paced shooting matches using Photon for networking.",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "Unity", color: "green-text-gradient" },
      { name: "Photon", color: "pink-text-gradient" },
    ],

    image: fps,
    source_code_link: "https://github.com/Abhijithaabi/FPS_Multiplayer",
  },
];
