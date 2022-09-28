import { generateDataCard } from "./generator-data";


const NUMBER_CARDS = 12;
export const cards = Array.from({ length: NUMBER_CARDS }, generateDataCard);