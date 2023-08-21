import './SideBar.css'
export function SideBar(){
  return(
    <div className="Main__sidebar sidebar">
                <div className="Sidebar__personal">
                  <p className="Sidebar__personal-name">Sergey.Ivanov</p>
                  <div className="Sidebar__icon">
                    <svg alt="logout">
                      <use xlinkHref="img/icon/sprite.svg#logout"></use>
                    </svg>
                  </div>
                </div>
                <div className="Sidebar__block">
                  <div className="Sidebar__list">
                    <div className="Sidebar__item">
                      <a className="Sidebar__link" href="#">
                        <img
                          className="Sidebar__img"
                          src="img/playlist01.png"
                          alt="day's playlist"
                        />
                      </a>
                    </div>
                    <div className="Sidebar__item">
                      <a className="Sidebar__link" href="#">
                        <img
                          className="Sidebar__img"
                          src="img/playlist02.png"
                          alt="day's playlist"
                        />
                      </a>
                    </div>
                    <div className="Sidebar__item">
                      <a className="Sidebar__link" href="#">
                        <img
                          className="Sidebar__img"
                          src="img/playlist03.png"
                          alt="day's playlist"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
  )
}