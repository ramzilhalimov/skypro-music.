import { useState } from 'react'
import { Tracks } from '../Tracks/Tracks'
import * as S from './FilterStyle'


export const Filter = () => {
  const [isOpen, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const toggleOpen = () => setOpen(!isOpen)

  return (
   
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterButton className="Filter__button button-genre _btn-text"
        onClick={() => {
          toggleOpen()
          setValue('author')
        }}
      >
        исполнителю
      </S.FilterButton>
      {isOpen && value === 'author' && (
        <S.ButtonAuthor>
          <S.ButtonFilter>
            {Tracks.map((track) => (
              <S.ButtonFilterTitle key={track.id}>
                {track.author}
              </S.ButtonFilterTitle>
            ))}
          </S.ButtonFilter>
        </S.ButtonAuthor>
      )}
      <S.FilterButton className="Filter__button button-genre _btn-text"
        onClick={() => {
          toggleOpen()
          setValue('year')
        }}
      >
        году выпуска
      </S.FilterButton>
      {isOpen && value === 'year' && (
        <S.ButtonYear>
          <S.ButtonFilter>
            {Tracks.map((track) => (
              <S.ButtonFilterTitle key={track.id}>
                {track.year}
              </S.ButtonFilterTitle>
            ))}
          </S.ButtonFilter>
        </S.ButtonYear >
      )}
      <S.FilterButton
        className="Filter__button button-genre _btn-text"
        onClick={() => {
          toggleOpen()
          setValue('genre')
        }}
      >
        жанру
      </S.FilterButton>
      {isOpen && value === 'genre' && (
        <S.ButtonGenre>
          <S.ButtonFilter>
            {Tracks.map((track) => (
              <S.ButtonFilterTitle key={track.id}>
                {track.genre}
              </S.ButtonFilterTitle>
            ))}
          </S.ButtonFilter>
        </S.ButtonGenre>
      )}
    </S.CenterblockFilter>
    
  )
}
