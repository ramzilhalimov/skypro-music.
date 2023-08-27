import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonTrack = () => {
  return (
    <SkeletonTheme color="#4E4E4E" highlightColor="#4E4E4E">
    <div className="Playlist__track track">
      <div className="Track__title-text">
        <Skeleton height={45} width={430} />
      </div>
      <div className="Track__author">
        <Skeleton height={45} width={321} />
      </div>
      <div className="Track__album">
      <Skeleton height={45} width={245} />
      </div>
      </div>
    </SkeletonTheme>
  )
}
export default SkeletonTrack
