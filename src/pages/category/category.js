import * as S from '../../pages/category/categoryStyle'
import { TrackList } from '../../components/TrackList/TrackList'
import { NavMenu } from '../../components/NavMenu/NavMenu'
import { Search } from '../../components/Search/Search'
import { useState } from 'react'
import { useGetCatalogSectionTracksQuery } from '../../service/playlistApi'
import { useParams } from 'react-router-dom'

export const Category = () => {
  const { id } = useParams()
  const [searchValue, setSearchValue] = useState('')
  const { data, isLoading, error } = useGetCatalogSectionTracksQuery(id)

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
          <S.CenterblockH2>{data?.name}</S.CenterblockH2>
          <S.CenterblockContent>
            <S.ContentTitle>
              <S.PlaylistTitleCol01>Трек</S.PlaylistTitleCol01>
              <S.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
              <S.PlaylistTitleCol03>АЛЬБОМ</S.PlaylistTitleCol03>
              <S.PlaylistTitleCol04>
                <S.PlaylistTitleSvg alt="time">
                  <use xlinkHref="../../img/icon/sprite.svg#icon-watch"></use>
                </S.PlaylistTitleSvg>
              </S.PlaylistTitleCol04>
            </S.ContentTitle>
            {error ? (
              <h2>Не удалось загрузить мои треки</h2>
            ) : (
              <>
                {searchValue &&
                searchMusic(searchValue, data?.items).length === 0 ? (
                  <h2>Ничего не найдено</h2>
                ) : (
                  <TrackList
                    loading={isLoading}
                    tracks={
                      searchValue
                        ? searchMusic(searchValue, data?.items)
                        : data?.items
                    }
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
