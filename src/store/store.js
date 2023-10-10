import { configureStore } from '@reduxjs/toolkit'
import playlistSlice from './slices/playlistSlice'

export const store = configureStore({
  reducer: playlistSlice
})
