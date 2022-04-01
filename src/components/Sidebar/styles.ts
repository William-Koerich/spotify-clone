import styled from "styled-components"

export const Box = styled.div`
  width: 256px;
  height: 100%;
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  background-color: ${props => props.theme.background.primary};
`