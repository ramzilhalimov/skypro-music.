import { Routes, Route } from 'react-router-dom'
import { CategoryOne } from './pages/category/categoryOne'
import { CategoryThree } from './pages/category/categoryThree'
import { CategoryTwo } from './pages/category/categoryTwo'
import { Favorite } from './pages/favorites/favorite'
import MainPage from './pages/main/ MainPage'
import { NotFound } from './pages/not-found/NotFound'
import { Signin } from './pages/signin/signin'
import { Signup } from './pages/signup/signup'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'

export const AppRoutes = ({user}) => {
  console.log({user});
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<ProtectedRoute isAuthenticated={Boolean(user)} />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/category/:id" element={<CategoryOne />} />
        <Route path="/category/:id" element={<CategoryTwo />} />
        <Route path="/category/:id" element={<CategoryThree />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
