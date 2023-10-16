import { configureStore } from '@reduxjs/toolkit'
import playlistSlice from './slices/playlistSlice'
import { playlistApi } from '../components/api/api'
export const store = configureStore({
  reducer: {
    playlistSlice,
    [playlistApi.reducerPath]: playlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playlistApi.middleware),
})
