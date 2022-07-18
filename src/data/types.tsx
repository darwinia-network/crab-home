export type SupportedLanguages = "enUS" | "zhCN";

export type Page = "HOME" | "ECONOMIC_MODEL" | "GRANTS_PROGRAM";
export type HeroType = 1 | 2;
export type FeatureType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type PCGrid = 1 | 2 | 3 | 4;
export type LinkType = "PRIMARY" | "PLAIN";

export interface Link {
  title: string;
  url: string;
  isExternal: boolean;
  isFake?: boolean;
  isThirdParty?: boolean;
  type?: LinkType;
}

export interface Feature {
  icon: string;
  title?: string;
  text?: string;
  type: FeatureType;
  links?: Link[];
  list?: string[];
}

export interface FeatureWrapper {
  title: string;
  data: Feature[];
  pcGrid?: PCGrid;
  links?: Link[];
}

export interface CrabIntro {
  title: string;
  image: string;
  imageMobile: string;
  content: {
    text: string;
    list: string[];
  };
}

export interface BridgeMessaging {
  title: string;
  image: string;
  text: string;
}

export interface EasyDeploy {
  title: string;
  subTitle: string;
  image: string;
  list: string[];
}

export interface CrabToken {
  image: string;
  title: string;
  text: string;
  link: Link;
  features: Feature[];
}

export interface CompatibilityPromo {
  title: string;
  text: string;
  image: string;
  left: string[];
  right: string[];
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
  image?: JSX.Element;
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
  text?: string;
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

export interface CompanyLogo {
  logo: string;
  link: Link;
}

export interface DeveloperTools {
  title: string;
  logos: CompanyLogo[];
}

export interface Slider {
  top: CompanyLogo[];
  bottom: CompanyLogo[];
}

export interface StakingDiagram {
  title: string;
  text: string;
  image: string;
}

export interface StakingModel {
  feature: Feature;
  basicModel: StakingDiagram;
  advancedModel: StakingDiagram;
}

export interface TokenSupply {
  feature: Feature;
  statisticsData: StatisticsData[];
}

export interface TokenInflation {
  feature: Feature;
  totalSupplyImage: string;
  annualInflationImage: string;
  text: string;
}

export interface RevenueModel {
  feature: Feature;
  networkExpense: Feature;
  networkRevenue: Feature;
}

export interface PurposeAndMission {
  title: string;
  grantsAmount: Feature;
  purpose: Feature;
  mission: Feature;
}

export interface GrantsProgramResource {
  title: string;
  resources: Feature[];
}

export interface WhyApplying {
  title: string;
  reasons: Feature[];
  link: Link;
}

export interface NewsPost {
  label: string;
  text: string;
  link: Link;
}
