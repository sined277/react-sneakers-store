import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    sneakersList: [],
    isLoading: "loading"
}

export const fetchSneakers = createAsyncThunk(
    "sneakers/fetchSneakers",
    async (url, thunkApi) => {
        try {
            const response = await axios.get(url)
            const data = await response.data
            return data
        } catch (error) {
            console.log(`Erro ${error}`);
            throw thunkApi.rejectWithValue(error)
        }
    }
)



const sneakersSlice = createSlice({
    name: "sneakers",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSneakers.pending, (state, action) => {
                state.isLoading = "loading"
            })

            .addCase(fetchSneakers.fulfilled, (state, action) => {
                state.sneakersList = action.payload
                state.isLoading = "succes"
            })

            .addCase(fetchSneakers.rejected, (state, action) => {
                state.sneakersList = []
                state.isLoading = "error"
            })
    }
})


export const selectSneakersList = (state) => state.sneakers.sneakersList;
export const selectIsLoading = (state) => state.sneakers.isLoading;
export default sneakersSlice.reducer;