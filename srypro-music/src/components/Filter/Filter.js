import { useState } from 'react'
import './Filter.css'
import { Tracks } from '../Tracks/Tracks'

 const genres = [ 'Рок', 'Хип-Хоп', 'Поп-музыка', 'Техно', 'Инди', 'Электроника',]
export function Filter() {
  // const [isOpen, setOpen] = useState()
 
  const [value, setValue] = useState('');

  // function handleMoreClick() {
  //   setOpen(!isOpen)
  // }
const track = Tracks.map((track) => {
   return <option key={track.index} value={track.author}>{track.author}</option>;
});

const genreTrack = genres.map((text, index) => {
  return <option key={index} value={text}>{text}</option>;
});
  return (
    <div className="Centerblock__filter filter">
      <div className="Filter__title">Искать по:</div>
     <select name="исполнителю"className="Filter__button button-author _btn-text" value={value} onChange={(event) => setValue(event.target.value)}>
     {track}
     </select>
      <select className="Filter__button button-year _btn-text">году выпуска
      <option>1994</option>
      <option>1989</option>
      <option>1991</option>
      <option>2001</option>
      </select>
      <select className="Filter__button button-genre _btn-text">жанру
      value={value} onChange={(event) => setValue(event.target.value)}
     {genreTrack}
      </select>
    </div>
    
  )

}
