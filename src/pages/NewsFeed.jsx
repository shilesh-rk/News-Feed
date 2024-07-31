import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, setLoading, addFav } from "../redux/Slice";
import axios from "axios";
import newsImage from "./download.jpeg";
import Cards from "./Cards";

const NewsFeed = () => {
	const news_feed = useSelector((state) => state.Articles.all_items);
	const loading = useSelector((state) => state.Articles.loading);
	const dispatch = useDispatch();
	const [first, setFirst] = useState(0);
	const [error, setError] = useState("");

	const fetchData = async () => {
		try {
			if (!news_feed.length) {
				dispatch(setLoading(true));
				const result = await axios.get(
					"https://newsapi.org/v2/top-headlines?country=in&apiKey=263b6747186d4936a30a4d6ec37800ea"
				);
				if (result?.data.status === "ok") {
					dispatch(addData(result.data.articles));
					setFirst(1);
				}
			}
		} catch (error) {
			console.log("error while getting articles", error);
			setError("Network Error please Try Again");
		} finally {
			dispatch(setLoading(false));
		}
	};

	useEffect(() => {
		fetchData();
	}, [first, news_feed.length]);

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
