
import  { useState, useEffect } from "react";
import SkeletonBar from "../SkeletonBar/SkeletonBar";
import { SideBarBlock } from '../SideBarBlock/SideBarBlock'
import './SideBar.css'
export function SideBar(){

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
                {loading && <SkeletonBar/>}
               {!loading && <SideBarBlock/>}
              </div>

  )
}