import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav } from "../redux/Slice";
import newsImage from "./download.jpeg";

const Cards = ({ data }) => {
	// const news_feed = useSelector((state) => state.Articles.all_items);
	// const marked = useSelector((state) => state.Articles.bookmarked_items);
	const { all_items, bookmarked_items } = useSelector(
		(state) => state.Articles
	);
	const dispatch = useDispatch();

	// Function to convert source name
	const formatSourceName = (name) => {
		return `#${name.split(" ").join("").toLowerCase()}`;
	};

	// Function to format date and time
	const formatDateTime = (dateTime) => {
		const monthNames = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];
		const date = new Date(dateTime);
		const day = date.getDate();
		const month = monthNames[date.getMonth()]; // Months are zero-based in JavaScript
		const hours = date.getHours();
		const minutes = date.getMinutes().toString().padStart(2, "0"); // Ensure two-digit minutes

		return `${month} ${day} ${hours}:${minutes}`;
	};
	//SVG Icons
	const SVG = ({ color, stroke }) => {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='40px'
				height='40px'
				viewBox='0 0 24 24'
				fill={color}>
				<path
					d='M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z'
					stroke={stroke}
					strokeWidth='1'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		);
	};
	const Timer = () => {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='#374151'
				width='18px'
				height='18px'
				viewBox='0 0 24 24'
				id='Outline'>
				<title>194 restore</title>
				<path d='M12,6a1,1,0,0,0-1,1v5a1,1,0,0,0,.293.707l3,3a1,1,0,0,0,1.414-1.414L13,11.586V7A1,1,0,0,0,12,6Z M23.812,10.132A12,12,0,0,0,3.578,3.415V1a1,1,0,0,0-2,0V5a2,2,0,0,0,2,2h4a1,1,0,0,0,0-2H4.827a9.99,9.99,0,1,1-2.835,7.878A.982.982,0,0,0,1,12a1.007,1.007,0,0,0-1,1.1,12,12,0,1,0,23.808-2.969Z' />
			</svg>
		);
	};
	// const feed = data ? news_feed : marked;
	const feed = data ? all_items : bookmarked_items;
	return (
		<div className='flex flex-wrap justify-center mt-10'>
			{feed.length > 0
				? feed.map((news_feed, i) => {
						const image = news_feed.urlToImage
							? news_feed.urlToImage
							: newsImage;
						return (
							<div className='p-4 w-3/4' key={i}>
								<button
									className='relative float-right right-20 top-4'
									onClick={() => dispatch(addFav(news_feed))}>
									{bookmarked_items.some(
										(item) => item.title === news_feed.title
									) ? (
										<SVG color={"yellow"} stroke={"none"} />
									) : (
										<SVG color={"none"} stroke={"gray"} />
									)}
								</button>
								<div className='flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-row gap-10'>
									<div>
										<img
											className='h-44 max-w-2xl border-2 border-gray-300 p-0.3 '
											src={image}
											alt={news_feed.source.name}
										/>
									</div>
									<div className='flex flex-col justify-between flex-grow '>
										<p className='leading-relaxed text-white font-medium w-10/12'>
											<h4>{news_feed.title}</h4>
										</p>

										<p className='leading-relaxed text-base text-white dark:text-gray-300'>
											Lorem ipsum dolor sit amet.
											<a
												href={news_feed.url}
												className='mt-3 text-black dark:text-white hover:text-yellow-300 inline-flex items-center'
												target='_blank'
												rel='noopener noreferrer'>
												Read More
												<svg
													fill='none'
													stroke='currentColor'
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													className='w-4 h-4 ml-2'
													viewBox='0 0 24 24'>
													<path d='M5 12h14M12 5l7 7-7 7'></path>
												</svg>
											</a>
										</p>
										<div className='flex flex-wrap mt-5'>
											{news_feed.source.name && (
												<span className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
													{formatSourceName(news_feed.source.name)}
												</span>
											)}

											{news_feed.author && (
												<span className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
													{formatSourceName(news_feed.author)}
												</span>
											)}
											{news_feed.publishedAt && (
												<span className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
													<p className='flex'>
														<Timer />
														&nbsp;&nbsp;
														{formatDateTime(news_feed.publishedAt)}
													</p>
												</span>
											)}
										</div>
									</div>
								</div>
							</div>
						);
				  })
				: !data && <p>No bookmarked items</p>}
		</div>
	);
};

export default Cards;
