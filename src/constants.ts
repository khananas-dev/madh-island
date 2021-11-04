import moment from "moment";
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

export const DEFAULT_FILTER = {
    
    checkInDate: today,
    checkOutDate: tomorrow,
    serviceType:`FilmLocation`
}

export const DEFAULT_MAP_PROPS = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
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





]