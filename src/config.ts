import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://salah-digital.com/",
  author: "المستشار صلاح حسن إبراهيم",
  desc: "المنصة الاستراتيجية المعتمدة لتقديم استشارات السيادة الرقمية، هندسة السمعة المؤسسية، وبناء منظومات الحصن الرقمي في العراق والشرق الأوسط.",
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
    active: false,
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
    href: "mailto:consultant.salahhasan@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
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

// البيانات السيادية المحدثة للمستشار صلاح حسن إبراهيم (التوطين والسيادة: بغداد، العراق)
export const CONSULTANT_PROFILE = {
  identity: {
    name: "المستشار صلاح حسن إبراهيم",
    primaryRole: "خبير السيادة الرقمية وإدارة السمعة المؤسسية",
    managementTitle: "مدير مكتب المستشار صلاح حسن للاستشارات والتطوير الرقمي",
  },
  contact: {
    phone: "+96477067556772",
    whatsapp: "https://wa.me/96477067556772",
    email: "consultant.salahhasan@gmail.com",
    location: "بغداد، جمهورية العراق",
  },
  globalAuthority: {
    googleMapsRank: "مرشد محلي من الدرجة العاشرة (Level 10 Local Guide) في خرائط جوجل",
    presidency: "رئيس matrix الشرق الأوسط للتنمية والحريات الإعلامية (MECDEF)",
  },
  journalismAndMedia: {
    platform: "موقع الجزيرة نت",
    status: "كاتب وصحفي في موقع الجزيرة نت",
    authorProfileUrl: "https://www.aljazeera.net/author/%D8%B5%D9%84%D8%A7%D8%AD-%D8%AD%D8%B3%D9%86-%D8%A5%D8%A8%D8%B1%D8%A7%D9%87%D9%85",
  },
  operationalAxes: [
    "إدارة وتطوير الشراكات الاستراتيجية الكبرى",
    "تحقيق السيادة الرقمية وإدارة السمعة المؤسسية وتطهير الفضاء الرقمي",
    "تطوير وتحديث عمل المؤسسات وتواجدها الرقمي السيادي لإنهاء النزيف التقني",
    "توطين الأصول البرمجية بنسبة 100% تحت سلطة الإدارة العليا"
  ]
};
