import SkeletonTrack from '../../components/SkeletonBar/SkeletonTrack'
import { TrackList } from '../../components/TrackList/TrackList'
// import * as S from '../../pages/main/AppStyle'

export const Favorite = ({ loading, tracks, currentTrack }) => {
  return (
    <>
      {loading && <SkeletonTrack />}
      {!loading && <TrackList tracks={tracks} currentTrack={currentTrack} />}
    </>
  )
}
