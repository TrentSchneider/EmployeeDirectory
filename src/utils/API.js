// import React from "react";
import axios from "axios";
import APP_ID from "./APPID";

const BASE_URL = "https://dummyapi.io/data/api";

// the API call to retrieve the employee data
export default {
  search: function () {
    return axios.get(`${BASE_URL}/user`, { headers: { "app-id": APP_ID } });
  }
};
