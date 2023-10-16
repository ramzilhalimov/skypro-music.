import { Outlet } from 'react-router-dom'
import { useGetFavoritesTracksQuery } from '../../components/api/api'
import { GlobalStyle } from '../main/ MainPage'
import * as S from '../../pages/main/AppStyle'
import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer'
import { useDispatch } from 'react-redux'
import { setFavoritesTracks } from '../../store/slices/playlistSlice'

export default function PageLayout({ loading, currentTrack }) {
  const dispatch = useDispatch()
  const { data } = useGetFavoritesTracksQuery()
  dispatch(setFavoritesTracks(data))
  return (
    <S.Wrapper>
      <GlobalStyle />
      <S.Container>
        {currentTrack ? <AudioPlayer loading={loading} /> : null}
        <Outlet />
        <S.Footer></S.Footer>
      </S.Container>
    </S.Wrapper>
  )
}
