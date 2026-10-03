import { images } from "./images";
import { routes } from "./site";
import type { Picture, WorkCardData } from "./types";

export const caseStudies: WorkCardData[] = [
  {
    href: routes.inboxswipe,
    accent: "blush",
    index: "01 · Case study",
    title: "InboxSwipe",
    description:
      "A gesture-based email app that turns inbox cleaning into a quick, satisfying swipe.",
    tags: ["Mobile", "6 months", "Figma"],
    image: { src: images.inboxswipeCover, alt: "InboxSwipe onboarding and inbox screens" },
  },
  {
    href: routes.selise,
    accent: "sky",
    index: "02 · Case study",
    title: "Selise Legal Templates",
    description:
      "A free, bilingual legal document generator, from blank page to signed contract in minutes.",
    tags: ["Responsive web", "EN · DE", "Figma"],
    image: { src: images.seliseCover, alt: "Selise Legal Templates on desktop and mobile" },
  },
  {
    href: routes.terra,
    accent: "mint",
    index: "03 · Case study",
    title: "Terra",
    description: "An eco habit tracker with clear actions, gentle streaks and visible CO₂ impact.",
    tags: ["Mobile", "4 months", "Figma"],
    image: { src: images.terraCover, alt: "Terra splash and home screens" },
  },
  {
    href: routes.cashbox,
    accent: "butter",
    index: "04 · Case study",
    title: "Cashbox",
    description:
      "A brand-new cash and account tracker for Hishabee, shipped simple first and grown into a connected second version.",
    tags: ["Mobile", "Hishabee", "V1 → V2"],
    image: { src: images.cashboxCover, alt: "Cashbox version 1 and version 2 screens" },
  },
];

export type Exploration = {
  id: string;
  number: string;
  title: string;
  meta: string[];
  description: string;
  link?: { label: string; href: string };
  galleryLabel: string;
  showHint: boolean;
  images: Picture[];
};

export const explorations: Exploration[] = [
  {
    id: "plantera",
    number: "05",
    title: "Plantera E-commerce Website",
    meta: ["Web", "1 week", "Figma"],
    description:
      "A minimalist, high-contrast layout that tells the story through imagery. A bold hero, organised category grids and prominent CTAs streamline the conversion funnel, while an Instagram feed and reviews add social proof.",
    link: {
      label: "View on Dribbble ↗",
      href: "https://dribbble.com/shots/25005746--003-Landing-page",
    },
    galleryLabel: "Plantera screens",
    showHint: false,
    images: [
      { src: images.planteraCover, alt: "Plantera homepage and product sections" },
      { src: images.planteraFullPage, alt: "Full-length Plantera landing page" },
    ],
  },
  {
    id: "absence",
    number: "06",
    title: "Employee Absence Tracker",
    meta: ["Dashboard", "2 weeks", "Figma"],
    description:
      "A data-dense table built for scanning, with colour-coded status chips and dark and light modes. Filtering, search and pagination keep complex datasets low on cognitive load.",
    link: {
      label: "View on Dribbble ↗",
      href: "https://dribbble.com/shots/24958858-Employee-absence-tracker-Dashboard-design-Web-version",
    },
    galleryLabel: "Absence tracker screens",
    showHint: true,
    images: [
      { src: images.absenceCover, alt: "Absence tracker in dark and light mode" },
      { src: images.absence1, alt: "Absence tracker table detail" },
      { src: images.absence2, alt: "Absence tracker alternate view" },
    ],
  },
  {
    id: "flutter",
    number: "07",
    title: "Flutter Boilerplate",
    meta: ["Landing page", "2 weeks", "Figma"],
    description:
      "A scalable landing page for a Flutter starter system that makes onboarding clearer and cuts developer setup friction.",
    link: {
      label: "View on Dribbble ↗",
      href: "https://dribbble.com/shots/24824933-Flutter-Boilerplate",
    },
    galleryLabel: "Flutter Boilerplate screens",
    showHint: true,
    images: [
      { src: images.flutterCover, alt: "Flutter Boilerplate landing hero" },
      { src: images.flutter1, alt: "Flutter Boilerplate features section" },
      { src: images.flutter2, alt: "Flutter Boilerplate pricing section" },
    ],
  },
  {
    id: "todo",
    number: "08",
    title: "To-do List",
    meta: ["Mobile", "1 week", "Figma"],
    description:
      "A minimalist, card-based task manager. Progress rings and gamified achievement screens give visual feedback, and high-contrast CTAs carry users from scheduling to completion.",
    link: {
      label: "View on Dribbble ↗",
      href: "https://dribbble.com/shots/26086839-To-do-list-mobile-app",
    },
    galleryLabel: "To-do list screens",
    showHint: true,
    images: [
      { src: images.todoCover, alt: "To-do app home, achievement and task list screens" },
      { src: images.todo1, alt: "To-do app screens detail" },
      { src: images.todo2, alt: "To-do app flow" },
      { src: images.todo3, alt: "To-do app components" },
    ],
  },
  {
    id: "notes",
    number: "09",
    title: "Simple Note-taking App",
    meta: ["Mobile", "1 week", "UI study"],
    description:
      "A UI study recreating a fellow designer's note-taking app. Colourful cards make notes easy to spot, the editor stays minimal, and a bottom sheet makes sorting into categories quick.",
    link: {
      label: "View on Dribbble ↗",
      href: "https://dribbble.com/shots/26070088-Simple-note-taking-app",
    },
    galleryLabel: "Note-taking app screens",
    showHint: true,
    images: [
      { src: images.notesCover, alt: "Note app home with colourful note cards" },
      { src: images.notes1, alt: "Note app screens" },
      { src: images.notes2, alt: "Note editor" },
      { src: images.notes3, alt: "Category bottom sheet" },
      { src: images.notes4, alt: "Note app overview" },
    ],
  },
];
