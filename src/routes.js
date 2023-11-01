import { Routes, Route } from 'react-router-dom'
import { Category } from './pages/category/category'
import { Favorite } from './pages/favorites/favorite'
import MainPage from './pages/main/ MainPage'
import { NotFound } from './pages/not-found/NotFound'
import { Signin } from './pages/signin/signin'
import { Signup } from './pages/signup/signup'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
// import { useUser } from './contex'
import PageLayout from './pages/PageLayot/PageLayout'

export const AppRoutes = ({ tracks, currentTrack, loading }) => {
  const name = JSON.parse(localStorage.getItem('user'))

  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(name?.username)} />}>
        <Route
          path="/"
          element={
            <PageLayout
              tracks={tracks}
              loading={loading}
              currentTrack={currentTrack}
            />
          }
        >
          <Route
            index
            element={
              <MainPage
                tracks={tracks}
                loading={loading}
                currentTrack={currentTrack}
              />
            }
          />
          <Route path="/favorite" element={<Favorite tracks={tracks} />} />
          <Route path="/catalog/selection/:id" element={<Category />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
