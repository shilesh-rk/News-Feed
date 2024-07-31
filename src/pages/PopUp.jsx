import React, { useState } from "react";

const PopUp = ({ news_feed }) => {
	const [data, setData] = useState(false);
	const show =
		"absolute overflow-y-auto overflow-x-hidden  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full";
	const hide =
		"hidden absolute overflow-y-auto overflow-x-hidden  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full";
	return (
		<>
			{/* <!-- Modal toggle --> */}
			<button
				data-modal-target='static-modal'
				data-modal-toggle='static-modal'
				className='md:hidden text-white bg-blue-800 hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm p-1'
				type='button'
				onClick={() => setData(true)}>
				<div className='max-w-sm rounded overflow-hidden'>
					<img
						className='w-full'
						src={news_feed[0]?.urlToImage}
						alt={news_feed[0]?.source.name}
					/>
					<div className='p-1'>
						<div className='mb-2'>
							{news_feed[0]?.title} <strong>{news_feed[0]?.source.name}</strong>
						</div>
					</div>
				</div>
			</button>

			{/* <!-- Main modal --> */}
			<div
				id='static-modal'
				data-modal-backdrop='static'
				tabIndex='-1'
				aria-hidden='true'
				className={data ? show : hide}>
				<div className='relative p-4 w-full max-w-2xl max-h-full'>
					{/* <!-- Modal content --> */}
					<div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
						{/* <!-- Modal header --> */}
						<div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
							<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
								Static modal
							</h3>
							<button
								type='button'
								className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
								data-modal-hide='static-modal'
								onClick={() => setData(!data)}>
								<svg
									className='w-3 h-3'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 14 14'>
									<path
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
									/>
								</svg>
								<span className='sr-only'>Close modal</span>
							</button>
						</div>
						{/* <!-- Modal body --> */}
						<div className='max-w-sm rounded overflow-hidden shadow-lg'>
							<img
								className='w-full'
								src={news_feed[0]?.urlToImage}
								alt={news_feed[0]?.source.name}
							/>
							<div className='px-6 py-4'>
								<div className='font-bold text-xl mb-2'>
									{news_feed[0]?.title}{" "}
									<strong>{news_feed[0]?.source.name}</strong>
								</div>
								<p className='text-gray-700 text-base'>
									{news_feed[0]?.description}
								</p>
							</div>
							<div className='px-6 pt-4 pb-2'>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									#{news_feed[0]?.source.name}
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									{news_feed[0]?.publishedAt}
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									{news_feed[0]?.author}
								</span>
							</div>
						</div>
						{/* <!-- Modal footer --> */}
						<div className='flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600'>
							<button
								data-modal-hide='static-modal'
								type='button'
								className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
								I accept
							</button>
							<button
								data-modal-hide='static-modal'
								type='button'
								className='py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
								Decline
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PopUp;
