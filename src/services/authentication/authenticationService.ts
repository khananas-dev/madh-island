import axios from "axios";
import { BASE_URL } from "../../constants/apiConfig";

export class AuthenticationService {
    signUp(payLoad: any) {
        return axios.post(`${BASE_URL}/customers`, payLoad)
    }
    generateOtp(payLoad: any) {
        return axios.post(`${BASE_URL}/admin/generateOtp` , payLoad)
    }
}