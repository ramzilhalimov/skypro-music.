import { Routes, Route } from 'react-router-dom'
import { Category } from './pages/category/category'
import { Favorite } from './pages/favorites/favorite'
import MainPage from './pages/main/ MainPage'
import { NotFound } from './pages/not-found/NotFound'
import { Signin } from './pages/signin/signin'
import { Signup } from './pages/signup/signup'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'

export const AppRoutes = ({ user, setUser }) => {
  const handleLogin = () => {
    localStorage.setItem('token', 'exampleToken123')
    setUser(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUser(false)
  }

  return (
    <Routes>
      <Route
        path="/signin"
        element={
          <Signin
            user={user}
            onAuthButtonClick={user ? handleLogout : handleLogin}
          />
        }
      />

      <Route path="/signup" element={<Signup />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route
          path="/"
          element={
            <MainPage
              user={user}
              onAuthButtonClick={user ? handleLogout : handleLogin}
            />
          }
        />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
