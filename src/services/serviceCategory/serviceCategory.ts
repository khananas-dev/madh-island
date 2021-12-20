// const axios = require('axios').default;
// import { apiClient, BASE_URL } from "../constants/apiConfig";

import axios from "axios";
import { BASE_URL } from "../../constants/apiConfig";

// export const getOrgInfo = async () => {
//   const orgInfo = await apiClient.get(`${process.env.API_URL}/api/orgInfo`).then((data: any) => {
//     console.log(`${process.env.API_URL}/api/serviceCategory`)
//     return data;
//   }).catch(err => console.error(err));
//   return orgInfo;
// };

export class ServiceCategory{
    getServiceCategoryList(){
        return axios.get(`${BASE_URL}/serviceCategory`)
    }
}

  