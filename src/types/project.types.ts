export type AllowedSkills = "Illustrator" | "Photoshop" | "InDesign";

export interface CaseProjects {
  id: number;
  slug: string;
  className?: string;
  coverImg?: string;
  title: string;
  img: string;
  year: string;
  type: string;
  featured: boolean;
  company?: {
    name: string;
    logo?: string;
    industry?: string;
    location: string;
    size?: string;
    websiteUrl: string;
    websiteTag?: string;
    skills?: AllowedSkills[];
  };
}