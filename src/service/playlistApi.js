import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const playlistApi = createApi({
  reducerPath: 'getFavoritesTracksApi',
  tagTypes: ['Tracks'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/',
    prepareHeaders: (headers, { getState }) => {
      console.log(getState())
      const token = getState().authorization?.access
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getFavoritesTracks: builder.query({
      query: () => ({
        url: `catalog/track/favorite/all/`,
      }),
      providesTags: ['Tracks'],
    }),

    likeTrackFavorites: builder.mutation({
      query: ({ id }) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'Tracks' }],
    }),

    dislikeTrackFavorites: builder.mutation({
      query: ({ id }) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Tracks' }],
    }),
  }),
})

export const {
  useGetFavoritesTracksQuery,
  useLikeTrackFavoritesMutation,
  useDislikeTrackFavoritesMutation,
} = playlistApi
