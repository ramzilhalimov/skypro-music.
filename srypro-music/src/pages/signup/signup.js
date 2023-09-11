import * as S from './signupStyle'
import { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
// import { useState } from 'react'

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

export const Signup = () => {
  // const [user, setUser] = useState(null)

  // const handleLogin = () => {
  //   const token = 'token'
  //   localStorage.setItem('token', token)
  //   setUser({ login: 'taradam' })
  // }
  // const handleLogout = () => setUser(null)

  return (
    <S.Wrapper>
      <GlobalStyle />
      <S.ContainerSignup>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <a href="../">
              <S.ModalLogo>
                <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </a>
            <S.ModalInput type="text" name="login" placeholder="Почта" />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <S.ModalBtnSignupEnt class="modal__btn-signup-ent">
              <Link to="/">
                <S.ModalBtnSignupEntA
                // onClick={user ? handleLogout : handleLogin}
                >
                  Зарегистрироваться
                </S.ModalBtnSignupEntA>
              </Link>
            </S.ModalBtnSignupEnt>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignup>
    </S.Wrapper>
  )
}
