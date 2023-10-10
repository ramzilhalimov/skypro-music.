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
      state.isPlaying = true
      state.playlist = action.payload
    },
    setPlayTrack: (state, action) => {
      state.isPlaying = action.payload
    },
    setCurrentTrack: (state, action) => {
      const id = action.payload
      const current = state.playlist.find((track) => id === track.id)
      state.track = current
    },
    setShuffleTracks: (state, action) => {
         state.shufflePlaylist = action.payload
                // function shuffleArray(array) {
                //     const newArray = [...array];
                // for (let i = newArray.length - 1; i > 0; i--) {
                //     const j = Math.floor(Math.random() * (i + 1));
                //     const temp = newArray[i];
                //     newArray[i] = newArray[j];
                //     newArray[j] = temp;
                //   }
                //   return newArray;
                // }
                // const currentPlaylist = action.payload;
                // state.shufflePlaylist = shuffleArray(currentPlaylist);
              },
    }
})
export const { setPlaylist, setPlayTrack, setCurrentTrack, setShuffleTracks } =
  playlistSlice.actions
export default playlistSlice.reducer
