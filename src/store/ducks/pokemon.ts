import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../utils/services/api';

interface PokemonState {
  pokemonData: any;
}

const initialState = {
  errorPokemon: false,
  loadingPokemon: false,
  pokemonData: {
    species: {
      name: '',
    },
    sprites: {
      front_shiny: '',
    },
  },
};

export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async (pokemon: string) => {
    const response = await api.get(`pokemon/${pokemon}`);
    return response.data;
  }
);
export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.loadingPokemon = true;
      })
      .addCase(fetchPokemon.fulfilled, (state, { payload }) => {
        state.loadingPokemon = false;
        state.pokemonData = payload;
      })
      .addCase(fetchPokemon.rejected, (state) => {
        state.loadingPokemon = false;
        state.errorPokemon = true;
      });
  },
});

export default pokemonSlice.reducer;
