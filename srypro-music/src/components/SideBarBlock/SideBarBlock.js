import './SideBarBlock.css'

export function SideBarBlock(){
  return(
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
  )
}