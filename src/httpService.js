import axios from "axios";

const baseURL = "https://furnishantasy.blacksmoke-0e20ea33.eastus.azurecontainerapps.io/furnishFantasy/";

const httpService = axios.create({
  baseURL,
});

export default httpService;