// import { user } from './components/handleLogin'

import { useState } from 'react'
import { AppRoutes } from './routes'

function App() {
  const [ setUser] = useState()

  const token = () => {
    const token = 'token'
    localStorage.setItem('token', token)
    setUser({ login: 'taradam' })
  }

  return <AppRoutes user={token} setUser={setUser} />
}
export default App
