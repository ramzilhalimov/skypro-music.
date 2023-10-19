import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { setAuthentication } from '../store/slices/authenticationSlice'

export const playlistApi = createApi({
  reducerPath: 'getFavoritesTracksApi',
  tagTypes: ['Tracks'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/',
    prepareHeaders: (headers, { getState }) => {
      console.log(getState())
      const token = getState().authentication?.access
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getFavoritesTracks: builder.query({
      query: (token) => ({
        url: `catalog/track/favorite/all/`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),

      providesTags: ['Tracks'],
    }),

    likeTrackFavorites: builder.mutation({
      query: ({ id, token }) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [{ type: 'Tracks' }],
    }),

    dislikeTrackFavorites: builder.mutation({
      query: ({ id, token }) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
export default playlistApi.reducer

// const DATA_TAG = { type: 'Tracks', id: 'LIST' }

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   const baseQuery = fetchBaseQuery({
//     baseUrl: 'https://skypro-music-api.skyeng.tech',
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().authentication?.access

//       if (
//         token &&
//         args.queryKey !== 'getAllTracks' &&
//         args.queryKey !== 'getCatalogSection' &&
//         args.queryKey !== 'getCatalogSectionTracks'
//       ) {
//         headers.set('authorization', `Bearer ${token}`)
//       }

//       return headers
//     },
//   })

//   if (
//     args.queryKey === 'getAllTracks' &&
//     args.queryKey === 'getCatalogSection' &&
//     args.queryKey === 'getCatalogSectionTracks'
//   ) {
//     const returnRes = await baseQuery(args, api, extraOptions)
//     return returnRes
//   }

//   const result = await baseQuery(args, api, extraOptions)

//   if (result?.error?.status !== 401) {
//     return result
//   }

//   const forceLogout = () => {
//     api.dispatch(setAuthentication(null))
//     window.location.href = '/login'
//   }

//   const { authentication } = api.getState()
//   if (!authentication.refresh) {
//     return forceLogout()
//   }

//   // Делаем запрос за новым access токеном в API обновления токена
//   const refreshResult = await baseQuery(
//     {
//       url: '/user/token/refresh/',
//       method: 'POST',
//       body: {
//         refresh: authentication.refresh,
//       },
//     },
//     api,
//     extraOptions,
//   )

//   if (!refreshResult.data.access) {
//     return forceLogout()
//   }

//   api.dispatch(
//     setAuthentication({ ...authentication, access: refreshResult.data.access }),
//   )
//   sessionStorage.setItem('access', refreshResult.data.access)

//   const retryResult = await baseQuery(args, api, extraOptions)

//   if (retryResult?.error?.status === 401) {
//     return forceLogout()
//   }

//   return retryResult
// }

// export const playlistApi = createApi({
//   reducerPath: 'tracksListApi',
//   baseQuery: baseQueryWithReauth,
//   endpoints: (builder) => ({
//     getAllTracks: builder.query({
//       query: () => ({
//         url: '/catalog/track/all/',
//       }),
//       providesTags: (result = []) => [
//         ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
//         DATA_TAG,
//       ],
//     }),

//     getCatalogSection: builder.query({
//       query: () => ({
//         url: '/catalog/selection/',
//       }),
//     }),
//     getCatalogSectionTracks: builder.query({
//       query: (id) => ({
//         url: `/catalog/selection/${id}`,
//       }),
//       providesTags: (result = []) => [
//         ...(Array.isArray(result)
//           ? result.map(({ id }) => ({ type: DATA_TAG.type, id }))
//           : []),
//         DATA_TAG,
//       ],
//     }),

//     getFavoritesTracks: builder.query({
//       query: () => ({
//         url: '/catalog/track/favorite/all/',
//       }),
//       providesTags: (result = []) => [
//         ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
//         DATA_TAG,
//       ],
//       transformResponse: (response) => {
//         const transformedResponse = response.map((item) => ({
//           ...item,
//           stared_user: [JSON.parse(sessionStorage.getItem('user'))],
//         }))

//         return transformedResponse
//       },
//     }),

//     likeTrackFavorites: builder.mutation({
//       query(data) {
//         const { id } = data

//         return {
//           url: `/catalog/track/${id}/favorite/`,
//           method: 'POST',
//         }
//       },
//       invalidatesTags: [{ type: 'Tracks' }],
//     }),

//     dislikeTrackFavorites: builder.mutation({
//       query(data) {
//         const { id } = data
//         return {
//           url: `/catalog/track/${id}/favorite/`,
//           method: 'DELETE',
//         }
//       },
//       invalidatesTags: [{ type: 'Tracks' }],
//     }),
//   }),
// })

// export const {
//   useGetCatalogSectionQuery,
//   useGetCatalogSectionTracksQuery,
//   useGetFavoritesTracksQuery,
//   useLikeTrackFavoritesMutation,
//   useDislikeTrackFavoritesMutation,
//   useGetAllTracksQuery,
// } = playlistApi
