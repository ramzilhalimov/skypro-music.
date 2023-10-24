import styled, { css } from 'styled-components'

const activeMixin = css`
  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
`
export const CenterblockFilter = styled.div`
  // display: -webkit-box;
  // display: -ms-flexbox;
  // display: flex;
  // -webkit-box-orient: horizontal;
  // -webkit-box-direction: normal;
  // -ms-flex-direction: row;
  // flex-direction: row;
  // -webkit-box-align: center;
  // -ms-flex-align: center;
  // align-items: center;
  // margin-bottom: 51px;
  // overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 51px;
  margin-right: 610px;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const Filter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  ${(props) => (props.$active === 'active' ? activeMixin : '')}
  &:not(:last-child) {
    margin-right: 10px;
  }
`
export const FilterWrapper = styled.div`
  position: relative;
  &:not(:last-child) {
    margin-right: 10px;
  }
`

export const ButtonAuthor = styled.div`
  width: 248px;
  height: 305px;
  position: fixed;
  top: 279px;
  left: 450px;
  background-color: #313131;
  padding: 34px;
  border-radius: 12px;
`

export const ButtonFilter = styled.ul`
  width: 180px;
  height: 237px;
  background-color: #313131;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgb(138, 133, 133);
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
  }
`

export const ButtonFilterTitle = styled.li`
  display: inline-block;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  &:after {
    background-color: #9a48f1;
    display: block;
    content: '';
    height: 2px;
    width: 0%;
  }
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
  }
`

export const ButtonYear = styled.div`
  width: 248px;
  height: 305px;
  position: fixed;
  top: 279px;
  left: 600px;
  background-color: #313131;
  padding: 34px;
  border-radius: 12px;
`

export const ButtonGenre = styled.div`
  width: 248px;
  height: 305px;
  position: fixed;
  top: 279px;
  left: 750px;
  background-color: #313131;
  padding: 34px;
  border-radius: 12px;
`
export const FilterItems = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 28px;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(75, 73, 73, 1);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 10px;
  }
`
export const FilterItem = styled.li`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  &:hover {
    text-decoration: underline rgba(182, 114, 255, 1);
    color: rgba(182, 114, 255, 1);
    cursor: pointer;
  }
  &.active {
    color: rgba(182, 114, 255, 1);
  }
`

export const FilterButtonActive = styled.span`
  position: absolute;
  width: 26px;
  height: 25.5px;
  background-color: #b672ff;
  bottom: 21.5px;
  right: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FilterSelector = styled.div`
  position: absolute;
  width: 248px;
  height: ${(props) => (props.$height ? props.$height : '')};
  top: 50px;
  border-radius: 12px;
  padding: 34px;
  background-color: rgb(49, 49, 49);
  ${(props) => (props.$right ? 'right:0' : 'left:0;')}
`
export const SortYear = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 800px) {
    margin-top: 10px;
  }
`
