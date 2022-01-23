import axios from "axios";
import { BASE_URL } from "../../constants/apiConfig";

export class ContactService {
  contactUs(payLoad: any) {
    return axios.post(`${BASE_URL}/contactDetail`, payLoad);
  }
}
