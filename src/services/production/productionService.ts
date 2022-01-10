import axios from "axios";
import { BASE_URL } from "../../constants/apiConfig";

export class ProductionService {
  getProductionType() {
    return axios.get(`${BASE_URL}/productionType`);
  }
}
