import { useState, useEffect } from 'react'
import SkeletonBar from '../SkeletonBar/SkeletonBar'
import { SideBarBlock } from '../SideBarBlock/SideBarBlock'
import * as S from './SideBarStyle'
import { useUser } from '../../contex'

export function SideBar({ setUser }) {
  const [loading, setLoading] = useState(false)
  const name = useUser()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>
          {JSON.stringify(name.userName)}
        </S.SidebarPersonalName>
        <S.SidebarIcon onClick={handleLogout}>
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
