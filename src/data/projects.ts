// Featured case studies: the islets around the Work island.
export interface Project {
  name: string;
  href: string;
  blurb: string;
  tags: string;
  colour: string;
  /** Islet position in the 820×300 archipelago drawing. */
  at: [number, number];
  /** Preview shown on hover, in src/assets/work/. */
  image: string;
}

export const projects: Project[] = [
  { name: 'Orange Garden', href: '/projects/orangeTree/', blurb: 'A task app that grows fruit as you finish things', tags: 'React · Firebase', colour: '#E8873A', at: [100, 170], image: 'orange-garden.png' },
  { name: 'Pototo', href: '/projects/pototo/', blurb: 'A to-do list for brains that resist starting', tags: 'product research', colour: '#D9B36C', at: [255, 95], image: 'pototo.png' },
  { name: 'SeedBot', href: '/projects/seedbot/', blurb: 'An automated seed-scanning test bench, built with Insporos', tags: 'capstone · automation', colour: '#7E9C57', at: [410, 195], image: 'seedbot.png' },
  { name: 'TraffiBot', href: '/projects/traffibot/', blurb: 'An autonomous ROS robot that drives and reads licence plates', tags: 'ROS · ML', colour: '#9DB3B5', at: [565, 105], image: 'traffibot.png' },
  { name: 'Walnut', href: '/projects/walnut/', blurb: 'Lecture notes that transcribe and translate as you listen', tags: 'product · AI', colour: '#8C6446', at: [720, 180], image: 'walnut.jpg' },
];

// Smaller voyages, linked from Play.
export const sideProjects = [
  { name: 'SolarTab', href: '/projects/solartab/', blurb: 'A solar-powered tablet concept for rural classrooms' },
  { name: 'SolarChapter', href: '/projects/solarchapter/', blurb: 'A solar pump for Tasinifu Village, Indonesia' },
];
