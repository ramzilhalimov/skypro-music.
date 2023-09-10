import { useState } from 'react'
import * as S from './NavMenuStyle'
import { Link } from 'react-router-dom'

export function NavMenu() {
  const [open, setOpen] = useState(false)

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogImage src="img/logo.png" alt="logo"></S.LogImage>
      </S.NavLogo>
      <S.NavBurger onClick={() => setOpen(!open)}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {open ? (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
            <Link to={'/'}>
              <S.MenuLink href="#">Главное</S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
            <Link to={'/favorite'}>
              <S.MenuLink href="#">Мой плейлист</S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="../signin.html">Войти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      ) : null}
    </S.MainNav>
  )
}
