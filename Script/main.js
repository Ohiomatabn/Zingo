import { resturants } from "./featured_resturant.js";
import { foods } from './popular_foods.js';
import { howItWorks } from './how_it_works.js';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.querySelector('.year').innerHTML = currentYear;