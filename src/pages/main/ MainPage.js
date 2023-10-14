import { TrackList } from '../../components/TrackList/TrackList'
import { createGlobalStyle } from 'styled-components'
import SkeletonTrack from '../../components/SkeletonBar/SkeletonTrack'

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
  font-family: 'StratosSkyeng';
  src:
    local('StratosSkyeng'),
    local('StratosSkyeng'),
    url('/public/fonts/StratosSkyeng.woff2') format('woff2'),/* Super Modern Browsers */
    url('/public/fonts/StratosSkyeng.woff') format('woff'), /* Pretty Modern Browsers */
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

function MainPage({ tracks, loading, currentTrack, addTracksError }) {
  return (
    <>
      {loading && <SkeletonTrack />}
      {!loading && (
        <TrackList
          tracks={tracks}
          currentTrack={currentTrack}
          addTracksError={addTracksError}
        />
      )}
    </>
  )
}

export default MainPage
