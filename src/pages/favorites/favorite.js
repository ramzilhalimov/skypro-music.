import { useState } from 'react'

import { NavMenu } from '../../components/NavMenu/NavMenu'
import { Search } from '../../components/Search/Search'

import { TrackList } from '../../components/TrackList/TrackList'
import * as S from '../../pages/favorites/favoritesStyle'
import { useGetFavoritesTracksQuery } from '../../service/playlistApi'

export const Favorite = () => {
  const [searchValue, setSearchValue] = useState('')

  const { data, isLoading, error } = useGetFavoritesTracksQuery()

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
          <S.CenterblockH2> Мои треки</S.CenterblockH2>
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
            {error ? (
              <h2>Не удалось загрузить мои треки</h2>
            ) : (
              <>
                {searchValue && searchMusic(searchValue, data).length === 0 ? (
                  <h2>Ничего не найдено</h2>
                ) : (
                  <TrackList
                    data={data}
                    loading={isLoading}
                    tracks={searchValue ? searchMusic(searchValue, data) : data}
                  />
                )}
              </>
            )}
          </S.CenterblockContent>
        </S.MainCenterblock>
        <S.MainSidebar></S.MainSidebar>
      </S.Main>
    </>
  )
}
