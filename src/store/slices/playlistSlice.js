import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playlist: [],
  track: null,
  isPlaying: false,
  shufflePlaylist: [],
}

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setPlaylist: (state, action) => {
      state.playlist = action.payload
    },
    setPlayTrack: (state, action) => {
      state.isPlaying = action.payload
    },
    setCurrentTrack: (state, action) => {
      const id = action.payload
      const current = state.playlist.find((track) => track.id === id)
      state.track = current
      state.track = action.payload
    },
    setShuffleTracks: (state, action) => {
      state.shufflePlaylist = action.payload
    },
  },
})
export const { setPlaylist, setPlayTrack, setCurrentTrack, setShuffleTracks } =
  playlistSlice.actions
export default playlistSlice.reducer
