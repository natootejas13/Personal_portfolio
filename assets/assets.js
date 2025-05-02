import user_image from "./user-image.png";
import code_icon from "./code_light.png";
import code_icon_dark from "./code_dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import jira from "./jira.png";
import virtualbox from "./virtualbox.png";
import excel from "./excel.png";
import git from "./git.png";
import burpsuite from "./burp_suite.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo-light.png";
import logo_dark from "./logo-dark.png";
import mail_icon from "./gmail.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import tools_icon_light from "./tools_light.png";
import tools_icon_dark from "./tools_dark.png";
import framework_icon_light from "./framework_light.png";
import framework_icon_dark from "./framework_dark.png";
import apt_icon from "./skills-icon.png";
import cam_icon from "./camera-icon.png";
import ig_icon from "./instagram.png";
import lnkdn_icon from "./linkedin.png";
import github_icon from"./github.png";
import right_arrow_dark from'./right-arrow-black.png';


const assets = {
  right_arrow_dark,
  github_icon,
  ig_icon,
  lnkdn_icon,
  tools_icon_light,
  tools_icon_dark,
  framework_icon_light,
  framework_icon_dark,
  user_image,
  cam_icon,
  apt_icon,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  jira,
  virtualbox,
  git,
  burpsuite,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  excel,
  
};

export default assets;

export const workData = [
  {
    title: "Frontend project",
    description: "Personal Blog",
    bgImage: "/images/work-1.png",
    link:"https://github.com/natootejas13/Personal-Blog",
  },
  {
    title: "Dating Website",
    description: "UI/UX Design",
    bgImage: "/images/work-2.png",
    link:"/blank",
  },
  {
    title: "Shopping Website",
    description: "E-Commerce Site",
    bgImage: "/images/work-3.png",
    link:"/blank",
  },
  {
    title: "Booking Website",
    description: "Ticket Booking",
    bgImage: "/images/work-4.png",
    link:"/blank",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.apt_icon,
    title: "Aptitude Coaching",
    description:
      "Competetive exams always contain questions to test your problem solving...",
    link: "",
  },
  {
    icon: assets.cam_icon,
    title: "Photoshoot",
    description: "Pre-Wedding, Matrimonial profile, Pets, Wedding, product...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Rooting",
    description:
      "Very old android phones stop getting OEM updates after a point...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript, Python, TypeScript",
  },
  {
    icon: assets.framework_icon_light,
    iconDark: assets.framework_icon_dark,
    title: "Libraries",
    description: "React Js, Next Js, React Native",
  },
  {
    icon: assets.tools_icon_light,
    iconDark: assets.tools_icon_dark,
    title: "Platforms",
    description: "Dynatrace, Splunk, Quantummetrics,Github",
  },
  //{ icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'M.E in Electronics and Telecommunications Engineering' },
  //{ icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
  assets.vscode,
  assets.jira,
  assets.burpsuite,
  assets.virtualbox,
  assets.git,
  assets.excel,
];

export const footerIcons = [
  {
    icon: assets.ig_icon,
    link: "https://www.instagram.com/the_grizzly_wolf/?hl=en",
  },
  { icon: assets.mail_icon, link: "mailto:natootejas1998@gmail.com" },
  {
    icon: assets.lnkdn_icon,
    link: "https://www.linkedin.com/in/tejas-n-383b64148/",
  },
  {icon:assets.github_icon,
    link:"https://github.com/natootejas13",
  },
];
