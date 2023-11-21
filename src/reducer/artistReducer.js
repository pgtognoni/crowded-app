import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    artist: {},
    events: [],
    favorites: [],
}

const artistSlice = createSlice({
    name: 'artist',
    initialState,
    reducers: {
        setState: (state, action) => {state.artist = action.payload.artist; state.events = action.payload.events},
        setEvents: (state, action) => {state.events = action.payload},
        setArtist: (state, action) => {state.artist = action.payload},
        addFavorites: (state, action) =>{state.favorites = action.payload},
        resetState: (state) => {state.artist = {}; state.events = []}
    }
})

export const {
    setState,
    setArtist,
    setEvents,
    addFavorites,
    resetState
} = artistSlice.actions;

export default artistSlice;