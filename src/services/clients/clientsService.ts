import axios from "axios";
import { BASE_URL } from "../../constants/apiConfig";

export class ClientService{
    getClients(){
        return axios.get(`${BASE_URL}/clients`)
    }
   
}

  