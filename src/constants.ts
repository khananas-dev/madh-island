import moment from "moment";
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

export const DEFAULT_FILTER = {
    
    checkInDate: today,
    checkOutDate: tomorrow,
    serviceType:`FilmLocation`
}
