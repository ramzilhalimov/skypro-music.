import { useGetFavoritesTracksQuery } from '../../components/api/api'
import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer'
import { Filter } from '../../components/Filter/Filter'
import { NavMenu } from '../../components/NavMenu/NavMenu'
import { Search } from '../../components/Search/Search'
import { SideBar } from '../../components/SideBar/SideBar'
import SkeletonTrack from '../../components/SkeletonBar/SkeletonTrack'
import { TrackList } from '../../components/TrackList/TrackList'
// import SkeletonTrack from '../../components/SkeletonBar/SkeletonTrack'
// import { TrackList } from '../../components/TrackList/TrackList'
import * as S from '../../pages/main/AppStyle'

export const Favorite = ({ loading, currentTrack, tracks, addTracksError }) => {
  const { data } = useGetFavoritesTracksQuery()

  console.log(data)
  return (
    <>
      <S.Main>
        <NavMenu />
        <S.MainCenterblock>
          <Search />
          <S.CenterblockH2> Мои треки</S.CenterblockH2>
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
