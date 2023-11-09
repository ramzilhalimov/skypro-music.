// import { user } from './components/handleLogin'
import { useReducer } from 'react'

// import { getTracklist } from './components/api/api'
import { reducer, UserContext, UserDispatchContext } from './contex'
import { GlobalStyle } from './pages/main/ MainPage'
import { AppRoutes } from './routes'
import * as S from './pages/main/AppStyle'

function getInitialState() {
  const user = JSON.parse(localStorage.getItem('user')) || ''
  return { user }
}
function App() {
  const [state, dispatch] = useReducer(reducer, getInitialState)
  return (
    <UserContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        <S.App>
          <GlobalStyle />
          <AppRoutes />
        </S.App>
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  )
}
export default App
