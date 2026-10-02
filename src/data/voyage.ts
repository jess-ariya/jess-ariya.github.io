// The stops on the river nav, in voyage order. `id` matches a section id on the home page.
export const stops = [
  { id: 'hello', label: 'hello', colour: '#E9C9A9' },
  { id: 'about', label: 'about', colour: '#9DB3B5' },
  { id: 'work', label: 'work', colour: '#A9C178', big: true },
  { id: 'play', label: 'play', colour: '#E8873A' },
] as const;

export type Stop = (typeof stops)[number];
