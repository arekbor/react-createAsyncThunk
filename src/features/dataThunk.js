import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk('lorem/getData', async (args, {rejectWithValue}) => {
    try {
        const {data} = await axios.get("http://localhost:8080/lorem");
        return data;
    } catch (error) {
        rejectWithValue(error);
    }
})

export default getData;