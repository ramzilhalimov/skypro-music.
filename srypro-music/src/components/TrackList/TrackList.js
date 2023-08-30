import { useState, useEffect } from 'react'
import SkeletonTrack from '../SkeletonBar/SkeletonTrack'
import { Track } from '../Track/Track'
import { TrackOne } from '../Track/TrackOne'
import { TrackTwo } from '../Track/TrackTwo'
import { TrackThree } from '../Track/TrackThree'
import { TrackFour } from '../Track/TrackFour'
import { TrackFive } from '../Track/TrackFive'
import { TrackSix } from '../Track/TrackSix'
import { TrackSeven } from '../Track/TrackSeven'
import { TrackEight } from '../Track/TrackEight'
import { TrackNine } from '../Track/TrackNine'
import { TrackTen } from '../Track/TrackTen'
import * as S from './TrackListStyle'

export function TrackList() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <S.ContentPlaylist>
      <S.PlaylistItem>
        {loading && <SkeletonTrack />}
        {!loading && <Track />}
      </S.PlaylistItem>
      <S.PlaylistItem>
        {loading && <SkeletonTrack />}
        {!loading && <TrackOne />}
      </S.PlaylistItem>

      <S.PlaylistItem>
        {loading && <SkeletonTrack />}
        {!loading && <TrackTwo />}
      </S.PlaylistItem>

      <S.PlaylistItem>
        {loading && <SkeletonTrack />}
        {!loading && <TrackThree />}
      </S.PlaylistItem>

      <S.PlaylistItem>
        {loading && <SkeletonTrack />}
        {!loading && <TrackFour />}
      </S.PlaylistItem>

      <S.PlaylistItem>
        {loading && <SkeletonTrack />}
        {!loading && <TrackFive />}
      </S.PlaylistItem>

      <S.PlaylistItem>
        {loading && <SkeletonTrack />}
        {!loading && <TrackSix />}
      </S.PlaylistItem>

      <S.PlaylistItem>
        {loading && <SkeletonTrack />}
        {!loading && <TrackSeven />}
      </S.PlaylistItem>

      <S.PlaylistItem>
        {loading && <SkeletonTrack />}
        {!loading && <TrackEight />}
      </S.PlaylistItem>

      <S.PlaylistItem>
        {loading && <SkeletonTrack />}
        {!loading && <TrackNine />}
      </S.PlaylistItem>

      <S.PlaylistItem>
        <TrackTen />
      </S.PlaylistItem>
    </S.ContentPlaylist>
  )
}
