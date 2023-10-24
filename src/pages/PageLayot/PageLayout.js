import { Outlet } from 'react-router-dom'

import { GlobalStyle } from '../main/ MainPage'
import * as S from '../../pages/main/AppStyle'
import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer'
import { useDispatch } from 'react-redux'
import {
  setCategoryTracks,
  setFavoritesTracks,
  setPlaylist,
} from '../../store/slices/playlistSlice'
import {
  useGetCatalogSectionQuery,
  useGetFavoritesTracksQuery,
} from '../../service/playlistApi'
import { useEffect, useState } from 'react'
import { getTracklist } from '../../components/api/api'

export default function PageLayout({ loading, currentTrack }) {
  const dispatch = useDispatch()
  const { data } = useGetFavoritesTracksQuery()
  const { dataTrack } = useGetCatalogSectionQuery()
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    dispatch(setFavoritesTracks(data))

    const fetchData = async () => {
      try {
        const t = await getTracklist()
        setTracks(t)
        dispatch(setPlaylist(t))
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchData()
  }, [data, dispatch])

  useEffect(() => {
    dispatch(setCategoryTracks(dataTrack))
    const fetchData = async () => {
      try {
        const a = await getTracklist()
        setTracks(a)
        dispatch(setPlaylist(a))
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchData()
  }, [dataTrack, dispatch])

  return (
    <S.Wrapper>
      <GlobalStyle />
      <S.Container>
        {currentTrack ? (
          <AudioPlayer loading={loading} tracks={tracks} />
        ) : null}
        <Outlet />
        <S.Footer></S.Footer>
      </S.Container>
    </S.Wrapper>
  )
}
