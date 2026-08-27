export type Photograph = {
  src: string;
  title: string;
  location: string;
  year: string;
  width: number;
  height: number;
  alt: string;
};

/**
 * Add optimized images to /public/photography, then add one object here.
 * Width and height should match the exported file's pixel dimensions.
 */
export const photographs: Photograph[] = [
  {
    src: '/photography/niagara-overlook.jpg',
    title: 'Edge of the Weather',
    location: 'Niagara Falls, New York',
    year: '2026',
    width: 2667,
    height: 4000,
    alt: 'Portrait beside the Niagara River beneath a dramatic cloud-filled sky',
  },
  {
    src: '/photography/one-way-after-dark.jpg',
    title: 'One Way',
    location: 'New York City',
    year: '2026',
    width: 4000,
    height: 2667,
    alt: 'One Way street sign illuminated against the colorful lights of Times Square',
  },
  {
    src: '/photography/liberty-at-dusk.jpg',
    title: 'Liberty, Under Weather',
    location: 'New York Harbor',
    year: '2026',
    width: 2667,
    height: 4000,
    alt: 'The Statue of Liberty photographed from below against a warm overcast sky',
  },
  {
    src: '/photography/silver-flight.jpg',
    title: 'Silver Flight',
    location: 'New York City',
    year: '2026',
    width: 2667,
    height: 4000,
    alt: 'A small silver bird ornament rising from a dark architectural detail',
  },
  {
    src: '/photography/campus-crossing.jpg',
    title: 'Between Classes',
    location: 'Athens, Georgia',
    year: '2025',
    width: 640,
    height: 526,
    alt: 'Students walking along a tree-lined University of Georgia campus path',
  },
  {
    src: '/photography/painted-turtle.jpg',
    title: 'Still Water',
    location: 'Athens, Georgia',
    year: '2025',
    width: 427,
    height: 640,
    alt: 'A painted turtle resting on a curved concrete edge above a pond',
  },
  {
    src: '/photography/athens-transit.jpg',
    title: 'Next Stop',
    location: 'Athens, Georgia',
    year: '2025',
    width: 526,
    height: 640,
    alt: 'A student boarding a University of Georgia bus at a shaded campus stop',
  },
];
