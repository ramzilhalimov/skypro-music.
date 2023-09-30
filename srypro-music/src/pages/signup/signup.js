import * as S from './signupStyle'
import { createGlobalStyle } from 'styled-components'
import { useEffect, useState } from 'react'
import { SignupUser } from '../../components/api/api'

import { useNavigate } from 'react-router-dom'
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

export const Signup = ({ isLoginMode = false }) => {
  const [error, setError] = useState(null)
  const [username, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [isNewUserLoading, setIsNewUserLoading] = useState(false)

  const dispatch = useUserDispatch()
  const navigate = useNavigate()

  const isValidateFormSignup = async () => {
    if (email === '' || password === '') {
      setError('Укажите почту/пароль')
      return false
    }
    if (password != repeatPassword) {
      setError('Пароли не совпадают')
      return false
    }
    try {
      await SignupUser({ email, password })
      return true
    } catch (error) {
      setError('Пользователь с таким именем уже существует')
      return false
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    const isValidForm = await isValidateFormSignup()
    if (isValidForm) {
      try {
        setIsNewUserLoading(true)
        const user = await SignupUser({ email, password, username })
        setIsNewUserLoading(false)
        navigate('/')
        dispatch({ type: 'setUser', payload: user.username })
        // localStorage.setItem('user', JSON.stringify(user))
      } catch (error) {
        isValidateFormSignup()
      }
    } else {
      isValidateFormSignup()
    }
  }

  useEffect(() => {
    setError(null)
  }, [isLoginMode, username, email, password, repeatPassword])

  return (
    <S.Wrapper>
      <GlobalStyle />
      <S.ContainerSignup>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
            <S.ModalInput
              type="name"
              name="name"
              placeholder="Имя пользователя"
              value={username}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />

            <S.ModalInput
              type="text"
              name="login"
              placeholder="Почта"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <p>{error}</p>

            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <p>{error}</p>

            <S.ModalInput
              type="password"
              name="password"
              placeholder="Повторите пароль"
              value={repeatPassword}
              onChange={(e) => {
                setRepeatPassword(e.target.value)
              }}
            />
            {error && <S.Error>{error}</S.Error>}
            <S.ModalBtnSignupEnt className="modal__btn-signup-ent">
              <S.ModalBtnSignupEntA
                disabled={isNewUserLoading}
                onClick={handleRegister}
              >
                Зарегистрироваться
              </S.ModalBtnSignupEntA>
            </S.ModalBtnSignupEnt>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignup>
    </S.Wrapper>
  )
}
