import { Language, LocationOn, Info } from '@material-ui/icons';

const ROUTES = ['world', 'countries', 'about'];
const ICONS = { world: Language, countries: LocationOn, about: Info };
const FILTERS = [
  { name: 'Confirmed', value: 'confirmed' },
  { name: 'Recovered', value: 'recovered' },
  { name: 'Deaths', value: 'deaths' },
];

export { ROUTES, ICONS, FILTERS };
