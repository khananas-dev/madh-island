import axios from "axios";
import { BASE_URL } from "../../constants/apiConfig";
import { xAccessToken } from "../../utils/getAccessToken";

export class BookingService {
  booking(payload: any) {
    if (xAccessToken) {
      axios.defaults.headers.common["x-access-token"] = xAccessToken();
    }
    return axios.post(`${BASE_URL}/booking`, payload);
  }
  reservedDate(payload: any) {
    return axios.get(`${BASE_URL}/booking/reservationDates/${payload}`);
  }
}
