import { IconType } from "react-icons";

export interface IServices {
  title: string;
  description: string;
  Icon: IconType;
}

export interface ISkill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "html/css" | "react" | "next" | "mongo";
