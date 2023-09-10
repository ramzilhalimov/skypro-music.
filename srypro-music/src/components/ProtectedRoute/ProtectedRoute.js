import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState  } from "react";

// type AuthContextType = {
//   isAuthenticated: boolean; // флаг, показывающий, аутентифицирован ли пользователь
//   setAuth: (auth: boolean) => void; // функция для изменения значения isAuthenticated
// };

//  export const AuthContext = createContext({
//   isAuthenticated: false,
//   setAuth: () => { },
// });

export const ProtectedRoute = () => {
  // if (!isAllowed) {
  //   return <Navigate to={redirectPath} replace={true} />;
  // }

  // return  <Outlet />;;
  
  const [ isAuthenticated, setIsAuthenticated ] = useState(false) // используем контекст для получения значения isAuthenticated
  const location = useLocation(); // получаем текущий маршрут с помощью хука useLocation()

     useEffect(() => {
      const user = localStorage.getItem('user' )
      localStorage.user = 'token'
      if (user) {
        setIsAuthenticated(true)
      }
    }, [])
  return (
    // если пользователь авторизован, то рендерим дочерние элементы текущего маршрута, используя компонент Outlet
    isAuthenticated === true ?
      <Outlet />
      // если пользователь не авторизован, то перенаправляем его на маршрут /login с помощью компонента Navigate
      // свойство replace указывает, что текущий маршрут будет заменен на новый, чтобы пользователь не мог вернуться
      // обратно, используя кнопку "назад" в браузере.
      :
      <Navigate to="/signup" state={{ from: location }} replace />
  );
};