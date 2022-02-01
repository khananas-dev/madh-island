import axios from "axios";
import { BASE_URL } from "../../constants/apiConfig";
import { xAccessToken } from "../../utils/getAccessToken";

export class BookingService {
  // booking(payload: any) {
  //   if (xAccessToken) {
  //     axios.defaults.headers.common["x-access-token"] = xAccessToken();
  //   }
  //   return axios.post(`${BASE_URL}/booking`, payload);
  // }
  booking = async (payLoad: any) => {
    if (xAccessToken) {
      axios.defaults.headers.common["x-access-token"] = xAccessToken();
    }
    const resType = await axios.post(`${BASE_URL}/booking`, payLoad);
    console.log(resType);
    return resType;
  };
  reservedDate(payload: any) {
    return axios.get(`${BASE_URL}/booking/reservationDates/${payload}`);
  }
  bookingAuthorize(payload: any) {
    if (xAccessToken) {
      axios.defaults.headers.common["x-access-token"] = xAccessToken();
    }
    return axios.post(`${BASE_URL}/booking/authorize`, payload);
  }
}
