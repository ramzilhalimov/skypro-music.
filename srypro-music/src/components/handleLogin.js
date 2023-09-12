import {setUser} from 'react'

export const handleLogin = () => {
  const token = 'token'
  localStorage.setItem('token', token)
  setUser({ login: 'taradam' })
}
