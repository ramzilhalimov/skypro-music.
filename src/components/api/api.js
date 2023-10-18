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
  try {
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
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message)
    }

    const newUser = await response.json()
    return newUser
  } catch (error) {
    console.error('Ошибка входа:', error.message)
    return { errorMessage: 'Ошибка входа' }
  }
}
function saveToken(tokenObject) {
  sessionStorage.setItem('access', tokenObject.access)
  sessionStorage.setItem('refresh', tokenObject.refresh)
}

export async function getToken({ email, password }) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/token/',
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    },
  )
    .then((response) => response.json())
    .then((data) => {
      saveToken(data)
      console.log('Token saved successfully')
      return data
    })
    .catch((error) => {
      console.error('Error fetching token:', error)
      throw error
    })
  return response
}

export const refreshToken = async ({ refresh }) => {
  return await fetch(
    `https://skypro-music-api.skyeng.tech/user/token/refresh/`,
    {
      method: 'POST',
      body: JSON.stringify({
        refresh: `${refresh}`,
      }),
      headers: {
        'content-type': 'application/json',
      },
    },
  )
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.error('Error refreshing token:', error)
      throw error
    })
}
export const tokenIsExpired = (token) => {
  setTimeout(() => {
    refreshToken(token)
      .then(() => {
        console.log('Token refreshed successfully')
      })
      .catch((error) => {
        console.error('Error refreshing token:', error)
      })
  }, 200000)
}
