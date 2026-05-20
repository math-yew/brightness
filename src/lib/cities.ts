export const CITIES = [
  { city: 'windsor' },
  { city: 'greeley' },
  { city: 'fort-collins' },
  { city: 'loveland' },
];

export const formatCityName = (slug: string) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};