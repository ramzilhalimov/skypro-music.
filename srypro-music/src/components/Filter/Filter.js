import { useState } from 'react'
import './Filter.css'
import { Tracks } from '../Tracks/Tracks'

export const Filter = () =>  {

  const [isOpen, setOpen] = useState(false)
  const [value, setValue] = useState('');

  const toggleOpen= () => setOpen(!isOpen);


  return (
    <div className="Centerblock__filter filter">
      <div className="Filter__title">Искать по:</div>
      <div
        className="Filter__button button-author _btn-text"
        onClick={() => {
          toggleOpen();
          setValue("author");
        }}
      >
        исполнителю
      </div>
      {isOpen && value === "author" && (
        <div className="Button_author">
          <ul className="Button_filter">
            {Tracks.map((track) => (
              <li className="Button_filter_title" key={track.id}>
                {track.author}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        className="Filter__button button-year _btn-text"
        onClick={() => {
          toggleOpen();
          setValue("year");
        }}
      >
        году выпуска
      </div>
      {isOpen && value === "year" && (
        <div className="Button_year">
          <ul className="Button_filter">
            {Tracks.map((track) => (
              <li className="Button_filter_title" key={track.id}>
                {track.year}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        className="Filter__button button-genre _btn-text"
        onClick={() => {
          toggleOpen();
          setValue("genre");
        }}
      >
        жанру
      </div>
      {isOpen && value === "genre" && (
        <div className="Button_genre">
          <ul className="Button_filter">
            {Tracks.map((track) => (
              <li className="Button_filter_title" key={track.id}>
                {track.genre}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
