import axios from "axios";
import { BASE_URL } from "../../constants/apiConfig";

export class OrgInfoService{
    getOrgInfo(){
        return axios.get(`${BASE_URL}/orgInfo`)
    }
   
}

  