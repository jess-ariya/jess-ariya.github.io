// Featured case studies: the islets around the Work island.
export interface Project {
  name: string;
  href: string;
  blurb: string;
  tags: string;
  colour: string;
  /** Islet position in the 820×460 archipelago drawing. */
  at: [number, number];
}

export const projects: Project[] = [
  { name: 'Orange Garden', href: '/projects/orangeTree/', blurb: 'A task app that grows fruit as you finish things', tags: 'React · Firebase', colour: '#E8873A', at: [120, 90] },
  { name: 'Pototo', href: '/projects/pototo/', blurb: 'A to-do list for brains that resist starting', tags: 'product research', colour: '#D9B36C', at: [700, 85] },
  { name: 'SeedBot', href: '/projects/seedbot/', blurb: 'An automated seed-scanning test bench, built with Insporos', tags: 'capstone · automation', colour: '#A9C178', at: [95, 360] },
  { name: 'TraffiBot', href: '/projects/traffibot/', blurb: 'An autonomous ROS robot that drives and reads licence plates', tags: 'ROS · ML', colour: '#9DB3B5', at: [715, 370] },
  { name: 'Walnut', href: '/projects/walnut/', blurb: 'Lecture notes that transcribe and translate as you listen', tags: 'product · AI', colour: '#8C6446', at: [410, 420] },
];

// Smaller voyages, linked from Play.
export const sideProjects = [
  { name: 'SolarTab', href: '/projects/solartab/', blurb: 'A solar-powered tablet concept for rural classrooms' },
  { name: 'SolarChapter', href: '/projects/solarchapter/', blurb: 'A solar pump for Tasinifu Village, Indonesia' },
];
