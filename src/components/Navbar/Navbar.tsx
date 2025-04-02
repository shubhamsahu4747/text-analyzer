import React from "react";
import PropTypes from 'prop-types'

export  function Navbar(props:any){
	const {logo ,title } = props.data;
	
	
	return(
		<nav className='bg-gray-800  flex flex-row gap-5 w-screen p-5 h-10 py-5 ' >
			<li className='flex flex-row items-center flez'>
				<a href="/" className="flex flex-row gap-1 font-bold">
					<img src={logo} className="logo w-10 p-1" alt="Vite logo" />
					<h3 className="text-gray-100 mt-2"> Text Analyzer</h3>
				</a>
			</li>
			{/* <li className='flex flex-row items-center '>
				<a href="https://vitejs.dev" target="_blank" className='text-right '>
					<span className='text-gray-100 hover:text-blue'>{title.home}</span>
				</a>
			</li> */}
		</nav>
	);
}

Navbar.propTypes = {
	data: PropTypes.shape({
        logo: PropTypes.string.isRequired,
        title: PropTypes.shape({
            home: PropTypes.string.isRequired,
            about: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};