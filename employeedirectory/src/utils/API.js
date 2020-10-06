import axios from "axios";
import APIKEY from "./APIKey"

const BASEURL = "https://dummyapi.io/data/api/";


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
