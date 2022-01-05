import moment from "moment";
import { PropertyCardFactory } from "../@types";
// const today = new Date();
// const tomorrow = new Date(today);
// tomorrow.setDate(tomorrow.getDate() + 1);
const today = moment();
const tomorrow = moment().add(1, "day");
// tomorrow.setDate(tomorrow.getDate() + 1);

export const DEFAULT_FILTER = {
  checkInDate: today,
  checkOutDate: tomorrow,
  serviceType: `FilmLocation`,
};

export const DEFAULT_MAP_PROPS = {
  center: {
    lat: 19.148360204126508,
    lng: 72.78976224016589,
  },
  zoom: 15,
};
export const PRODUCTION_HOUSE_TYPES_LIST = [
  "Action Film",
  "Album Song",
  "Commercial Advertisement",
  "Digital Advertisement",
  "Drama Act",
  "Feature Film",
  "Horror Film",
  "Music Vidio",
  "Photoshoot",
  "Production Advertisement",
  "Regional Music",
  "Romantic Film",
  "Short Film",
  "TV Serial",
  "Web Series",
  "Youtube",
];
export const TOP_PROPERTIES: PropertyCardFactory[] = [
  {
    id: `1`,
    img: `https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80`,
    propertyName: `Ravi Bunglows`,
    serviceType: `Film Location`,
    area: `211`,
    amminityList: [
      { id: `1`, name: `Gym` },
      { id: `2`, name: `Fire` },
      { id: `3`, name: `Pool` },
    ],
    buttonsList: [
      {
        name: `View Details`,
        variant: `outlined`,
      },
    ],
  },
  {
    id: `2`,
    img: `https://images.unsplash.com/photo-1430285561322-7808604715df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80`,
    propertyName: `Shyam Nivas`,
    serviceType: `Film Location`,
    area: `400`,
    amminityList: [
      { id: `1`, name: `Gym` },
      { id: `2`, name: `Fire` },
      { id: `3`, name: `Pool` },
    ],
    buttonsList: [
      {
        name: `View Details`,
        variant: `outlined`,
      },
    ],
  },
  {
    id: `3`,
    img: `https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80`,
    propertyName: `Jacobs`,
    serviceType: `Film Location`,
    area: `440`,
    amminityList: [
      { id: `1`, name: `Gym` },
      { id: `2`, name: `Fire` },
      { id: `3`, name: `Pool` },
    ],
    buttonsList: [
      {
        name: `View Details`,
        variant: `outlined`,
      },
    ],
  },
];
