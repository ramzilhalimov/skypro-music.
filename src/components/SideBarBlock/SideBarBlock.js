import * as S from './SideBarBlockStyle'
import { Link } from 'react-router-dom'

export function SideBarBlock() {
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        <S.SidebarItem>
          <Link to={'/category/${track.id}'}>
            <S.SidebarImg src="img/playlist01.png" alt="day's playlist" />
          </Link>
        </S.SidebarItem>

        <S.SidebarItem>
          <Link to={'/category/${track.id'}>
            <S.SidebarImg src="img/playlist02.png" alt="day's playlist" />
          </Link>
        </S.SidebarItem>
        <S.SidebarItem>
          <Link to={'/category/${track.id'}>
            <S.SidebarImg src="img/playlist03.png" alt="day's playlist" />
          </Link>
        </S.SidebarItem>
      </S.SidebarList>
    </S.SidebarBlock>
  )
}
