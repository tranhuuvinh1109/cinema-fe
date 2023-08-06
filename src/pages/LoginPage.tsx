import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import authAPI from '../axios/authAPI';
import bg from '../assets/image/hero.jpg';
import logo from '../assets/image/logo.png';


const LoginPage = () => {
	const navigate = useNavigate();
	const [information, setInformation] = useState({ email: '', password: '', name: '' })
	const [variant, setVariant] = useState('login')

	const toggleVariant = useCallback(() => {
		setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
	}, [])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInformation({ ...information, [e.target.name]: e.target.value })
	}

	const login = useCallback(async () => {
		try {
			const params = {
				email: information.email,
				password: information.password
			}
			const res = await authAPI.sigin(params);
			if (res.status === 200) {
				navigate('/');
			}
		} catch (err) {
			console.log(err)
		}
	}, [information, navigate])

	const register = useCallback(async () => {

	}, [])
	return (
		<div style={{ backgroundImage: `url(${bg})` }} className='relative h-screen w-full bg-no-repeat bg-center bg-fixed bg-cover'>
			<div className='bg-black w-full h-full lg:bg-opacity-50'>
				<nav className='px-12 py-5' onClick={() => navigate('/')}>
					<img src={logo} alt='Logo' className='h-12' />
				</nav>
				<div className='flex justify-center'>
					<div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
						<h2 className='text-white text-4xl mb-8 font-semibold'>
							{variant === 'login' ? 'Sign in' : 'Create an account'}
						</h2>
						<div className='flex flex-col gap-4'>
							{
								variant === 'register' && (
									<Input id='name' label='Username' onChange={handleChange} type='text' value={information.name} name='name' />
								)
							}
							<Input id='email' label='Email' onChange={handleChange} type='email' value={information.email} name='email' />
							<Input id='password' label='Password' onChange={handleChange} type='password' value={information.password} name='password' />
						</div>
						<button onClick={variant === 'login' ? login : register} className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
							{variant === 'login' ? 'Login' : 'Sign up'}
						</button>
						<div className='flex items-center gap-4 mt-8 justify-center'>
							<div className='w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 transition'>
								<FcGoogle size={30} />
							</div>
							<div className='w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 transition'>
								<FaGithub size={30} />
							</div>
						</div>
						<p className='text-neutral-500 mt-12 text-sm'>
							{variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
							<span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
								{variant === 'login' ? 'Create an account' : 'Login'}
							</span>
							.
						</p>
					</div>
				</div>

			</div>
		</div>
	)
}

export default LoginPage;