import styled from 'styled-components'

export const Box = styled.div `
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
`

export const OptionsButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 32px;
`

export const OptionsButton = styled.button`
  padding: 6px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  color: ${props => props.theme.colors.text.secondary};

  &:hover {
    color: ${props => props.theme.colors.text.primary};
  }
`

export const OptionsAudioProgressBar = styled.div`
  width: var(--width);
  height: 100%;
  border-radius: 99px;
  display: block;
  position: relative;
  background-color: ${props => props.theme.background.tertiary};

  :after {
    content: '';
    width: 13px;
    height: 13px;
    border-radius: 999px;
    position: absolute;
    top: -4px; right: -4px;
    background-color: ${props => props.theme.colors.text.primary};
    visibility: hidden;
    opacity: 0;
  }
`

export const OptionsAudioProgress = styled.div`
  --width: 0px;
  width: 112px;
  height: 5px;
  margin-top: -3px;
  margin-left: 4px;
  border-radius: 999px;
  background-color: ${props => props.theme.background.secondary};

  &.active ${OptionsAudioProgressBar} {
    background-color: ${props => props.theme.colors.primary};

    &:after {
      visibility: visible;
      opacity: 1;
    }
  }
`

export const OptionsAudio = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 12px;
  position: relative;

  :hover ${OptionsButton} {
    color: ${props => props.theme.colors.text.primary};
  }

  :hover ${OptionsAudioProgress} ${OptionsAudioProgressBar} {
    background-color: ${props => props.theme.colors.primary};

    &:after {
      visibility: visible;
      opacity: 1;
    }
  }
`