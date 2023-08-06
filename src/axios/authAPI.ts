import axiosClient from ".";

const authAPI = {
	sigin: (params: any) => axiosClient.post('/auth/login', params)
}

export default authAPI;