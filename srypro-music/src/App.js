// import { user } from './components/handleLogin'
import { useState } from 'react'
import { AppRoutes } from './routes'

function App() {
  const [user, setUser] = useState(localStorage.getItem('token'))

  const token = () => {
    const token = 'token'
    localStorage.setItem('token', JSON.stringify(token))
    setUser({ login: 'taradam' })
  }

  return <AppRoutes user={(user, token)} setUser={setUser} />
}
export default App
