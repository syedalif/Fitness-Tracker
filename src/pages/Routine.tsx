// src/pages/HomePage.tsx
import React from "react"
import NavBar from "../components/NavBar"
import ExerciseBox, { ExerciseBoxProps } from "../components/ExerciseBox"

export interface RoutineProps {
	exercises: ExerciseBoxProps[]
	routineName:
		| string
		| "Push Day"
		| "Pull Day"
		| "Leg Day"
		| "Arms and Shoulders"
		| "Rest Day"
}

const Routine: React.FC<RoutineProps> = ({ routineName, exercises }) => {
	// Sample data, replace with your own

	return (
		<div>
			<NavBar />
			<h1 className='text-center font-semibold'>{routineName}</h1>
			<div className='flex flex-wrap flex-row justify-center p-4 -mx-14'>
				{exercises.map((exercise, index) => (
					<ExerciseBox
						name={exercise.name}
						id={exercise.id}
						key={index}
					/>
				))}
			</div>
		</div>
	)
}

export default Routine
