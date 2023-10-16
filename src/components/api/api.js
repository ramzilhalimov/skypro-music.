import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export async function getTracklist() {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/all/',
  )
  if (!response.ok) {
    throw new Error('Не удалось получить плейлист, попробуйте позже!')
  }

  const data = await response.json()
  return data
}

export async function getTrackById(id) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}`,
  )

  if (!response.ok) {
    throw new Error('Ошибка при получении трека')
  }
  const track = await response.json()
  return track
}
export async function SignupUser({ email, password, username }) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/signup/',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        username,
      }),
    },
  )

  const user = await response.json()
  return user
}

export async function LoginUser({ email, password }) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/login/',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    },
  )

  const newUser = await response.json()
  return newUser
}
export async function setToken({ email, password }) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/token/',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    },
  )

  const token = await response.json()
  localStorage.setItem('token', JSON.stringify(token))
}
// const retryResult = await baseQuery(args, api, extraOptions)

// if (retryResult?.error?.status === 401) {
//   return Signin()
// }

export const playlistApi = createApi({
  reducerPath: 'getFavoritesTracksApi',
  tagTypes: ['Tracks'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/track/',
  }),
  endpoints: (builder) => ({
    getFavoritesTracks: builder.query({
      query: () => ({
        url: 'favorite/all/',
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem('token')).access
          }`,
        },
      }),

      providesTags: ['Tracks'],

      transformResponse: (response) => {
        const transformedResponse = response.map((item) => ({
          ...item,
          stared_user: [JSON.parse(sessionStorage.getItem('user'))],
        }))

        return transformedResponse
      },
    }),

    likeTrackFavorites: builder.mutation({
      query: ({ id }) => ({
        url: `${id}/favorite/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem('token')).access
          }`,
        },
      }),
      invalidatesTags: [{ type: 'Tracks' }],
    }),

    dislikeTrackFavorites: builder.mutation({
      query: ({ id }) => ({
        url: `${id}/favorite/`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem('token')).access
          }`,
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
