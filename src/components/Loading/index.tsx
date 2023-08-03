import React from 'react'
import img from '../../assets/loading.gif'

const Loading: React.FC = () => {
	return (
		<div>
			<div className='flex justify-center items-center h-screen'>
				<img src={img} alt="Loading" />
			</div>
		</div>
	)
}

export default Loading