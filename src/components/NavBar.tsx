// src/components/NavBar.tsx
import React from "react"
import { useNavigate } from "react-router-dom"

const NavBar: React.FC = () => {
	const navigate = useNavigate()
	return (
		<nav className='bg-red-600 p-4'>
			{/* Logo and title */}
			<div className='flex items-center'>
				{/* Logo image */}
				{/* Replace 'logo.png' with your actual logo image */}
				<img
					src='src\\images\\repLogo.jpg'
					alt='Logo'
					className='w-8 h-8'
				/>
				{/* Title */}
				<h1
					onClick={() => navigate("/")}
					className='font-consolas ml-2 text-white text-lg cursor-pointer'
				>
					RepCounter
				</h1>
			</div>
		</nav>
	)
}

export default NavBar
