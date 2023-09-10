import { TrackList } from '../../components/TrackList/TrackList'
import { Tracks } from '../../components/Tracks/Tracks'

export const Favorite = () => {
  return (
    <div>
      <h1> My favorite song</h1>
      <TrackList tracks={Tracks} />
    </div>
  )
}
