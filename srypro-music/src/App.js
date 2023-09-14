// import { user } from './components/handleLogin'
import { useState } from 'react'
import { AppRoutes } from './routes'

function App() {
  const [user, setUser] = useState(localStorage.getItem('token'))

  return <AppRoutes user={user} setUser={setUser} />
}
export default App
