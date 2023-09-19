
import { Track } from '../Track/Track'
import * as S from './TrackListStyle'

export function TrackList({ tracks, turnOnTrack, addTracksError }) {
  return (
    <S.ContentPlaylist>
      <p>{addTracksError}</p>
      {tracks.map((track) => {
        return <Track turnOnTrack={turnOnTrack} key={track.id} track={track} />
      })}
    </S.ContentPlaylist>
  )
}
