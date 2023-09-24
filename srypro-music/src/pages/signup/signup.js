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
  const dispatch = useUserDispatch()
  const navigate = useNavigate()

  const handleRegister = async (event) => {
    event.preventDefault()
    if (password === repeatPassword) {
      const user = await SignupUser({ email, password, username })
      dispatch({ type: 'setUser', payload: user.username })
      setError('Неизвестная ошибка регистрации')
      navigate('/')
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
              onChange={(event) => {
                setName(event.target.value)
              }}
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
              name="password"
              placeholder="Повторите пароль"
              value={repeatPassword}
              onChange={(event) => {
                setRepeatPassword(event.target.value)
              }}
            />
            <S.ModalBtnSignupEnt className="modal__btn-signup-ent">
              {error && <S.Error>{error}</S.Error>}
              <S.ModalBtnSignupEntA onClick={handleRegister}>
                Зарегистрироваться
              </S.ModalBtnSignupEntA>
            </S.ModalBtnSignupEnt>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignup>
    </S.Wrapper>
  )
}
