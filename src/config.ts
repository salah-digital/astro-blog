import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://salah-digital.com/",
  author: "المستشار صلاح حسن إبراهيم",
  desc: "منصة استراتيجية مستقلة لتقديم الاستشارات المهنية، التطوير الرقمي، وبناء منظومات السيادة الرقمية للمؤسسات.",
  title: "مكتب المستشار صلاح حسن للاستشارات والتطوير الرقمي",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "ar",
  langTag: ["ar-IQ"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "GitHub",
    href: "https://github.com/salah-digital/astro-blog",
    linkTitle: ` ${SITE.title} on GitHub`,
    active: false,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
];
