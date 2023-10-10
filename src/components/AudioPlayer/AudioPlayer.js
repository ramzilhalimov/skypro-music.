import { useEffect, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCurrentTrack,
  setPlaylist,
  setPlayTrack,
  setShuffleTracks,
} from '../../store/slices/playlistSlice'

import * as S from './AudioPlayerStyle'

export const AudioPlayer = ({ loading }) => {
  const dispatch = useDispatch()
  const audioRef = useRef(null)

  // const [isPlaying, setIsPlaying] = useState(true)
  const [shuffle, setShuffle] = useState(false)
  const playlist = useSelector((state) => state.playlist)
  const currentTrack = useSelector((state) => state.track)
  const isShuffle = useSelector((state) => state.shufflePlaylist)
  const isPlaying = useSelector((state) => state.isPlaying)

  const togglePlay = () => {
    if (!isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
    dispatch(setPlayTrack(!isPlaying))
  }

  useEffect(() => {
    if (!isPlaying) togglePlay()
  }, [currentTrack?.track_file])

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60)
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
      const seconds = Math.floor(time % 60)
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
      return `${formatMinutes}:${formatSeconds}`
    }
    return '00:00'
  }

  const [loop, setLoop] = useState(false)
  const toggleLoop = () => {
    setLoop(!loop)
    audioRef.current.loop = !loop
  }

  const [volume, setVolume] = useState(1)
  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value)
    audioRef.current.volume = newVolume
    setVolume(newVolume)
  }
  const [timeProgress, setTimeProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const progressBarRef = useRef()

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value
  }
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration
    setDuration(seconds)
    progressBarRef.current.max = seconds
  }
  const handleNext = () => {
    const trackList = shuffle ? [...isShuffle] : [...playlist]
    let index = trackList.findIndex((track) => track.id === currentTrack.id)
    if (+index === trackList.length - 1) return
    index = +index + 1

    dispatch(setCurrentTrack(trackList[index].id))
  }
  const handlePrev = () => {
    if (audioRef.current?.currentTime > 5) {
      audioRef.current.currentTime = 0
      return
    }
    const trackList = shuffle ? [...isShuffle] : [...playlist]
    let index = trackList.findIndex((track) => track.id === currentTrack.id)
    if (+index === 0) return
    index = +index - 1

    dispatch(setCurrentTrack(trackList[index].id))
  }
  const handleShufflePlaylist = () => {
    setShuffle(true)
    const currentPlaylist = [...playlist]
    for (let i = currentPlaylist.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[currentPlaylist[i], currentPlaylist[j]] = [
        currentPlaylist[j],
        currentPlaylist[i],
      ]
    }
    dispatch(setShuffleTracks([...currentPlaylist]))
    dispatch(setPlaylist(currentPlaylist))
  }

  const stopShufflePlaylist = () => {
    setShuffle(false)
    dispatch(setShuffleTracks([]))
    dispatch(setPlaylist([...playlist]))
  }

  const toggleShuffle = shuffle ? stopShufflePlaylist : handleShufflePlaylist

  const endTrack = () => {
    if (!loop) {
      handleNext()
    }
  }
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarTime>
          <span>{formatTime(timeProgress)}</span>
          <span>/</span>
          <span>{formatTime(duration)}</span>
        </S.BarTime>

        <S.BarPlayerProgress onLoadedMetadata={onLoadedMetadata}>
          <S.StyledProgressInput
            type="range"
            min={0}
            max={duration}
            value={timeProgress}
            step={0.01}
            $color="#B672FF"
            ref={progressBarRef}
            timeProgress={timeProgress}
            onChange={handleProgressChange}
          />
        </S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev onClick={handlePrev}>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>

              <S.PlayerBtnPlay onClick={togglePlay}>
                <S.PlayerBtnPlaySvg alt="play">
                  {isPlaying ? (
                    <use xlinkHref="img/icon/sprite.svg#icon-pause" />
                  ) : (
                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                  )}
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>

              <S.PlayerBtnNext onClick={handleNext}>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat onClick={toggleLoop} className=" _btn-icon">
                <S.PlayerBtnRepeatSvg alt="repeat">
                  {loop ? (
                    <use xlinkHref="img/icon/sprite.svg#icon-tworepeat"></use>
                  ) : (
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                  )}
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle
                onClick={toggleShuffle}
                className="Player__btn-shuffle _btn-icon"
              >
                <S.PlayerBtnShuffleSvg alt="shuffle">
                  {shuffle ? (
                    <use xlinkHref="img/icon/sprite.svg#icon-twoshuffle"></use>
                  ) : (
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                  )}
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>

            <S.PlayerTrackPlay>
              {loading && (
                <S.TrackPlayContain>
                  <S.TrackPlayImage>
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackPlaySvg>
                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor className="skeleton-style">
                    <Skeleton width={100} height={20} />
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum className="skeleton-style">
                    <Skeleton width={100} height={20} />
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>
              )}
              {!loading && (
                <S.TrackPlayContain>
                  <audio
                    ref={audioRef}
                    onLoadedMetadata={onLoadedMetadata}
                    onTimeUpdate={() =>
                      setTimeProgress(audioRef.current.currentTime)
                    }
                    src={currentTrack.track_file}
                    autoPlay
                    style={{ volume: volume }}
                    onEnded={endTrack}
                  ></audio>
                  <S.TrackPlayImage>
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackPlaySvg>
                  </S.TrackPlayImage>

                  <S.TrackPlayAuthor>
                    <S.TrackPlayAuthorLink>
                      {currentTrack.name}
                    </S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>

                  <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink>
                      {currentTrack.author}
                    </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>
              )}
              <S.TrackPlayLikeDis>
                <S.TrackPlayLike className="Track-play__like _btn-icon">
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike className="Track-play__dislike _btn-icon">
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress className="Volume__progress _btn">
                <S.VolumeProgressLine
                  className="Volume__progress-line _btn"
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}
