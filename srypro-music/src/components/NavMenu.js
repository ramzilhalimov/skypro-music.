import './NavMenu.css'
export function NavMenu(){
  return(
    <nav className="Main__nav nav">
    <div className="Nav__logo logo">
      <img
        className="Logo__image"
        src="img/logo.png"
        alt="logo"
      ></img>
    </div>
    <div className="Nav__burger burger">
      <span className="Burger__line"></span>
      <span className="Burger__line"></span>
      <span className="Burger__line"></span>
    </div>
    <div className="Nav__menu menu">
      <ul className="Menu__list">
        <li className="Menu__item">
          <a href="#" className="Menu__link">
            Главное
          </a>
        </li>
        <li className="Menu__item">
          <a href="#" className="Menu__link">
            Мой плейлист
          </a>
        </li>
        <li className="Menu__item">
          <a href="../signin.html" className="Menu__link">
            Войти
          </a>
        </li>
      </ul>
    </div>
  </nav>
  );
}