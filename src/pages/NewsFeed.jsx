import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, setLoading, setCountry } from "../redux/Slice";
import axios from "axios";
import Cards from "./Cards";

const NewsFeed = () => {
	// const news_feed = useSelector((state) => state.Articles.all_items);
	// const loading = useSelector((state) => state.Articles.loading);
	const { all_items, loading, country } = useSelector(
		(state) => state.Articles
	);
	const dispatch = useDispatch();
	const [first, setFirst] = useState(0);
	const [error, setError] = useState("");
	const api_env = {
		URI: import.meta.env.VITE_URI,
		API_KEY: import.meta.env.VITE_API_KEY,
	};
	const previousCountry = useRef(country);

	const fetchData = async (changedCountry) => {
		try {
			dispatch(setLoading(true));
			const result = await axios.get(
				// "https://newsapi.org/v2/top-headlines?country=in&apiKey=263b6747186d4936a30a4d6ec37800ea"
				`${api_env.URI}country=${changedCountry}&apiKey=${api_env.API_KEY}`
			);
			if (result?.data.status === "ok") {
				dispatch(addData(result.data.articles));
				setFirst(1);
			}
		} catch (error) {
			console.log("error while getting articles", error);
			setError("Network Error please Try Again");
		} finally {
			dispatch(setLoading(false));
		}
	};

	useEffect(() => {}, []);
	useEffect(() => {
		if (country == "") {
			dispatch(setCountry("in"));
		}
		if (country !== previousCountry.current) {
			fetchData(country);
			// console.log("previousCountry", previousCountry);
			// console.log("country", country);
			previousCountry.current = country;
		}
	}, [country, first, all_items.length]);

	return (
		<>
			{loading && (
				<div className='h-screen flex flex-auto items-center justify-center'>
					<div
						className='h-24 w-24 animate-spin rounded-full border-4 border-dotted border-current text-black'
						role='status'></div>
				</div>
			)}
			<Cards data={true} />
			{error && <h1 className='mt-10'>{error}</h1>}
		</>
	);
};

export default NewsFeed;
