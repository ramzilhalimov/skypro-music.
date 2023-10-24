import { useEffect, useState } from 'react'
import { TrackList } from '../../components/TrackList/TrackList'
import { createGlobalStyle } from 'styled-components'
import SkeletonTrack from '../../components/SkeletonBar/SkeletonTrack'
import { SideBar } from '../../components/SideBar/SideBar'
import { Search } from '../../components/Search/Search'
import { NavMenu } from '../../components/NavMenu/NavMenu'
import { Filter } from '../../components/Filter/Filter'
import * as S from '../../pages/main/AppStyle'
import { useGetAllTracksQuery } from '../../service/playlistApi'
import { setPlaylist } from '../../store/slices/playlistSlice'
import { compare, createArrayOfAuthors } from '../../components/utils/utils'
import { useDispatch } from 'react-redux'
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

function MainPage({ loading, currentTrack }) {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')
  const [tracks, setTracks] = useState([])
  const [defaultPlaylist, setDefaultPlaylist] = useState([])
  const [activeSortYear, setAciveSortYear] = useState('По умолчанию')
  const [activeFilterGenre, setAciveFilterGenre] = useState([])
  const [isActiveFiltersGenre, setIsActiveFiltersGenre] = useState([
    { id: 1, isActive: false },
    { id: 2, isActive: false },
    { id: 3, isActive: false },
  ])
  const [filterAuthor, setFilterAuthor] = useState([])
  const { data, isLoading, error } = useGetAllTracksQuery()

  useEffect(() => {
    if (!isLoading && !error) {
      setTracks(data)
      setDefaultPlaylist(data)
      setFilterAuthor(createArrayOfAuthors(data))
      dispatch(setPlaylist(data))
    }
  }, [data, isLoading, error])

  useEffect(() => {
    let newPlaylist = defaultPlaylist.slice(0)

    if (activeSortYear === 'Сначала новые') {
      newPlaylist = newPlaylist?.sort(compare).slice(0)
    } else if (activeSortYear === 'Сначала старые') {
      newPlaylist = newPlaylist?.sort(compare).reverse().slice(0)
    }

    if (activeFilterGenre.length !== 0) {
      let resultFilter = []
      activeFilterGenre.forEach((genre) => resultFilter.push(...genre.items))
      resultFilter = [...new Set(resultFilter)]
      newPlaylist = newPlaylist.filter((music) =>
        resultFilter.find(({ id }) => music.id === id),
      )
    }

    const activeFilterAuthorList = filterAuthor.filter((item) => item.isActive)
    if (activeFilterAuthorList.length !== 0) {
      newPlaylist = newPlaylist.filter((music) =>
        activeFilterAuthorList.find(({ author }) => music.author === author),
      )
    }

    setTracks(newPlaylist)
    dispatch(setPlaylist(newPlaylist))
  }, [activeSortYear, activeFilterGenre, filterAuthor])

  const searchMusic = (searchValue, list) =>
    list.filter(({ name }) =>
      name.toLowerCase().includes(searchValue.toLowerCase()),
    )
  return (
    <>
      <S.Main>
        <NavMenu />
        <S.MainCenterblock>
          <Search setSearchValue={setSearchValue} />
          <S.CenterblockH2>Треки</S.CenterblockH2>
          <Filter
            activeSortYear={activeSortYear}
            setAciveSortYear={setAciveSortYear}
            activeFilterGenre={activeFilterGenre}
            setAciveFilterGenre={setAciveFilterGenre}
            isActiveFiltersGenre={isActiveFiltersGenre}
            setIsActiveFiltersGenre={setIsActiveFiltersGenre}
            filterAuthor={filterAuthor}
            setFilterAuthor={setFilterAuthor}
          />
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

            {searchValue && searchMusic(searchValue, tracks).length === 0 ? (
              <h2>Ничего не найдено</h2>
            ) : (
              <>
                {!loading && (
                  <TrackList
                    tracks={
                      searchValue ? searchMusic(searchValue, tracks) : tracks
                    }
                    currentTrack={currentTrack}
                  />
                )}
              </>
            )}
          </S.CenterblockContent>
        </S.MainCenterblock>
        <SideBar />
      </S.Main>
    </>
  )
}

export default MainPage
