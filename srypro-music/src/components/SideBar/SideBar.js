import { useState, useEffect } from 'react'
import SkeletonBar from '../SkeletonBar/SkeletonBar'
import { SideBarBlock } from '../SideBarBlock/SideBarBlock'
import * as S from './SideBarStyle'

export function SideBar() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      {loading && <SkeletonBar />}
      {!loading && <SideBarBlock />}
    </S.MainSidebar>
  )
}
