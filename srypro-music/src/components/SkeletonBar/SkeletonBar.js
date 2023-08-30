// import React from "react"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonBar = () => {
  return (
    <SkeletonTheme color="grey" highlightColor="#444">
      <div className="Sidebar__block">
      <div className="Sidebar__item">
        <Skeleton height={150} width={250} />
      </div>
      <div className="Sidebar__item">
        <Skeleton height={150} width={250} />
      </div>
      <div className="Sidebar__item">
        <Skeleton height={150} width={250}  />
      </div>
      </div>
    </SkeletonTheme>
  )
}
export default SkeletonBar
