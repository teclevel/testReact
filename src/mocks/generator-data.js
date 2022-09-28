import { nanoid } from "nanoid";
import { getRandomElementArray } from "./utils";

const generateTitle = () => getRandomElementArray([
  'Традиция исполнения якутского традиционного кругового танца "осуохай',
  'Технология изготовления вологодского кружева',
  'Технология плетения и декорирования изделий из бересты. ',
  'Технология изготовления обрядовой и бытовой выпечки',
  'Нивхский праздник П’ИТУЛ (праздник обновления природы)',
  'Технология изготовления глиняной игрушки',
  'Жатвенные обряды северных районов Смоленщины'
]);

const generatePoster = () => getRandomElementArray([
  './images/img/image1.jpg',
  './images/img/image2.jpg',
  './images/img/image3.jpg',
  './images/img/image4.jpg',
]);

const generateLocation = () => getRandomElementArray([
  'Сахалинская область',
  'Вологодская область',
  'Волгоградская область',
  'Смоленская область'
]);

export const generateDataCard = () => ({
  id: nanoid(),
  title: generateTitle(),
  poster: generatePoster(),
  location: generateLocation(),
});