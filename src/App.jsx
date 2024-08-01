import React from "react";
import { Route, Routes } from "react-router-dom";
import NewsFeed from "./pages/NewsFeed";
import Bookmarked from "./pages/Bookmark";
import Nav from "./pages/Nav";

function App() {
	return (
		<div className='flex flex-col h-screen'>
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
