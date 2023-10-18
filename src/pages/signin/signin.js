import * as S from './signinStyle'
import { createGlobalStyle } from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getToken, refreshToken } from '../../components/api/api'
import { useUserDispatch } from '../../contex'
import { setAuthentication } from '../../store/slices/authenticationSlice'
import { useDispatch } from 'react-redux'
import { useLoginUserMutation } from '../../service/authApi'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("../fonts/StratosSkyeng.woff2") format("woff2"),
    url("../fonts/StratosSkyeng.woff") format("woff"),
    url("../fonts/StratosSkyeng.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
}
`

export const Signin = ({ isLoginMode = false }) => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const userDispatch = useUserDispatch()
  const navigate = useNavigate()
  const [LoginUser, { isLoading }] = useLoginUserMutation()

  const isValidateFormLogin = async () => {
    if (email === '' || password === '') {
      setError('Укажите почту/пароль')
      return false
    }
    if (email.length < 5) {
      setError('Слишком короткая почта или имя')
      return false
    }
    try {
      await LoginUser({ email, password })
      return true
    } catch (error) {
      console.error(error)
      setError('Пользователь с таким email или паролем не найден')
      return false
    }
  }
  const handleLogin = async (e) => {
    e.preventDefault()
    const isValidLoginForm = await isValidateFormLogin()
    if (isValidLoginForm) {
      const response = await LoginUser({ email, password })
      if (response?.error) {
        setError(response.error?.data?.detail)
        return
      }
      const user = response.data
      localStorage.setItem('user', JSON.stringify(user))

      const token = await getToken({ email, password })
      dispatch(
        setAuthentication({
          access: token.access,
          refresh: token.refresh,
          user: user.username,
        }),
      )

      const sessionRefreshToken = sessionStorage.getItem('refresh')
      await refreshToken(sessionRefreshToken)

      userDispatch({ type: 'setUser', payload: user })

      navigate('/')
    } else {
      isValidateFormLogin()
    }
  }

  useEffect(() => {
    setError(null)
  }, [isLoginMode, email, password])

  return (
    <S.Wrapper>
      <GlobalStyle />
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin action="#">
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
            </S.ModalLogo>

            <S.ModalInputLogin
              type="text"
              name="login"
              placeholder="Почта"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <S.ModalInputPassword
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            {error && <S.Error>{error}</S.Error>}
            <S.ModalBtnEnter disabled={isLoading} onClick={handleLogin}>
              {' '}
              {isLoading ? 'Осуществляется вход' : 'Войти'}
            </S.ModalBtnEnter>
            <Link to="/signup">
              <S.ModalBtnSignup>Зарегистрироваться</S.ModalBtnSignup>
            </Link>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  )
}
