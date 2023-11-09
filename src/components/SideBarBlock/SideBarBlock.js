import * as S from './SideBarBlockStyle'
import { NavLink } from 'react-router-dom'

function PlaylistsItem(props) {
  return (
    <S.PlaylistsItem>
      <NavLink to={`${props.path}/${props.id}`}>
        <S.PlaylistsItemLink>
          <S.PlaylistsItemImage src={props.imageUrl} alt="day's playlist" />
        </S.PlaylistsItemLink>
      </NavLink>
    </S.PlaylistsItem>
  )
}

export function SideBarBlock() {
  const playlistItems = [
    {
      id: 1,
      path: '/catalog/selection',
      imgUrl: '../img/playlist01.png',
      name: 'Классическая музыка',
    },
    {
      id: 2,
      path: '/catalog/selection',
      imgUrl: '../img/playlist02.png',
      name: 'Электронная музыка',
    },
    {
      id: 3,
      path: '/catalog/selection',
      imgUrl: '../img/playlist03.png',
      name: 'Рок',
    },
  ]
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        {playlistItems.map((playlist) => {
          const { id, path, imgUrl, name } = playlist
          return (
            <PlaylistsItem
              key={id}
              id={id}
              path={path}
              imageUrl={imgUrl}
              name={name}
            />
          )
        })}
      </S.SidebarList>
    </S.SidebarBlock>
  )
}
