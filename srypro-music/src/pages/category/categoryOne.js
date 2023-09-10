import * as S from '../../components/TrackList/TrackListStyle'


export const CategoryOne = ({ tracks }) => {
  return (
    <S.ContentPlaylist>
      <h1>CategoryOne</h1>
      {tracks && tracks.map((track) => {
       <li key={track.id}/>
      })}
    </S.ContentPlaylist>
  )
}
