// src/pages/HomePage.tsx
import React from "react"
import NavBar from "../components/NavBar"
import DayBox, { DayBoxProps } from "../components/DayBox"
//import Schedule from "../schedule.json"

const HomePage: React.FC = () => {
	// Sample data, replace with your own

	const days: DayBoxProps[] = [
		{
			day: "Monday",
			routine: "Push Day",
			imageSrc: "src\\images\\Incline-Barbell-Bench-Press.png",
		},
		{
			day: "Tuesday",
			routine: "Rest Day",
			imageSrc: "src\\images\\rest.jpg",
		},
		{
			day: "Wednesday",
			routine: "Pull Day",
			imageSrc: "src\\images\\barbellRow.jpg",
		},
		{
			day: "Thursday",
			routine: "Rest Day",
			imageSrc: "src\\images\\rest.jpg",
		},
		{
			day: "Friday",
			routine: "Leg Day",
			imageSrc: "src\\images\\squats.jpg",
		},
		{
			day: "Saturday",
			routine: "Rest Day",
			imageSrc: "src\\images\\rest.jpg",
		},
		{
			day: "Sunday",
			routine: "Arms And Shoulders",
			imageSrc: "src\\images\\bicepCurl.jpg ",
		},
	]

	return (
		<div>
			<NavBar />
			<div className='flex flex-wrap flex-row justify-center p-4 -mx-14'>
				{days.map((dayInfo, index) => (
					<DayBox
						day={dayInfo.day}
						key={index}
						routine={dayInfo.routine}
						imageSrc={dayInfo.imageSrc}
					/>
				))}
			</div>
		</div>
	)
}

export default HomePage
