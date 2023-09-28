import { useNavigate } from 'react-router-dom'
import * as S from './AuthPageStyle'
import { useEffect, useState } from 'react'

import { LoginUser, SignupUser } from '../../components/api/api'
import { useUserDispatch } from '../../contex'

export default function AuthPage({ isLoginMode = false }) {
  const [error, setError] = useState(null)
  const [username, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [isValidateForm, setIsValidateForm] = useState(null)
  const dispatch = useUserDispatch()
  const navigate = useNavigate()

  const handleLogin = async ({ email, password }) => {
    if (setIsValidateForm()) {
      try {
        const user = await LoginUser({ email, password })
        navigate('/')
        dispatch({ type: 'setUser', payload: user.username })
        localStorage.setItem('user', JSON.stringify(user))
      } catch (error) {
        setError('Неизвестная ошибка  при входе')
      }
    } else {
      setError('Некорректные данные в форме')
    }
  }

  const handleRegister = async () => {
    try {
      const user = await SignupUser({ email, password, username })
      navigate('/')
      dispatch({ type: 'setUser', payload: user.username })
      localStorage.setItem('user', JSON.stringify(user))
    } catch (error) {
      setError('Неизвестная ошибка регистрации')
    }
  }

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null)
  }, [isLoginMode, email, password, repeatPassword])

  return (
    <S.PageContainer>
      <S.ModalForm>
        <S.ModalLogo>
          <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
        </S.ModalLogo>

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
              <S.PrimaryButton onClick={() => handleLogin({ email, password })}>
                Войти
              </S.PrimaryButton>

              <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="name"
                name="name"
                placeholder="Имя пользователя"
                value={username}
                onChange={(event) => {
                  setName(event.target.value)
                  {
                    isValidateForm
                  }
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
              <S.PrimaryButton onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}
