import axios from "axios";
import { BASE_URL } from "../../constants/apiConfig";

export class PropertyService{
    getAllPropertyImage(){
        return axios.get(`${BASE_URL}/propertyImage`)
    }
    getPropertyDetail(){
        return axios.get(`${BASE_URL}/property`)
    }
    getLastestLocation(){
        return axios.get(`${BASE_URL}/property/latest`)
    }

    getPropertyDetailById(payload:any){
        return axios.get(`${BASE_URL}/property/${payload}`)
    }
}

  