import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer'
import { NavMenu } from '../../components/NavMenu/NavMenu'
import { SideBar } from '../../components/SideBar/SideBar'
import { TrackList } from '../../components/TrackList/TrackList'
import { Filter } from '../../components/Filter/Filter'
import { Search } from '../../components/Search/Search'
import * as S from './AppStyle'
import { createGlobalStyle } from 'styled-components'
import { useState, useEffect } from 'react'
import SkeletonTrack from '../../components/SkeletonBar/SkeletonTrack'
import { Tracks } from '../../components/Tracks/Tracks'

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
  src:
    local('StratosSkyeng'),
    local('StratosSkyeng'),
    url('/public/fonts/StratosSkyeng.woff2') format('woff2'),
    url('/public/fonts/StratosSkyeng.woff') format('woff');
  font-weight: 400;
  font-style: normal;
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

function MainPage({setUser}) {

  const [loading, setLoading] = useState(true)
  const [tracks, setTracks] = useState([])

  
  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
      setTracks(Tracks)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <S.Wrapper>
      <GlobalStyle />
      <S.Container>
        <S.Main>
          <NavMenu setUser={setUser} />
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
              {!loading && <TrackList tracks={tracks} />}
            </S.CenterblockContent>
          </S.MainCenterblock>
          <SideBar />
        </S.Main>
        <AudioPlayer />
        <S.Footer></S.Footer>
      </S.Container>
    </S.Wrapper>
  )
}

export default MainPage
