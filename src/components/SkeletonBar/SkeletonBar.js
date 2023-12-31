import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import * as S from './SkeletonStyle'

const SkeletonBar = () => {
  return (
    <SkeletonTheme color="grey" highlightColor="#444">
      <S.SidebarBlock>
        <S.SidebarItem>
          <Skeleton height={150} width={250} />
        </S.SidebarItem>
        <S.SidebarItem>
          <Skeleton height={150} width={250} />
        </S.SidebarItem>
        <S.SidebarItem>
          <Skeleton height={150} width={250} />
        </S.SidebarItem>
      </S.SidebarBlock>
    </SkeletonTheme>
  )
}
export default SkeletonBar
