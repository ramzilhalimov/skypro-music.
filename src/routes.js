import { Routes, Route } from 'react-router-dom'
import { Category } from './pages/category/category'
import { Favorite } from './pages/favorites/favorite'
import MainPage from './pages/main/ MainPage'
import { NotFound } from './pages/not-found/NotFound'
import { Signin } from './pages/signin/signin'
import { Signup } from './pages/signup/signup'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { useUser } from './contex'
import PageLayout from './pages/PageLayot/PageLayout'

export const AppRoutes = ({
  tracks,
  currentTrack,
  loading,
  addTracksError,
}) => {
  const name = useUser()

  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(name)} />}>
        <Route
          path="/"
          element={<PageLayout loading={loading} currentTrack={currentTrack} />}
        >
          <Route
            index
            element={
              <MainPage
                tracks={tracks}
                loading={loading}
                addTracksError={addTracksError}
                currentTrack={currentTrack}
              />
            }
          />
          <Route
            path="favorite"
            element={<Favorite tracks={tracks} currentTrack={currentTrack} />}
          />
          <Route path="category/:id" element={<Category />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
