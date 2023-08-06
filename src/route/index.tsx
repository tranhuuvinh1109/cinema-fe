import { createBrowserRouter, Outlet } from 'react-router-dom';
import { createContext } from 'react';
import { CinemaPage, ErrorPage, HomePage, LoginPage } from '../pages';
import { Navbar } from '../components';

export const APPCONTEXT = createContext({});
const AppLayout = () => {
	return (
		<APPCONTEXT.Provider value={{}}>
			<Navbar />
			<Outlet />
		</APPCONTEXT.Provider>
	)
}



export default createBrowserRouter([
	{
		element: <AppLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <HomePage />
			},
			{
				path: '/signin',
				element: <LoginPage />
			},
			{
				path: '/cinema',
				element: <CinemaPage />
			}
		]
	}
])
