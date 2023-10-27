import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface AdminState {
    loading: boolean,
    error?: string,
    page: number,
    size: number,
    totalPage: number,
}

const initialState = {
    loading: false,
    error: '',
    page: 1,
    size: 10,
    totalPage: 0,
}

const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
    }
})


export default bookingSlice