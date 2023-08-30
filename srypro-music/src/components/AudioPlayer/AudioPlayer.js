import './AudioPlayer.css'
export function AudioPlayer() {
  return (
    <div className="Bar">
    <div className="Bar__content">
      <div className="Bar__player-progress"></div>
      <div className="Bar__player-block">
        <div className="Bar__player player">
          <div className="Player__controls">
            <div className="Player__btn-prev">
              <svg className="Player__btn-prev-svg" alt="prev">
                <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
              </svg>
            </div>
            <div className="Player__btn-play _btn">
              <svg className="Player__btn-play-svg" alt="play">
                <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
              </svg>
            </div>
            <div className="Player__btn-next">
              <svg className="Player__btn-next-svg" alt="next">
                <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
              </svg>
            </div>
            <div className="Player__btn-repeat _btn-icon">
              <svg className="Player__btn-repeat-svg" alt="repeat">
                <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
              </svg>
            </div>
            <div className="Player__btn-shuffle _btn-icon">
              <svg className="Player__btn-shuffle-svg" alt="shuffle">
                <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
              </svg>
            </div>
          </div>

          <div className="Player__track-play track-play">
            <div className="Track-play__contain">
              <div className="Track-play__image">
                <svg className="Track-play__svg" alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div className="Track-play__author">
                <a className="Track-play__author-link" href="http://">
                  Ты та...
                </a>
              </div>
              <div className="Track-play__album">
                <a className="Track-play__album-link" href="http://">
                  Баста
                </a>
              </div>
            </div>

            <div className="Track-play__like-dis">
              <div className="Track-play__like _btn-icon">
                <svg className="Track-play__like-svg" alt="like">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
              </div>
              <div className="Track-play__dislike _btn-icon">
                <svg
                  className="Track-play__dislike-svg"
                  alt="dislike"
                >
                  <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="Bar__volume-block volume">
          <div className="Volume__content">
            <div className="Volume__image">
              <svg className="Volume__svg" alt="volume">
                <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
              </svg>
            </div>
            <div className="Volume__progress _btn">
              <input
                className="Volume__progress-line _btn"
                type="range"
                name="range"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}