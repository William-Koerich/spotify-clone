import styled from "styled-components"

export const Box = styled.div`
  width: 50%;
  height: 100%;
  min-width: 388px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
`

export const Controls = styled.div`
  width: 64%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ControlsButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`

export const ControlsButtonsLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  gap: 16px;
`

export const ControlsButtonsRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  gap: 16px;
`

export const ControlsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  color: ${props => props.theme.colors.text.secondary};

  &:hover {
    color: ${props => props.theme.colors.text.primary};
  }

  &.active {
    color: ${props => props.theme.colors.primary};
  }
`

export const ControlsPlayback = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
`

export const ControlsPlaybackTime = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 14px;
  font-family: ${props => props.theme.font.family.sans};
`

export const ControlsProgressBar = styled.div`
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
    top: -4px; right: -6px;
    background-color: ${props => props.theme.colors.text.primary};
    visibility: hidden;
    opacity: 0;
  }
`

export const ControlsProgress = styled.div`
  --width: 0px;
  width: 100%;
  height: 5px;
  border-radius: 999px;
  background-color: ${props => props.theme.background.secondary};

  &.active ${ControlsProgressBar} {
    background-color: ${props => props.theme.colors.primary};

    &:after {
      visibility: visible;
      opacity: 1;
    }
  }
`

export const ControlsPlaybackProgress = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px;
  position: relative;

  :hover ${ControlsProgress} ${ControlsProgressBar} {
    background-color: ${props => props.theme.colors.primary};

    &:after {
      visibility: visible;
      opacity: 1;
    }
  }
`