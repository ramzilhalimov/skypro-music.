import './Track.css'
export function TrackFive(){
  return(
    <div className="Playlist__track track">
    <div className="Track__title">
      <div className="Track__title-image">
        <svg className="Track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="Track__title-text">
        <a className="Track__title-link" href="http://">
          Eyes on Fire
          <span className="Track__title-span">(Zeds Dead Remix)</span>
        </a>
      </div>
    </div>
    <div className="Track__author">
      <a className="Track__author-link" href="http://">
        Blue Foundation, Zeds Dead
      </a>
    </div>
    <div className="Track__album">
      <a className="Track__album-link" href="http://">
        Eyes on Fire
      </a>
    </div>
    <div className="Track__time">
      <svg className="Track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
      </svg>
      <span className="Track__time-text">5:20</span>
    </div>
  </div>
  )
}