import { createSlice } from "@reduxjs/toolkit";

// Function to convert source name
const formatSourceName = (name) => {
	return `#${name && name.replace("/s+/g", "_").toLowerCase()}`;
};

// Function to format date and time
const formatDateTime = (dateTime) => {
	const date = new Date(dateTime);
	const day = date.getDate();
	const month = date.getMonth() + 1; // Months are zero-based in JavaScript
	const hours = date.getHours();
	const minutes = date.getMinutes().toString().padStart(2, "0"); // Ensure two-digit minutes
	return `${day}/${month} (${hours}:${minutes})`;
};

const initialState = {
	all_items: [],
	loading: false,
	bookmarked_items: [],
	formatSourceName: formatSourceName(),
	formatDateTime: formatDateTime(),
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
	},
});

export const { addData, setLoading, addFav } = globalData.actions;
export default globalData.reducer;
