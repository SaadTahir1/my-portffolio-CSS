import { Key } from "react"
import { IconType } from "react-icons"

export interface iService {
    id: Key | null | undefined
    title: string,
    about: string,
    Icon: IconType
};

export interface Skill {
    Icon: IconType
    name: string
    level: string
 };

 export interface IProject {
    name: string;
    description: string;
    image_path: string;
    deployed_url: string;
    github_url: string;
    category: Category[];
    key_techs: string[];
  }
  
  export type Category = "react" | "node" | "express" | "django" | "mongo" | "nextjs";