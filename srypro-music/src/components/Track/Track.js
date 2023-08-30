import './Track.css'
export function Track(){
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
            Guilt <span className="Track__title-span"></span>
          </a>
        </div>
      </div>
      <div className="Track__author">
        <a className="Track__author-link" href="http://">
          Nero
        </a>
      </div>
      <div className="Track__album">
        <a className="Track__album-link" href="http://">
          Welcome Reality
        </a>
      </div>
      <div className="Track__time">
        <svg className="Track__time-svg" alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
        </svg>
        <span className="Track__time-text">4:44</span>
      </div>
    </div>
  
  )
}