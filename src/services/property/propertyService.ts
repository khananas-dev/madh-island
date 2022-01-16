import axios from "axios";
import { BASE_URL } from "../../constants/apiConfig";

export class PropertyService {
  async getAllPropertyImage() {
    return axios.get(`${BASE_URL}/propertyImage`);
  }
  async getPropertyDetail() {
    return axios.get(`${BASE_URL}/property`);
  }
  async getLastestLocation() {
    return axios.get(`${BASE_URL}/property/latest`);
  }

  async getPropertyDetailById(payload: any) {
    return axios.get(`${BASE_URL}/property/${payload}`);
  }

  getPropertyByKeyword(payload: any) {
    return axios.get(`${BASE_URL}/property/search?keyword=${payload}`);
  }
}
