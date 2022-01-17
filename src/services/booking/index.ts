import axios from "axios";
import { BASE_URL } from "../../constants/apiConfig";

export class Booking {
  reservedDate(payload: any) {
    return axios.get(`${BASE_URL}/booking/reservationDates/${payload}`);
  }
}
