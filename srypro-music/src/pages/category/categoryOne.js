import * as S from '../../components/TrackList/TrackListStyle'
// import { useParams } from 'react-router-dom'
// import { Tracks } from '../../components/Tracks/Tracks'
// import { TrackList } from '../../components/TrackList/TrackList'


export const CategoryOne = ({tracks}) => {
  // const params = useParams()
  // const tracks = Tracks.find((track) => track.id === Number(params.id))

  return (
    <S.ContentPlaylist>
      <h1>CategoryOne</h1>
      {tracks && tracks.map((track) => {
       <li key={track.id}/> 
       })}
    </S.ContentPlaylist>
    // <S.PlaylistItem>
    //   <S.PlaylistTrack>
    //     <S.TrackTitle>
    //       <S.TrackTitleImage>
    //         <S.TrackTitleSvg alt="music">
    //           <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
    //         </S.TrackTitleSvg>
    //       </S.TrackTitleImage>
    //       <S.TrackTitleText>
    //         <S.TrackTitleLink href="http://">
    //           {tracks.track} <S.TrackTitleSpan>{tracks.feat}</S.TrackTitleSpan>
    //         </S.TrackTitleLink>
    //       </S.TrackTitleText>
    //     </S.TrackTitle>
    //     <S.TrackAuthor>
    //       <S.TrackAuthorLink href="http://">{tracks.author}</S.TrackAuthorLink>
    //     </S.TrackAuthor>
    //     <S.TrackAlbum>
    //       <S.TrackAlbumLink href="http://">{tracks.album}</S.TrackAlbumLink>
    //     </S.TrackAlbum>
    //     <S.TrackTime>
    //       <S.TrackTimeSvg alt="time">
    //         <use xlinkHref={tracks.like}></use>
    //       </S.TrackTimeSvg>
    //       <S.TrackTimeText>{TrackList .time}</S.TrackTimeText>
    //     </S.TrackTime>
    //   </S.PlaylistTrack>
    // </S.PlaylistItem>
  )
}
