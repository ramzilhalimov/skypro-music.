import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './SkeletonStyle'

const SkeletonTrack = () => {
  return (
    <SkeletonTheme color="#4E4E4E" highlightColor="#4E4E4E">
      <S.ContentPlaylist>
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitleText>
              <Skeleton height={45} width={430} />
            </S.TrackTitleText>
            <S.TrackAuthor>
              <Skeleton height={45} width={321} />
            </S.TrackAuthor>
            <S.TrackAlbum>
              <Skeleton height={45} width={245} />
            </S.TrackAlbum>
          </S.PlaylistTrack>
        </S.PlaylistItem>

        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitleText>
              <Skeleton height={45} width={430} />
            </S.TrackTitleText>
            <S.TrackAuthor>
              <Skeleton height={45} width={321} />
            </S.TrackAuthor>
            <S.TrackAlbum>
              <Skeleton height={45} width={245} />
            </S.TrackAlbum>
          </S.PlaylistTrack>
        </S.PlaylistItem>

        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitleText>
              <Skeleton height={45} width={430} />
            </S.TrackTitleText>
            <S.TrackAuthor>
              <Skeleton height={45} width={321} />
            </S.TrackAuthor>
            <S.TrackAlbum>
              <Skeleton height={45} width={245} />
            </S.TrackAlbum>
          </S.PlaylistTrack>
        </S.PlaylistItem>

        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitleText>
              <Skeleton height={45} width={430} />
            </S.TrackTitleText>
            <S.TrackAuthor>
              <Skeleton height={45} width={321} />
            </S.TrackAuthor>
            <S.TrackAlbum>
              <Skeleton height={45} width={245} />
            </S.TrackAlbum>
          </S.PlaylistTrack>
        </S.PlaylistItem>

        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitleText>
              <Skeleton height={45} width={430} />
            </S.TrackTitleText>
            <S.TrackAuthor>
              <Skeleton height={45} width={321} />
            </S.TrackAuthor>
            <S.TrackAlbum>
              <Skeleton height={45} width={245} />
            </S.TrackAlbum>
          </S.PlaylistTrack>
        </S.PlaylistItem>

        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitleText>
              <Skeleton height={45} width={430} />
            </S.TrackTitleText>
            <S.TrackAuthor>
              <Skeleton height={45} width={321} />
            </S.TrackAuthor>
            <S.TrackAlbum>
              <Skeleton height={45} width={245} />
            </S.TrackAlbum>
          </S.PlaylistTrack>
        </S.PlaylistItem>

        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitleText>
              <Skeleton height={45} width={430} />
            </S.TrackTitleText>
            <S.TrackAuthor>
              <Skeleton height={45} width={321} />
            </S.TrackAuthor>
            <S.TrackAlbum>
              <Skeleton height={45} width={245} />
            </S.TrackAlbum>
          </S.PlaylistTrack>
        </S.PlaylistItem>

        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitleText>
              <Skeleton height={45} width={430} />
            </S.TrackTitleText>
            <S.TrackAuthor>
              <Skeleton height={45} width={321} />
            </S.TrackAuthor>
            <S.TrackAlbum>
              <Skeleton height={45} width={245} />
            </S.TrackAlbum>
          </S.PlaylistTrack>
        </S.PlaylistItem>

        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitleText>
              <Skeleton height={45} width={430} />
            </S.TrackTitleText>
            <S.TrackAuthor>
              <Skeleton height={45} width={321} />
            </S.TrackAuthor>
            <S.TrackAlbum>
              <Skeleton height={45} width={245} />
            </S.TrackAlbum>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      </S.ContentPlaylist>
    </SkeletonTheme>
  )
}
export default SkeletonTrack
