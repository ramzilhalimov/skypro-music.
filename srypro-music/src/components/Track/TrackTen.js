import './Track.css'
export function TrackTen() {
  return (
    <div className="Playlist__track track">
      <div className="Track__title">
        <div className="Track__title-image">
          <svg className="Track__title-svg" alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
          </svg>
        </div>
        <div className="Track__title-text">
          <a className="Track__title-link" href="http://">
            <span className="Track__title-span"></span>
          </a>
        </div>
      </div>
      <div className="Track__author">
        <a className="Track__author-link" href="http://"></a>
      </div>
      <div className="Track__album">
        <a className="Track__album-link" href="http://"></a>
      </div>
      <div className="Track__time">
        <svg className="Track__time-svg" alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
        </svg>
        <span className="Track__time-text"></span>
      </div>
    </div>
  )
}
