const axios = require('axios').default;
import { apiClient, BASE_URL } from "../constants/apiConfig";

export const getOrgInfo = async () => {
  const orgInfo = await apiClient.get(`${BASE_URL}/api/orgInfo`).then((data: any) => {
    console.log(`${BASE_URL}/api/orgInfo`)
    return data;
  }).catch(err => console.error(err));
  return orgInfo;
};

  