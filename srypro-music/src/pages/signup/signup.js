import * as S from './signupStyle'
import { createGlobalStyle } from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'
import { useContext, createContext } from 'react'

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

// type  AuthContextType = {
//   isAuthenticated: boolean; // флаг, показывающий, аутентифицирован ли пользователь
//   setAuth: (auth: boolean) => void; // функция для изменения значения isAuthenticated
// };

const AuthContext = createContext({
  isAuthenticated: false,
  setAuth: () => {},
})

export const Signup = () => {
  const { setAuth } = useContext(AuthContext) // используем контекст для получения значений isAuthenticated и setAuth
  const navigate = useNavigate() // используем хук useNavigate для навигации по маршрутам
  const location = useLocation() // используем хук useLocation для получения текущего маршрута
  const from = location.state?.from?.pathname || '/'

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
              <S.ModalBtnSignupEntA
                onClick={() => {
                  setAuth(true) // устанавливаем флаг isAuthenticated в true
                  navigate(from, { replace: true }) // перенаправляем пользователя на страницу, которую он запрашивал до авторизации
                }}
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
