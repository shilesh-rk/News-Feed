import React from "react";
import { Route, NavLink, Routes } from "react-router-dom";
import NewsFeed from "./pages/NewsFeed";
import Bookmarked from "./pages/Bookmark";
import Nav from "./pages/Nav";

function App() {
	return (
		<div className='flex flex-col h-screen'>
			{/* <nav className='bg-gray-800 py-5 text-white text-center fixed w-full z-50'>
				<ul className='flex justify-around'>
					<li>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive
									? "py-1 px-6 border border-transparent  border-b-white text-white"
									: "text-gray-200"
							}>
							All
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/bookmark'
							className={({ isActive }) =>
								isActive
									? "py-1 px-6 border border-transparent  border-b-white text-white"
									: " text-gray-200"
							}>
							Bookmarked
						</NavLink>
					</li>
				</ul>
			</nav> */}
			<Nav />
			<div className='flex flex-wrap mt-20 overflow-y-scroll'>
				<Routes>
					<Route path='/' element={<NewsFeed />} />
					<Route path='/bookmark' element={<Bookmarked />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
