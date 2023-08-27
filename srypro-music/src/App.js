
import './App.css'
import { AudioPlayer } from './components/AudioPlayer/AudioPlayer'
import { NavMenu } from './components/NavMenu/NavMenu'
import { SideBar } from './components/SideBar/SideBar'
import { TrackList } from './components/TrackList/TrackList'
import { Filter } from './components/Filter/Filter'
import { Search } from './components/Search/Search'
function App() {
  return (
        <div className="Wrapper">
          <div className="Container">
            <main className="Main">
             <NavMenu/>
              <div className="Main__centerblock centerblock">
               <Search/>
                <h2 className="Centerblock__h2">Треки</h2>
               <Filter/>
                <div className="Centerblock__content">
                  <div className="Content__title playlist-title">
                    <div className="Playlist-title__col col01">Трек</div>
                    <div className="Playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                    <div className="Playlist-title__col col03">АЛЬБОМ</div>
                    <div className="Playlist-title__col col04">
                      <svg className="Playlist-title__svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                      </svg>
                    </div>
                  </div>
                 <TrackList/>
                </div>
              </div>
              <SideBar/>
            </main>
           <AudioPlayer/>
            <footer className="Footer"></footer>
          </div>
        </div>
  )
}

export default App
