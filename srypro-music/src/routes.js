import { Routes, Route } from 'react-router-dom'
import { Category } from './pages/category/category'
import { Favorite } from './pages/favorites/favorite'
import MainPage from './pages/main/ MainPage'
import { NotFound } from './pages/not-found/NotFound'
import { Signin } from './pages/signin/signin'
import { Signup } from './pages/signup/signup'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { useEffect } from 'react'

export const AppRoutes = ({ user, setUser }) => {
  useEffect(() => {
    const registeredUser = localStorage.getItem('user')
    if (registeredUser) {
      setUser(JSON.parse(JSON.stringify(registeredUser)))
    }
  }, [])

  return (
    <Routes>
      <Route path="/signin" element={<Signin setUser={setUser} />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<MainPage setUser={setUser} />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
