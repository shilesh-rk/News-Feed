import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	all_items: [],
	loading: false,
	bookmarked_items: [],
	country: "",
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
		setCountry: (state, action) => {
			state.country = action.payload;
		},
	},
});

export const { addData, setLoading, addFav, setBookmarkedItems, setCountry } =
	globalData.actions;
export default globalData.reducer;
