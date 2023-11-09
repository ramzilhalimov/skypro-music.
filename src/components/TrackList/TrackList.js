import { Track } from '../Track/Track'
import * as S from './TrackListStyle'

export function TrackList({ tracks, addTracksError }) {
  return (
    <S.ContentPlaylist>
      <p>{addTracksError}</p>
      {tracks?.map((track) => {
        return <Track key={track.id} track={track} tracks={tracks} />
      })}
    </S.ContentPlaylist>
  )
}
