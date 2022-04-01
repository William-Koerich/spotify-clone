import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.background.primary};
`

export const WrapperBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background-color: red;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
`

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.background.secondary};
`