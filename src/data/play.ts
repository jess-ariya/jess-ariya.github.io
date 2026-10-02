// Things made for fun. Paths are relative to src/assets/play/; the first image is the tile.
export interface PlayItem {
  title: string;
  note: string;
  images: { src: string; alt: string; caption?: string }[];
}

const painted = (name: string, alt: string) => [
  { src: `watercolour/${name}.jpg`, alt: `Watercolour painting of ${alt}` },
  { src: `watercolour/${name}-real.jpg`, alt: `Photo of the ${name} it was painted from`, caption: 'what I painted from' },
];

export const play: PlayItem[] = [
  { title: 'Peach', note: 'Painted after the farmers market, trying to mix the exact blush.', images: painted('peach', 'a peach') },
  { title: 'Phone stand', note: '40 hours in the machine shop: lathe, mill, band saw, grinder and drill press.', images: [1, 3, 4, 5, 6, 7, 8, 9].map((n) => ({ src: `phonestand/pstand${n}.JPG`, alt: `Machined metal phone stand, photo ${n}` })) },
  { title: 'Melon', note: 'The second farmers-market painting, and when it became a habit.', images: painted('melon', 'a melon') },
  { title: 'Oranges', note: 'Watercolour.', images: [{ src: 'watercolour/oranges.jpg', alt: 'Watercolour painting of oranges' }] },
  { title: 'Camera case', note: 'Designed and 3D printed for my point-and-shoot, lined with thin foam.', images: [
    { src: '3dprints/camcase/camcase1.png', alt: '3D-printed camera case' },
    { src: '3dprints/camcase/camcase2.png', alt: '3D-printed camera case, open' },
    { src: '3dprints/camcase/camcase_r1.png', alt: 'Render of the camera case', caption: 'render' },
    { src: '3dprints/camcase/camcase_r2.png', alt: 'Second render of the camera case', caption: 'render' },
  ] },
  { title: 'Tomato', note: 'Watercolour.', images: painted('tomato', 'a tomato') },
  { title: 'Banana', note: 'Watercolour.', images: [{ src: 'watercolour/banana.jpg', alt: 'Watercolour painting of a banana' }] },
  { title: 'Sheep', note: 'Watercolour.', images: [{ src: 'watercolour/sheeps.jpg', alt: 'Watercolour painting of sheep' }] },
];
