import { useQuery } from 'react-query';
import { BillBoard, InfoModal, Loading, MovieList } from '../components';
import movieAPI from '../axios/movieAPI';


const HomePage = () => {
	const { data, isLoading } = useQuery('get-all-movies', movieAPI.getAllMovies);

	const closeModal = () => {

	}
	return (
		<div className="App">
			{
				isLoading ? <Loading />
					:
					<>
						<InfoModal visible={false} onClose={closeModal} />
						<BillBoard />
						<div className='pt-40'>
							<p className='text-4xl text-white'>
								Movie list
							</p>
							<MovieList title="Trending Now" data={data?.data.data} />
							<p className='text-4xl text-white'>
								Favorites list
							</p>
							<MovieList title="Trending Now" data={data?.data.data} />
						</div>
					</>
			}
		</div>
	);
}

export default HomePage;
