import axios from "axios";
import { BASE_URL } from "../../constants/apiConfig";

export class Booking {
  booking(payload: any) {
    return axios.post(`${BASE_URL}/booking`, payload);
  }
  reservedDate(payload: any) {
    return axios.get(`${BASE_URL}/booking/reservationDates/${payload}`);
  }
}
