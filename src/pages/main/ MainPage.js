import { TrackList } from '../../components/TrackList/TrackList'
import { createGlobalStyle } from 'styled-components'
import SkeletonTrack from '../../components/SkeletonBar/SkeletonTrack'
import { SideBar } from '../../components/SideBar/SideBar'
import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer'
import { Search } from '../../components/Search/Search'
import { NavMenu } from '../../components/NavMenu/NavMenu'
import { Filter } from '../../components/Filter/Filter'
import * as S from '../../pages/main/AppStyle'

export const GlobalStyle = createGlobalStyle`
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
  font-family: "StratosSkyeng";
  font-weight: 400;
  font-style: normal;
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("/fonts/StratosSkyeng.woff2") format("woff2"),
    url("/fonts/StratosSkyeng.woff") format("woff");
  
}


body {
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: #ffffff;
}
._btn-text:hover {
  border-color: #d9b6ff;
  color: #d9b6ff;
  cursor: pointer;
}

._btn-icon:hover svg {
  fill: transparent;
  stroke: #acacac;
  cursor: pointer;
}

._btn-text:active {
  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
}

._btn-icon:active svg {
  fill: transparent;
  stroke: #ffffff;
  cursor: pointer;
}

._btn-icon:active .track-play__like-svg,
._btn-icon:active .track-play__dislike-svg {
  fill: #696969;
  stroke: #ffffff;
  cursor: pointer;
}
  }
`

function MainPage({ tracks, loading, currentTrack, addTracksError }) {
  return (
    <>
      <S.Main>
        <NavMenu />
        <S.MainCenterblock>
          <Search />
          <S.CenterblockH2>Треки</S.CenterblockH2>
          <Filter />
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
            {loading && <SkeletonTrack />}
            {!loading && (
              <TrackList
                tracks={tracks}
                currentTrack={currentTrack}
                addTracksError={addTracksError}
              />
            )}
          </S.CenterblockContent>
        </S.MainCenterblock>
        <SideBar />
        {currentTrack ? <AudioPlayer loading={loading} /> : null}
      </S.Main>
    </>
  )
}

export default MainPage
