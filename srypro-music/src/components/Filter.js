import './Filter.css'
export function Filter(){
  return(
    <div className="Centerblock__filter filter">
    <div className="Filter__title">Искать по:</div>
    <div className="Filter__button button-author _btn-text">
      исполнителю
    </div>
    <div className="Filter__button button-year _btn-text">
      году выпуска
    </div>
    <div className="Filter__button button-genre _btn-text">
      жанру
    </div>
  </div>
  )
}