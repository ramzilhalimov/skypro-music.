import { Outlet } from 'react-router-dom'
import { Filter } from '../../components/Filter/Filter'
import { NavMenu } from '../../components/NavMenu/NavMenu'
import { Search } from '../../components/Search/Search'
import { SideBar } from '../../components/SideBar/SideBar'
import { GlobalStyle } from '../main/ MainPage'
import * as S from '../../pages/main/AppStyle'
import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer'

export default function PageLayout({ tracks, currentTrack, loading }) {
  return (
    <S.Wrapper>
      <GlobalStyle />
      <S.Container>
        <S.Main>
          <NavMenu />
          <S.MainCenterblock>
            <Search />
            <S.CenterblockH2>Треки</S.CenterblockH2>
            <Filter tracks={tracks} />
            <S.CenterblockContent>
              <S.ContentTitle>
                <S.PlaylistTitleCol01>Трек</S.PlaylistTitleCol01>
                <S.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
                <S.PlaylistTitleCol03>АЛЬБОМ</S.PlaylistTitleCol03>
                <S.PlaylistTitleCol04>
                  <S.PlaylistTitleSvg alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                  </S.PlaylistTitleSvg>
                </S.PlaylistTitleCol04>
              </S.ContentTitle>
              <Outlet />
            </S.CenterblockContent>
          </S.MainCenterblock>
          <SideBar />
          {currentTrack ? (
            <AudioPlayer
              tracks={tracks}
              loading={loading}
              currentTrack={currentTrack}
            />
          ) : null}
        </S.Main>
        <S.Footer></S.Footer>
      </S.Container>
    </S.Wrapper>
  )
}
