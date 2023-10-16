import { Outlet } from 'react-router-dom'

import { GlobalStyle } from '../main/ MainPage'
import * as S from '../../pages/main/AppStyle'

// import { useSelector } from 'react-redux'

export default function PageLayout() {
  return (
    <S.Wrapper>
      <GlobalStyle />
      <S.Container>
        <Outlet />
        <S.Footer></S.Footer>
      </S.Container>
    </S.Wrapper>
  )
}
