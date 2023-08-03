import { BillBoard, InfoModal, MovieList, Navbar } from '../components';
import { MovieType, data } from '../types';



const movies: MovieType[] = [data, data];
const favorites: MovieType[] = [data, data];
const HomePage = () => {
	const closeModal = () => {

	}

	return (
		<div className="App">
			<>
				<InfoModal visible={false} onClose={closeModal} />
				<Navbar />
				<BillBoard />
				<div className='pt-40'>
					<p className='text-4xl text-white'>
						Movie list
					</p>
					<MovieList title="Trending Now" data={movies} />
					{
						favorites && <>
							<p className='text-4xl text-white'>
								Favorites list
							</p>
							<MovieList title="Trending Now" data={favorites} />
						</>
					}

				</div>
			</>
		</div>
	);
}

export default HomePage;
