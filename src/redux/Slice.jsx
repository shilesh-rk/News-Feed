import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	all_items: [],
	loading: false,
	bookmarked_items: [],
};

export const globalData = createSlice({
	name: "NewsFeed",
	initialState,
	reducers: {
		addData: (state, action) => {
			state.all_items = action.payload;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		addFav: (state, action) => {
			const findIndex = state.bookmarked_items.findIndex(
				(item) => item.title === action.payload.title
			);
			if (findIndex >= 0) {
				state.bookmarked_items = state.bookmarked_items.filter(
					(item) => item.title !== action.payload.title
				);
			} else {
				state.bookmarked_items.push(action.payload);
			}
		},
		// setBookmarkedItems: (state, action) => {
		// 	const find = state.bookmarked_items.find(
		// 		(item) => item.title === action.payload.title
		// 	);
		// 	if (find > 0) {
		// 		state.bookmarked_items = state.bookmarked_items.filter(
		// 			(item) => item.title !== action.payload.title
		// 		);
		// 	} else {
		// 		state.bookmarked_items.push(action.payload);
		// 	}
		// },
	},
});

export const { addData, setLoading, addFav, setBookmarkedItems } =
	globalData.actions;
export default globalData.reducer;
