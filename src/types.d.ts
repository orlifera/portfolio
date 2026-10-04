import { JSX } from "react";

export type HeroType = {
  title: string;
  subtitle: string;
  src: string;
  alt: string;
  button1?: {
    text: string;
    link: string;
  };
  button2?: {
    text: string;
    link: string;
  };
  icon: { key: boolean; link: string };
  socials: boolean;
  classname?: string;
};

export type AboutCardType = {
  icon: JSX.Element;
  title: string;
  description: string;
  tags: string[];
};

export type ProjectCardType = {
  image: string[];
  title: string;
  description: string;
  tags: string[];
  githubLink?: string;
  demoLink?: string;
  wip: boolean;
};

export type SkillPillType = {
  node?: JSX.Element | null;
  title: string;
  text?: string;
};

export type experienceType = {
  year: string;
  position: string;
  company: string;
  description: string;
  image?: string;
  /** The image is a logo: show all of it instead of cropping to fill. */
  logo?: boolean;
  tags: string[];
};

export type OfferCardType = {
  title: string;
  description: string;
  features: string[];
  spotlightColor?: string;
  price?: string;
};
