import { useState } from 'react'
import { useGetCatalogSectionQuery } from '../../service/playlistApi'
// import { Tracks } from '../Tracks/Tracks'
import * as S from './FilterStyle'

function FilterForYear({ activeSortYear, setAciveSortYear, $height }) {
  const yearList = ['По умолчанию', 'Сначала новые', 'Сначала старые']

  const toogleSort = (filter) => {
    setAciveSortYear(filter)
  }
  return (
    <S.FilterSelector $height={$height}>
      <S.FilterItems>
        {yearList.map((item) =>
          activeSortYear === item ? (
            <S.FilterItem
              onClick={() => toogleSort(item)}
              className="active"
              key={item}
            >
              {item}
            </S.FilterItem>
          ) : (
            <S.FilterItem onClick={() => toogleSort(item)} key={item}>
              {item}
            </S.FilterItem>
          ),
        )}
      </S.FilterItems>
    </S.FilterSelector>
  )
}
function FilterForGenre({
  activeFilterGenre,
  setAciveFilterGenre,
  isActiveFiltersGenre,
  setIsActiveFiltersGenre,
  $height,
}) {
  const genreList = useGetCatalogSectionQuery()?.data
  const genreName = ['Классическая музыка', 'Электронная музыка', 'Рок музыка']

  const toogleFilterGenre = (filter) => {
    isActiveFiltersGenre.find(
      ({ id, isActive }) => id === filter.id && isActive,
    )
      ? setAciveFilterGenre([
          ...activeFilterGenre.filter((item) => item !== filter),
        ])
      : setAciveFilterGenre([...activeFilterGenre, filter])
    setIsActiveFiltersGenre([
      ...isActiveFiltersGenre.map((item) =>
        item.id === filter.id ? { ...item, isActive: !item.isActive } : item,
      ),
    ])
  }
  return (
    <S.FilterSelector $height={$height}>
      <S.FilterItems>
        {genreList?.map((genre) =>
          activeFilterGenre.find(
            (activeGenre) => activeGenre.id === genre.id,
          ) ? (
            <S.FilterItem
              onClick={() => toogleFilterGenre(genre)}
              className="active"
              key={genre.id}
            >
              {genreName[genre.id - 1]}
            </S.FilterItem>
          ) : (
            <S.FilterItem
              onClick={() => toogleFilterGenre(genre)}
              key={genre.id}
            >
              {genreName[genre.id - 1]}
            </S.FilterItem>
          ),
        )}
      </S.FilterItems>
    </S.FilterSelector>
  )
}
function FilterForAuthor({ $height, filterAuthor, setFilterAuthor }) {
  const toogleFilterAuthor = (filter) => {
    setFilterAuthor([
      ...filterAuthor.map((item) =>
        item === filter ? { ...item, isActive: !item.isActive } : item,
      ),
    ])
  }
  return (
    <S.FilterSelector $height={$height}>
      <S.FilterItems>
        {filterAuthor?.map((author) => {
          const { id, isActive, author: authorName } = author

          return isActive ? (
            <S.FilterItem
              onClick={() => toogleFilterAuthor(author)}
              className="active"
              key={id}
            >
              {authorName}
            </S.FilterItem>
          ) : (
            <S.FilterItem onClick={() => toogleFilterAuthor(author)} key={id}>
              {authorName}
            </S.FilterItem>
          )
        })}
      </S.FilterItems>
    </S.FilterSelector>
  )
}

export const Filter = ({
  activeSortYear,
  setAciveSortYear,
  activeFilterGenre,
  setAciveFilterGenre,
  isActiveFiltersGenre,
  setIsActiveFiltersGenre,
  filterAuthor,
  setFilterAuthor,
}) => {
  const [visibleFilter, setVisibleFilter] = useState(null)

  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }

  return (
    <S.CenterblockFilter>
      <S.Filter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <S.FilterWrapper>
          <S.FilterButton
            className="Filter__button button-genre _btn-text"
            $active={visibleFilter === 'author' ? 'active' : 'notActive'}
            onClick={() => toggleVisibleFilter('author')}
          >
            исполнителю
          </S.FilterButton>
          {filterAuthor.filter(({ isActive }) => isActive).length !== 0 ? (
            <S.FilterButtonActive>
              {filterAuthor.filter(({ isActive }) => isActive).length}
            </S.FilterButtonActive>
          ) : (
            ''
          )}
          {visibleFilter === 'author' && (
            <FilterForAuthor
              $height={'305px'}
              filterAuthor={filterAuthor}
              setFilterAuthor={setFilterAuthor}
            />
          )}
        </S.FilterWrapper>
        <S.FilterWrapper>
          <S.FilterButton
            className="Filter__button button-genre _btn-text"
            $active={visibleFilter === 'genre' ? 'active' : 'notActive'}
            onClick={() => toggleVisibleFilter('genre')}
          >
            жанру
          </S.FilterButton>
          {activeFilterGenre.length !== 0 ? (
            <S.FilterButtonActive>
              {activeFilterGenre.length}
            </S.FilterButtonActive>
          ) : (
            ''
          )}
          {visibleFilter === 'genre' && (
            <FilterForGenre
              activeFilterGenre={activeFilterGenre}
              setAciveFilterGenre={setAciveFilterGenre}
              isActiveFiltersGenre={isActiveFiltersGenre}
              setIsActiveFiltersGenre={setIsActiveFiltersGenre}
              $height={'305px'}
            />
          )}
        </S.FilterWrapper>
      </S.Filter>
      <S.SortYear>
        <S.FilterWrapper>
          <S.FilterButton
            className="Filter__button button-genre _btn-text"
            $active={visibleFilter === 'year' ? 'active' : 'notActive'}
            onClick={() => toggleVisibleFilter('year')}
          >
            году выпуска
          </S.FilterButton>
          {activeSortYear !== 'По умолчанию' ? (
            <S.FilterButtonActive>1</S.FilterButtonActive>
          ) : (
            ''
          )}
          {visibleFilter === 'year' && (
            <FilterForYear
              activeSortYear={activeSortYear}
              setAciveSortYear={setAciveSortYear}
              $height={'200px'}
            />
          )}
        </S.FilterWrapper>
      </S.SortYear>
    </S.CenterblockFilter>
  )
}
