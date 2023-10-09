import styled from 'styled-components'

export const CenterblockFilter = styled.div`
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
  margin-bottom: 51px;
  overflow: hidden;
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
  &:not(:last-child) {
    margin-right: 10px;
  }

`

export const ButtonAuthor = styled.div`
  width: 248px;
  height: 305px;
  position: fixed;
  top: 240px;
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
  top: 240px;
  left: 600px;
  background-color: #313131;
  padding: 34px;
  border-radius: 12px;
`

export const ButtonGenre = styled.div`
  width: 248px;
  height: 305px;
  position: fixed;
  top: 240px;
  left: 750px;
  background-color: #313131;
  padding: 34px;
  border-radius: 12px;
`
