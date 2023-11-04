import * as S from './AuthPageStyle'
import { createGlobalStyle } from 'styled-components'
import { useEffect, useState } from 'react'
import { SignupUser } from '../../components/api/api'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useUserDispatch } from '../../contex'
import { useLoginUserMutation } from '../../service/authApi'
import { setAuthorization } from '../../store/slices/authenticationSlice'
import { getToken, refreshToken } from '../../components/api/api'

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
  font-family: 'StratosSkyeng', sans-serif;
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
  font-family: 'StratosSkyeng';
  src: local("StratosSkyeng"), local("StratosSkyeng"), url("../fonts/StratosSkyeng.woff2") format("woff2"), url("../fonts/StratosSkyeng.woff") format("woff"), url("../fonts/StratosSkyeng.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
}

`
export default function AuthPage({ isLoginMode = false }) {
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [username, setName] = useState('')
  const dispatch = useDispatch()
  const userDispatch = useUserDispatch()
  const navigate = useNavigate()
  const [LoginUser, { isLoading }] = useLoginUserMutation()

  const isValidateForm = async () => {
    const recExp = /^(?=.*[a-zA-Z])(?=.*\d).+/
    if (email === '' || password === '') {
      setError('Укажите почту/пароль')
      return false
    }
    if (email.length < 5) {
      setError('Слишком короткая почта или имя')
      return false
    }
    if (password !== repeatPassword) {
      setError('Пароли не совпадают')
      return false
    }
    if (password.length < 8 || repeatPassword.length < 8) {
      setError('Пароль должен содержать более 4 символов')
      return false
    }
    if (password.includes('123456')) {
      setError('Пароль слишком распространен')
      return false
    }
    if (!recExp.test(password)) {
      setError('Пароль должен состоять не только из цифр')
      return false
    }

    return true
  }

  const isValidateFormLogin = () => {
    if (email === '' || password === '') {
      setError('Укажите почту/пароль')
      return false
    }
    if (email.length < 5) {
      setError('Слишком короткая почта или имя')
      return false
    }
    return true
  }

  const handleLogin = async () => {
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
        setAuthorization({
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

  const handleRegister = async (e) => {
    console.log(isValidateForm())

    e.preventDefault()
    if (!isValidateForm()) return
    try {
      const user = await SignupUser({ email, password, username })

      dispatch({ type: 'setUser', payload: user.username })
      navigate('/signin')
    } catch (error) {
      setError('Пользователь уже занят')
    }
  }

  useEffect(() => {
    setError(null)
  }, [isLoginMode, username, email, password, repeatPassword])

  return (
    <S.PageContainer>
      <GlobalStyle />
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={isLoading} onClick={handleLogin}>
                {isLoading ? 'Осуществляется вход' : 'Войти'}
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="Name"
                name="Name"
                placeholder="Имя пользователя"
                onChange={(e) => setName(e.target.value)}
              />
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={isLoading} onClick={handleRegister}>
                {isLoading
                  ? 'Осуществляется регистрация'
                  : 'Зарегистрироваться'}
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}
