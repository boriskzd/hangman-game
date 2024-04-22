import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//
//
//
//
//

export const fetchData = createAsyncThunk("data/fetchData", async () => {
	console.log("[dataSlice] ---");
	try {
		const response = await axios.get("http://api.quotable.io/random");
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error("Error fetching data: ", error);

		throw error;
	}
});

//
//
//
//
//

interface Question {
	_id: string;
	author: string;
	authorSlug: string;
	content: string;
	dateAdded: string;
	dateModified: string;
	length: number;
	tags: string[];
}

interface DataState {
	data: Question | null;
	status: "idle" | "loading" | "succeeded" | "failed";
	error: null | any; // TODO: add error type
}

const initialState: DataState = {
	data: null,
	status: "idle",
	error: null,
};

export const dataSlice = createSlice({
	name: "data",
	initialState: initialState,
	reducers: {
		// changeName: (state, action) => {
		// 	state.name = action.payload;
		// },
		// formSubmitted(state) {
		// 	state.formSubmitted = true;
		// },
		// showHighScores(state) {
		// 	state.showHighScores = true;
		// },
	},
	extraReducers: (builder) => {
		// Handle pending state while fetching data
		builder.addCase(fetchData.pending, (state) => {
			state.status = "loading";
		});
		// Handle successful data fetching
		builder.addCase(fetchData.fulfilled, (state, action) => {
			state.status = "succeeded";
			state.data = action.payload;
		});
		// Handle failed data fetching
		builder.addCase(fetchData.rejected, (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
		});
	},
});

export default dataSlice.reducer;
