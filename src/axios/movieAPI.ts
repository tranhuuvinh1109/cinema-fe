import axiosClient from ".";

const movieAPI = {
	getAllMovies: () => axiosClient.get('/movie/getAll')
}

export default movieAPI;