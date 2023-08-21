import './TrackList.css'
import { Track } from "./Track"
export function TrackList(){
  return(
    <div className="Content__playlist playlist">
    <Track/>
     <div className="Playlist__item">
       <div className="Playlist__track track">
         <div className="Track__title">
           <div className="Track__title-image">
             <svg className="Track__title-svg" alt="music">
               <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
             </svg>
           </div>
           <div className="Track__title-text">
             <a className="Track__title-link" href="http://">
               Elektro{' '}
               <span className="Track__title-span"></span>
             </a>
           </div>
         </div>
         <div className="Track__author">
           <a className="Track__author-link" href="http://">
             Dynoro, Outwork, Mr. Gee
           </a>
         </div>
         <div className="Track__album">
           <a className="Track__album-link" href="http://">
             Elektro
           </a>
         </div>
         <div className="Track__time">
           <svg className="Track__time-svg" alt="time">
             <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
           </svg>
           <span className="Track__time-text">2:22</span>
         </div>
       </div>
     </div>

     <div className="Playlist__item">
       <div className="Playlist__track track">
         <div className="Track__title">
           <div className="Track__title-image">
             <svg className="Track__title-svg" alt="music">
               <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
             </svg>
           </div>
           <div className="Track__title-text">
             <a className="Track__title-link" href="http://">
               I’m Fire{' '}
               <span className="track__title-span"></span>
             </a>
           </div>
         </div>
         <div className="Track__author">
           <a className="Track__author-link" href="http://">
             Ali Bakgor
           </a>
         </div>
         <div className="Track__album">
           <a className="Track__album-link" href="http://">
             I’m Fire
           </a>
         </div>
         <div className="Track__time">
           <svg className="Track__time-svg" alt="time">
             <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
           </svg>
           <span className="Track__time-text">2:22</span>
         </div>
       </div>
     </div>

     <div className="Playlist__item">
       <div className="Playlist__track track">
         <div className="Track__title">
           <div className="Track__title-image">
             <svg className="Track__title-svg" alt="music">
               <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
             </svg>
           </div>
           <div className="Track__title-text">
             <a className="Track__title-link" href="http://">
               Non Stop
               <span className="Track__title-span">(Remix)</span>
             </a>
           </div>
         </div>
         <div className="Track__author">
           <a className="Track__author-link" href="http://">
             Стоункат, Psychopath
           </a>
         </div>
         <div className="Track__album">
           <a className="Track__album-link" href="http://">
             Non Stop
           </a>
         </div>
         <div className="Track__time">
           <svg className="Track__time-svg" alt="time">
             <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
           </svg>
           <span className="Track__time-text">4:12</span>
         </div>
       </div>
     </div>

     <div className="Playlist__item">
       <div className="Playlist__track track">
         <div className="Track__title">
           <div className="Track__title-image">
             <svg className="Track__title-svg" alt="music">
               <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
             </svg>
           </div>
           <div className="Track__title-text">
             <a className="Track__title-link" href="http://">
               Run Run
               <span className="Track__title-span">
                 (feat. AR/CO)
               </span>
             </a>
           </div>
         </div>
         <div className="Track__author">
           <a className="Track__author-link" href="http://">
             Jaded, Will Clarke, AR/CO
           </a>
         </div>
         <div className="Track__album">
           <a className="Track__album-link" href="http://">
             Run Run
           </a>
         </div>
         <div className="Track__time">
           <svg className="Track__time-svg" alt="time">
             <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
           </svg>
           <span className="Track__time-text">2:54</span>
         </div>
       </div>
     </div>

     <div className="Playlist__item">
       <div className="Playlist__track track">
         <div className="Track__title">
           <div className="Track__title-image">
             <svg className="Track__title-svg" alt="music">
               <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
             </svg>
           </div>
           <div className="Track__title-text">
             <a className="Track__title-link" href="http://">
               Eyes on Fire
               <span className="Track__title-span">
                 (Zeds Dead Remix)
               </span>
             </a>
           </div>
         </div>
         <div className="Track__author">
           <a className="Track__author-link" href="http://">
             Blue Foundation, Zeds Dead
           </a>
         </div>
         <div className="Track__album">
           <a className="Track__album-link" href="http://">
             Eyes on Fire
           </a>
         </div>
         <div className="Track__time">
           <svg className="Track__time-svg" alt="time">
             <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
           </svg>
           <span className="Track__time-text">5:20</span>
         </div>
       </div>
     </div>

     <div className="Playlist__item">
       <div className="Playlist__track track">
         <div className="Track__title">
           <div className="Track__title-image">
             <svg className="Track__title-svg" alt="music">
               <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
             </svg>
           </div>
           <div className="Track__title-text">
             <a className="Track__title-link" href="http://">
               Mucho Bien
               <span className="Track__title-span">
                 (Hi Profile Remix)
               </span>
             </a>
           </div>
         </div>
         <div className="Track__author">
           <a className="Track__author-link" href="http://">
             HYBIT, Mr. Black, Offer Nissim, Hi Profile
           </a>
         </div>
         <div className="Track__album">
           <a className="Track__album-link" href="http://">
             Mucho Bien
           </a>
         </div>
         <div className="Track__time">
           <svg className="Track__time-svg" alt="time">
             <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
           </svg>
           <span className="Track__time-text">3:41</span>
         </div>
       </div>
     </div>

     <div className="Playlist__item">
       <div className="Playlist__track track">
         <div className="Track__title">
           <div className="Track__title-image">
             <svg className="Track__title-svg" alt="music">
               <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
             </svg>
           </div>
           <div className="Track__title-text">
             <a className="Track__title-link" href="http://">
               Knives n Cherries
               <span className="Track__title-span"></span>
             </a>
           </div>
         </div>
         <div className="Track__author">
           <a className="Track__author-link" href="http://">
             minthaze
           </a>
         </div>
         <div className="Track__album">
           <a className="Track__album-link" href="http://">
             Captivating
           </a>
         </div>
         <div className="Track__time">
           <svg className="Track__time-svg" alt="time">
             <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
           </svg>
           <span className="Track__time-text">1:48</span>
         </div>
       </div>
     </div>

     <div className="Playlist__item">
       <div className="Playlist__track track">
         <div className="Track__title">
           <div className="Track__title-image">
             <svg className="Track__title-svg" alt="music">
               <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
             </svg>
           </div>
           <div className="Track__title-text">
             <a className="Track__title-link" href="http://">
               How Deep Is Your Love
               <span className="Track__title-span"></span>
             </a>
           </div>
         </div>
         <div className="Track__author">
           <a className="Track__author-link" href="http://">
             Calvin Harris, Disciples
           </a>
         </div>
         <div className="Track__album">
           <a className="Track__album-link" href="http://">
             How Deep Is Your Love
           </a>
         </div>
         <div className="Track__time">
           <svg className="Track__time-svg" alt="time">
             <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
           </svg>
           <span className="Track__time-text">3:32</span>
         </div>
       </div>
     </div>

     <div className="Playlist__item">
       <div className="Playlist__track track">
         <div className="Track__title">
           <div className="Track__title-image">
             <svg className="Track__title-svg" alt="music">
               <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
             </svg>
           </div>
           <div className="Track__title-text">
             <a className="Track__title-link" href="http://">
               Morena <span className="track__title-span"></span>
             </a>
           </div>
         </div>
         <div className="Track__author">
           <a className="Track__author-link" href="http://">
             Tom Boxer
           </a>
         </div>
         <div className="Track__album">
           <a className="Track__album-link" href="http://">
             Soundz Made in Romania
           </a>
         </div>
         <div className="Track__time">
           <svg className="Track__time-svg" alt="time">
             <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
           </svg>
           <span className="Track__time-text">3:36</span>
         </div>
       </div>
     </div>

     <div className="Playlist__item">
       <div className="Playlist__track track">
         <div className="Track__title">
           <div className="Track__title-image">
             <svg className="Track__title-svg" alt="music">
               <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
             </svg>
           </div>
           <div className="Track__title-text">
             <a className="Track__title-link" href="http://">
               <span className="Track__title-span"></span>
             </a>
           </div>
         </div>
         <div className="Track__author">
           <a className="Track__author-link" href="http://"></a>
         </div>
         <div className="Track__album">
           <a className="Track__album-link" href="http://"></a>
         </div>
         <div className="Track__time">
           <svg className="Track__time-svg" alt="time">
             <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
           </svg>
           <span className="Track__time-text"></span>
         </div>
       </div>
     </div>
   </div>
  )
}