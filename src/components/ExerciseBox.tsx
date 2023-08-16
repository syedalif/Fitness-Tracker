// src/components/DayBox.tsx
import React from "react"

export interface ExerciseBoxProps {
	name: string
	id: string
}

const ExerciseBox: React.FC<ExerciseBoxProps> = ({ name, id }) => {
	const youTube = "https://www.youtube.com/embed"
	return (
		<div className='w-96 mx-1 my-2 p-4 '>
			<div className='w-65 h-52 shrink-0 bg-white rounded-lg shadow-md transition-transform hover:scale-105 border-2 border-red-600 cursor-pointer'>
				<div className='text-red-600 text-center mb-2'>{name}</div>
				<iframe
					// width='560'
					// height='315'
					className='w-full h-32 object-contain'
					src={`${youTube}/${id}`}
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen
				></iframe>
			</div>
		</div>
	)
}

export default ExerciseBox
