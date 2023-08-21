import './Search.css'
export function Search (){
  return(
    <div className="Centerblock__search search">
    <svg className="Search__svg">
      <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
    </svg>
    <input
      className="Search__text"
      type="search"
      placeholder="Поиск"
      name="search"
    />
  </div>
  )
}