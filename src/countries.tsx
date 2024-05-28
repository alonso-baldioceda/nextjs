import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// First, create an asynchronous function to handle the search for countries
export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await fetch('URL_DE_TU_API');
  const data = await response.json();
  return data;
});

// Then, create a slice to handle the state of the countries
/**
 * Represents a slice of countries in the Redux store.
 */
const countriesSlice = createSlice({
    name: 'countries',
    initialState: { entities: [], loading: 'idle' },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.entities = action.payload;
            });
    },
});

export default countriesSlice.reducer;