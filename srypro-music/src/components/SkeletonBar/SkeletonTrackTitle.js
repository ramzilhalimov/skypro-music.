import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import * as S from './SkeletonStyle'

const SkeletonTrackTitle = () => {
  return (
    <SkeletonTheme color="grey" highlightColor="#444">
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitleText>
          <Skeleton height={35} width={430} />
        </S.TrackTitleText>
        <S.TrackAuthor>
          <Skeleton height={35} width={321} />
        </S.TrackAuthor>
        <S.TrackAlbum>
          <Skeleton height={35} width={245} />
        </S.TrackAlbum>
      </S.PlaylistTrack>
    </S.PlaylistItem>
    </SkeletonTheme>
  )
}
export default SkeletonTrackTitle
