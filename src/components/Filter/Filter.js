import { useState } from 'react'
import { Tracks } from '../Tracks/Tracks'
import * as S from './FilterStyle'

// function FilterForYear({ activeSortYear, setAciveSortYear, $height }) {
//   const yearList = ['По умолчанию', 'Сначала новые', 'Сначала старые']

//   const toogleSort = (filter) => {
//     setAciveSortYear(filter)
//   }
//   return (
//     <S.FilterSelector $height={$height} $right={true}>
//       <S.FilterItems>
//         {yearList.map((item) =>
//           activeSortYear === item ? (
//             <S.FilterItem
//               onClick={() => toogleSort(item)}
//               className="active"
//               key={item}
//             >
//               {item}
//             </S.FilterItem>
//           ) : (
//             <S.FilterItem onClick={() => toogleSort(item)} key={item}>
//               {item}
//             </S.FilterItem>
//           ),
//         )}
//       </S.FilterItems>
//     </S.FilterSelector>
//   )
// }

export const Filter = () => {
  const [isOpen, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const toggleOpen = () => setOpen(!isOpen)

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterButton
        className="Filter__button button-genre _btn-text"
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
      <S.FilterButton
        className="Filter__button button-genre _btn-text"
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
        </S.ButtonYear>
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
