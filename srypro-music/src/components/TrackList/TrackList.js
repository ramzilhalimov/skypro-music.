import { Track } from '../Track/Track'
import * as S from './TrackListStyle'

export function TrackList(props) {
  return (
    <S.ContentPlaylist>
      {props.tracks.map((track) => {
        return <Track key={track.id} track={track} />
      })}
    </S.ContentPlaylist>
  )
}
