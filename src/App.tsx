// src/App.tsx
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Routine from "./pages/Routine"
import Routines from "./routines.json"

// Import other page components here

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/PushDay'
					element={<Routine {...Routines.PushDay} />}
				/>
				<Route
					path='/PullDay'
					element={<Routine {...Routines.PullDay} />}
				/>
				<Route
					path='/LegDay'
					element={<Routine {...Routines.LegDay} />}
				/>
				<Route
					path='/ArmsAndShoulders'
					element={<Routine {...Routines.ArmsAndShoulders} />}
				/>
				{/* <Route
					path='/RestDay'
					element={<Routine {...RestDay} />}
				/> */}
				{/* Define other routes here */}
			</Routes>
		</Router>
	)
}

export default App
