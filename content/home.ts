import { images } from "./images";
import { routes } from "./site";
import type { Picture, WorkCardData } from "./types";

export const stats = [
  { term: "Screens designed", value: "50+", label: "High-fidelity fintech screens" },
  { term: "Product modules", value: "10+", label: "Core product modules shipped" },
  { term: "Product lines", value: "4", label: "Product lines sharing my UI standards" },
  {
    term: "Built from scratch",
    value: "0→1",
    label: "Prime Neo-pay and Cashbox, from first sketch",
  },
];

export const services: { emphasis?: string; rest: string }[] = [
  { emphasis: "Mobile", rest: " App Design" },
  { rest: "Web App Design" },
  { emphasis: "Dashboard", rest: " Design" },
  { rest: "Illustration & Art" },
];

export const featuredWork: WorkCardData[] = [
  {
    href: routes.cashbox,
    accent: "butter",
    index: "01 · Mobile app · Hishabee",
    title: "Cashbox",
    description:
      "A brand-new cash and account tracker for small business owners, shipped simple first and grown into a connected second version.",
    tags: ["Mobile", "Product design", "V1 → V2"],
    image: {
      src: images.cashboxCover,
      alt: "Cashbox version 1 transaction list beside the version 2 accounts overview",
    },
  },
  {
    href: routes.selise,
    accent: "sky",
    index: "02 · Responsive web · SELISE",
    title: "Selise Legal Templates",
    description:
      "A free, bilingual legal document generator that takes people from a blank page to a signed contract in minutes.",
    tags: ["Web", "AI-assisted UX", "EN · DE"],
    image: {
      src: images.seliseCover,
      alt: "Selise Legal Templates homepage on desktop and mobile",
    },
  },
  {
    href: routes.inboxswipe,
    accent: "blush",
    index: "03 · Mobile app · Live on iOS & Android",
    title: "InboxSwipe",
    description:
      "A gesture-based email app that turns inbox cleaning into a quick, satisfying swipe, one card at a time.",
    tags: ["Mobile", "Interaction design", "6 months"],
    image: {
      src: images.inboxswipeCover,
      alt: "InboxSwipe onboarding and inbox screens on a pink gradient",
    },
  },
];

export const moreExplorations: {
  href: string;
  title: string;
  meta: string;
  image: Picture;
}[] = [
  {
    href: `${routes.work}#plantera`,
    title: "Plantera",
    meta: "E-commerce web",
    image: {
      src: images.planteraCover,
      alt: "Plantera e-commerce website screens",
    },
  },
  {
    href: `${routes.work}#flutter`,
    title: "Flutter Boilerplate",
    meta: "Landing page",
    image: {
      src: images.flutterCover,
      alt: "Flutter Boilerplate landing page hero",
    },
  },
  {
    href: `${routes.work}#todo`,
    title: "To-do List",
    meta: "Mobile app",
    image: {
      src: images.todoCover,
      alt: "To-do list app screens with progress ring and achievement screen",
    },
  },
];

export const experience = [
  {
    date: "Jul 2025 – Apr 2026",
    role: "Associate UI/UX Designer",
    company: "Hishabee Technologies",
    points: [
      "Designed 50+ high-fidelity screens across 8+ fintech modules, structuring complex workflows into clear, scalable UI.",
      "Built and improved 10+ core product modules across mobile, web and internal tools using reusable components.",
      "Established UI patterns and component standards across Dokan, Paikari, Global Landing and the Internal Dashboard.",
      "Delivered production-ready assets, specs and edge-case states, reducing implementation gaps.",
      "Led 0→1 design for Prime Neo-pay, defining its visual language, components and interaction patterns.",
    ],
  },
  {
    date: "2021 – 2022",
    role: "Junior Graphic Designer",
    company: "Eicra Soft Ltd.",
    points: [
      "Designed icons, infographics and visual assets with strong typography, colour systems and layout principles.",
      "Delivered end-to-end design work under tight deadlines alongside developers and content teams.",
    ],
  },
];

export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I design intuitive UI and seamless UX for web and mobile apps, including dashboards, onboarding flows and subscription experiences. I also create custom icons, infographics and interactive prototypes that lift user engagement and brand impact.",
  },
  {
    question: "How do I start a project with you?",
    answer:
      "Email me at contact.sadiamahmud@gmail.com with a little about your project. Together, we'll turn your vision into a user-friendly, visually compelling design.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope and complexity. Small projects, like a single screen or flow, usually take 1–2 weeks. Larger ones, like full apps, dashboards or multiple flows, can take 3–6 weeks.",
  },
  {
    question: "Can you work within my budget?",
    answer:
      "Absolutely. Every project has constraints. I'm happy to discuss your budget upfront and find a solution that delivers high-quality design within your limits.",
  },
];
