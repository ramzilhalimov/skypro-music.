import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../service/authApi'
import { playlistApi } from '../service/playlistApi'
import playlistSlice from './slices/playlistSlice'

export const store = configureStore({
  reducer: {
    playlistSlice,
    [authApi.reducerPath]: authApi.reducer,
    [playlistApi.reducerPath]: playlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, playlistApi.middleware),
})
