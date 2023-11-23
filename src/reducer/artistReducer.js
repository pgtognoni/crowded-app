import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    artist: {},
    events: [],
    favorites: [],
    userId: '',
    message: ''
}

const artistSlice = createSlice({
    name: 'artist',
    initialState,
    reducers: {
        setState: (state, action) => {state.artist = action.payload.artist; state.events = action.payload.events},
        setEvents: (state, action) => {state.events = action.payload},
        setArtist: (state, action) => {state.artist = action.payload},
        addFavorites: (state, action) =>{state.favorites = action.payload},
        setMessage: (state, action) => {state.message = action.payload},
        setUserId: (state, action) => {state.userId = action.payload},
        resetState: (state) => { state.artist = {}; state.events = []; state.message = ''}
    }
})

export const {
    setState,
    setArtist,
    setEvents,
    addFavorites,
    resetState,
    setMessage,
    setUserId
} = artistSlice.actions;

export default artistSlice;