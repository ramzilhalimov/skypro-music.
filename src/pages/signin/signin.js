import * as S from './signinStyle'
import { createGlobalStyle } from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { LoginUser } from '../../components/api/api'
import { useUserDispatch } from '../../contex'

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
  // localStorage.clear()
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useUserDispatch()
  const navigate = useNavigate()
  const [isUserLoading, setIsUserLoading] = useState(false)

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
      try {
        setIsUserLoading(true)
        const newUser = await LoginUser({ email, password })
        setIsUserLoading(false)
        dispatch({ type: 'setUser', payload: newUser.username })
        localStorage.setItem('user', JSON.stringify(newUser.username))
        navigate('/')
      } catch (error) {
        isValidateFormLogin()
      }
    } else {
      isValidateFormLogin({ email, password })
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
            <S.ModalBtnEnter disabled={isUserLoading} onClick={handleLogin}>
              Войти
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
