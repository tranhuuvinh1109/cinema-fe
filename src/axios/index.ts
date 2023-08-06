import axios from "axios";

const baseURL = "http://localhost:4000";
const axiosClient = axios.create({
	baseURL
})

export default axiosClient;