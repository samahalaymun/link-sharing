import {
  AiFillCodepenCircle,
  AiFillGithub,
  AiFillGitlab,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io5";
import { SiCodewars, SiFreecodecamp, SiHashnode } from "react-icons/si";
import { BsStackOverflow } from "react-icons/bs";

export const platformItems = [
  {
    value: "github",
    icon: AiFillGithub,
    background: "#1A1A1A",
  },
  {
    value: "linkedin",
    icon: AiFillLinkedin,
    background: "#2D68FF",
  },
  {
    value: "facebook",
    icon: IoLogoFacebook,
    background: "#2442AC",
  },
  {
    value: "youtube",
    icon: AiFillYoutube,
    background: "#EE3939",
  },
  {
    value: "twitter",
    icon: AiFillTwitterSquare,
    background: "#43B7E9",
  },
  {
    value: "codewars",
    icon: SiCodewars,
    background: "#43B7E9",
  },
  {
    value: "codepen",
    icon: AiFillCodepenCircle,
    background: "#1e1f26",
  },
  {
    value: "freecodecamp",
    icon: SiFreecodecamp,
    background: "#302267",
  },
  {
    value: "gitlab",
    icon: AiFillGitlab,
    background: "#EB4925",
  },
  {
    value: "hashnode",
    icon: SiHashnode,
    background: "#0330D1",
  },
  {
    value: "stackoverflow",
    icon: BsStackOverflow,
    background: "#EC7100",
  },
];
export const platFormIcons = {
  github: AiFillGithub,
  facebook: IoLogoFacebook,
  youtube: AiFillYoutube,
  twitter: AiFillTwitterSquare,
  codewars: SiCodewars,
  codepen: AiFillCodepenCircle,
  freecodecamp: SiFreecodecamp,
  gitlab: AiFillGitlab,
  hashnode: SiHashnode,
  stackoverflow: BsStackOverflow,
  linkedin: AiFillLinkedin,
};
;
