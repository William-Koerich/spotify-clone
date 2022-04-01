import styled from "styled-components"

export const Player = styled.div`
  width: 100%;
  height: 80px;
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  background-color: ${props => props.theme.background.primary};
`

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`