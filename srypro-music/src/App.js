// import { user } from './components/handleLogin'
import { useEffect, useState } from 'react'
import { getTrackById, getTracklist } from './components/api/api'
import { AppRoutes } from './routes'

function App() {
  const [user, setUser] = useState(localStorage.getItem('user'))
  const [loading, setLoading] = useState(true)
  const [tracks, setTracks] = useState([])

  const [addTracksError, setAddTracksError] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)

      try {
        getTracklist().then((list) => {
          setTracks(list)
        })
      } catch (error) {
        setAddTracksError(error.message)
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const [currentTrack, setCurrentTrack] = useState(null)

  const turnOnTrack = (trackId) => {
    getTrackById(trackId).then((trackData) => {
      setCurrentTrack(trackData)
    })
  }

  return (
    <AppRoutes
      user={user}
      setUser={setUser}
      tracks={tracks}
      addTracksError={addTracksError}
      currentTrack={currentTrack}
      turnOnTrack={turnOnTrack}
      loading={loading}
    />
  )
}
export default App
