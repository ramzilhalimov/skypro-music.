// import { user } from './components/handleLogin'
import { useEffect, useReducer, useState } from 'react'

import { getTracklist } from './components/api/api'
import { reducer, UserContext, UserDispatchContext } from './contex'
import { GlobalStyle } from './pages/main/ MainPage'
import { AppRoutes } from './routes'
import * as S from './pages/main/AppStyle'
import { useDispatch, useSelector } from 'react-redux'
import { setPlaylist } from './store/slices/playlistSlice'

function App() {
  const dispatchStore = useDispatch()
  const currentTrack = useSelector((state) => state.track)
  // const [user, setUser] = useState(localStorage.getItem('user'))
  const [loading, setLoading] = useState(true)
  const [tracks, setTracks] = useState([])
  const [addTracksError, setAddTracksError] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)

      try {
        getTracklist().then((list) => {
          setTracks(list)
          dispatchStore(setPlaylist(list))
        })
      } catch (error) {
        setAddTracksError(error.message)
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const userState = {
    userName: JSON.parse(localStorage.getItem('user')) || '',
  }

  const [state, dispatch] = useReducer(reducer, userState)
  return (
    <UserContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        <S.App>
          <GlobalStyle />
          <AppRoutes
            tracks={tracks}
            addTracksError={addTracksError}
            currentTrack={currentTrack}
            loading={loading}
          />
        </S.App>
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  )
}
export default App
