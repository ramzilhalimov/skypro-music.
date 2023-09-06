import * as S from './SideBarBlockStyle'

export function SideBarBlock() {
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        <S.SidebarItem>
          <S.SidebarLink href="#">
            <S.SidebarImg src="img/playlist01.png" alt="day's playlist" />
          </S.SidebarLink>
        </S.SidebarItem>
        <S.SidebarItem>
          <S.SidebarLink href="#">
            <S.SidebarImg src="img/playlist02.png" alt="day's playlist" />
          </S.SidebarLink>
        </S.SidebarItem>
        <S.SidebarItem>
          <S.SidebarLink href="#">
            <S.SidebarImg src="img/playlist03.png" alt="day's playlist" />
          </S.SidebarLink>
        </S.SidebarItem>
      </S.SidebarList>
    </S.SidebarBlock>
  )
}
