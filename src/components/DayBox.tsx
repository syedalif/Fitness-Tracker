// src/components/DayBox.tsx
import React from "react"
import { useNavigate } from "react-router-dom"

export interface DayBoxProps {
	imageSrc: string
	routine:
		| string
		| "Push Day"
		| "Pull Day"
		| "Leg Day"
		| "Arms And Shoulders"
		| "Rest Day"
	day:
		| "Monday"
		| "Tuesday"
		| "Wednesday"
		| "Thursday"
		| "Friday"
		| "Saturday"
		| "Sunday"
}

const DayBox: React.FC<DayBoxProps> = ({ routine, day, imageSrc }) => {
	const navigate = useNavigate()
	return (
		<div className='w-96 mx-1 my-2 p-4 '>
			<h2 className='text-center mb-2 cursor-default'>{day}</h2>
			<div
				onClick={
					routine !== "Rest Day"
						? () => navigate(`/${routine.replace(/ /g, "")}`)
						: () => {}
				}
				className='w-65 h-52 shrink-0 bg-white rounded-lg shadow-md transition-transform hover:scale-105 border-2 border-red-600 cursor-pointer'
			>
				<div className='text-red-600 text-center mb-2'>{routine}</div>
				<img
					src={imageSrc}
					alt={routine}
					className='w-full h-32 object-contain'
				/>
			</div>
		</div>
	)
}

export default DayBox
