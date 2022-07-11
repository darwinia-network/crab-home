export type SupportedLanguages = "enUS" | "zhCN";

export type Page = "HOME" | "DEVELOPERS" | "TOKENS" | "COMMUNITY" | "PAPERS";
export type HeroType = 1 | 2;
export type FeatureType = 1 | 2 | 3 | 4;
export type PCGrid = 2 | 3 | 4;
export type LinkType = "PRIMARY" | "PLAIN";

export interface Link {
  title: string;
  url: string;
  isExternal: boolean;
  isFake?: boolean;
  type?: LinkType;
}

export interface Feature {
  icon: string;
  title?: string;
  text?: string;
  type: FeatureType;
  links?: Link[];
}

export interface FeatureWrapper {
  title: JSX.Element;
  data: Feature[];
  pcGrid: PCGrid;
  links?: Link[];
}

export interface LightClient {
  title: JSX.Element;
  subTitle: string;
  image: string;
  text: string;
}

export interface DarwiniaPromo {
  title: JSX.Element;
  subTitle: string;
  image: string;
  content: {
    text: string;
    list: string[];
  };
  links: Link[];
}

export interface SocialNetwork {
  logo: string;
  iconWidth?: number;
  iconHeight?: number;
  url: string;
}

export interface FooterSection {
  title: string;
  links: Link[];
}

export interface Footer {
  copyright: JSX.Element;
  socialNetworks: SocialNetwork[];
  referenceLinks: FooterSection[];
}

export interface Code {
  title: string;
  sample: string;
  language: string;
}

export interface CodeSample {
  links: Link[];
  codes: Code[];
}

export interface Hero {
  image: JSX.Element;
  // title?: JSX.Element;
  text?: string;
  links?: Link[];
  socialNetworks?: SocialNetwork[];
  type: HeroType;
}

export interface TechSupport {
  title?: JSX.Element;
  text: string;
  link: Link;
}

export interface StatisticsInfo {
  info?: string;
  figure?: string;
}

export interface StatisticsData {
  image: string;
  title?: string;
  data?: StatisticsInfo[];
}

export interface Statistics {
  title?: JSX.Element;
  text?: string;
  subText?: string;
  links?: Link[];
  data?: StatisticsData[];
  statisticsImages?: string[];
}

export interface Menu {
  title: string;
  device?: "MOBILE" | "PC";
  path?: string;
  children?: Menu[];
  isExternalLink?: boolean;
  isComingSoon?: boolean;
}

export interface Paper {
  id: number;
  title: string;
  authors: string[];
  tags: string[];
  summary: string;
  mobileSummary?: string;
  titleUrl: string;
  link: Link;
}
