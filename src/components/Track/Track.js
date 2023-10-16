import * as S from './TrackStyle'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentTrack } from '../../store/slices/playlistSlice'
import { useEffect, useState } from 'react'
import {
  useDislikeTrackFavoritesMutation,
  useLikeTrackFavoritesMutation,
} from '../api/api'

export const Track = (props) => {
  const dispatch = useDispatch()
  const [likeTrack] = useLikeTrackFavoritesMutation()
  const [dislikeTrack] = useDislikeTrackFavoritesMutation()
  const isPlaying = useSelector((state) => state.playlistSlice.isPlaying)
  const currentTrack = useSelector((state) => state.playlistSlice.track)
  const dataFavoritesTracks = useSelector(
    (state) => state.playlistSlice.favoritesTracks,
  )

  const isLike = Boolean(
    dataFavoritesTracks.find(({ id }) => id === props.track.id),
  )

  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    setIsLiked(isLike)
  }, [currentTrack])

  const handleLike = (id) => {
    setIsLiked(true)
    likeTrack({ id })
  }

  const handleDislike = (id) => {
    setIsLiked(false)
    dislikeTrack({ id }).unwrap()
  }

  const toogleLikeDislike = (id) => {
    isLiked ? handleDislike(id) : handleLike(id)
  }

  const formattedDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60)
    const seconds = durationInSeconds % 60
    const formattedDuration = `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
    return formattedDuration
  }

  const turnOnTrack = (id) => {
    dispatch(setCurrentTrack(id))
  }

  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            {currentTrack?.id === props.track.id ? (
              isPlaying ? (
                <S.TrackSvg alt="music"></S.TrackSvg>
              ) : (
                <S.TrackNoneSvg alt="music"></S.TrackNoneSvg>
              )
            ) : (
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
            )}
          </S.TrackTitleImage>
          <S.TrackTitleText>
            <S.TrackTitleLink onClick={() => turnOnTrack(props.track.id)}>
              {props.track.name}
              <S.TrackTitleSpan></S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink>{props.track.author}</S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink>{props.track.album}</S.TrackAlbumLink>
        </S.TrackAlbum>
        <S.TrackTime>
          <S.TrackTimeSvg
            onClick={() => toogleLikeDislike(props.track.id)}
            $width={'14px'}
            $height={'12px'}
            alt="like"
          >
            {isLiked ? (
              <use
                xlinkHref="/img/icon/sprite.svg#icon-like"
                fill="#ad61ff"
              ></use>
            ) : (
              <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
            )}
          </S.TrackTimeSvg>
          <S.TrackTimeText>
            {formattedDuration(props.track.duration_in_seconds)}
          </S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}
