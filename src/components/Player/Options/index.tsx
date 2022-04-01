import React from 'react'

/* ------| Estilos |------ */
import {
  Box,
  OptionsAudio,
  OptionsAudioProgress,
  OptionsAudioProgressBar,
  OptionsButton,
  OptionsButtons
} from "./styles"

export const Options = () => {
  
  let dragging = false
  type ProgressType = {
    target: HTMLElement | null;
    bounds: DOMRect | null;
  }

  const progress: ProgressType = {
    target: null,
    bounds: null
  }

  const handleProgress = (event: MouseEvent) => {
    if (dragging) {
      let width = event.pageX - progress.bounds!.left
      const maxWidth = progress.bounds!.width

      if (width > maxWidth) {
        width = maxWidth
      }

      if (width < 0) {
        width = 0
      }

      progress.target?.classList.add('active')
      progress.target?.setAttribute(
        'style', 
        `--width: ${width}px`
      )
    }
  }

  const handleProgressBarOnDown = (event: MouseEvent) => {
    dragging = true
    progress.target = event.currentTarget as HTMLElement
    progress.bounds = progress.target?.getBoundingClientRect()

    handleProgress(event)
  }

  React.useEffect(() => {
    window.addEventListener(
      'mouseup',
      (event: MouseEvent) => {
        dragging = false
        progress.target?.classList.remove('active')
    })
    
    window.addEventListener(
      'mousemove',
      (event: MouseEvent) => handleProgress(event)
    )
  }, [])

  return (
    <Box>
      <OptionsButtons>
        <OptionsButton>
          <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5561 5.09047C12.9485 5.09047 12.4561 5.58296 12.4561 6.19047C12.4561 6.79799 12.9485 7.29047 13.5561 7.29047V5.09047ZM24.7307 7.29047C25.3382 7.29047 25.8307 6.79799 25.8307 6.19047C25.8307 5.58296 25.3382 5.09047 24.7307 5.09047V7.29047ZM7.27034 14.519C6.66283 14.519 6.17034 15.0115 6.17034 15.619C6.17034 16.2266 6.66283 16.719 7.27034 16.719V14.519ZM24.7307 16.719C25.3382 16.719 25.8307 16.2266 25.8307 15.619C25.8307 15.0115 25.3382 14.519 24.7307 14.519V16.719ZM5.17511 22.9C4.56759 22.9 4.07511 23.3925 4.07511 24C4.07511 24.6075 4.56759 25.1 5.17511 25.1V22.9ZM24.7307 25.1C25.3382 25.1 25.8307 24.6075 25.8307 24C25.8307 23.3925 25.3382 22.9 24.7307 22.9V25.1ZM6.15824 6.15824L6.93606 6.93606C7.14235 6.72977 7.25824 6.44998 7.25824 6.15824C7.25824 5.8665 7.14235 5.58671 6.93606 5.38042L6.15824 6.15824ZM1.22218 9.53866C0.792606 9.96824 0.792606 10.6647 1.22218 11.0943C1.65176 11.5239 2.34824 11.5239 2.77782 11.0943L1.22218 9.53866ZM2.77782 1.22218C2.34824 0.792606 1.65176 0.792606 1.22218 1.22218C0.792606 1.65176 0.792606 2.34824 1.22218 2.77782L2.77782 1.22218ZM13.5561 7.29047H24.7307V5.09047H13.5561V7.29047ZM7.27034 16.719H24.7307V14.519H7.27034V16.719ZM5.17511 25.1H24.7307V22.9H5.17511V25.1ZM5.38042 5.38042L1.22218 9.53866L2.77782 11.0943L6.93606 6.93606L5.38042 5.38042ZM1.22218 2.77782L5.38042 6.93606L6.93606 5.38042L2.77782 1.22218L1.22218 2.77782Z" fill="currentColor"/>
            <path d="M13.5561 5.09047C12.9485 5.09047 12.4561 5.58296 12.4561 6.19047C12.4561 6.79799 12.9485 7.29047 13.5561 7.29047V5.09047ZM24.7307 7.29047C25.3382 7.29047 25.8307 6.79799 25.8307 6.19047C25.8307 5.58296 25.3382 5.09047 24.7307 5.09047V7.29047ZM7.27034 14.519C6.66283 14.519 6.17034 15.0115 6.17034 15.619C6.17034 16.2266 6.66283 16.719 7.27034 16.719V14.519ZM24.7307 16.719C25.3382 16.719 25.8307 16.2266 25.8307 15.619C25.8307 15.0115 25.3382 14.519 24.7307 14.519V16.719ZM5.17511 22.9C4.56759 22.9 4.07511 23.3925 4.07511 24C4.07511 24.6075 4.56759 25.1 5.17511 25.1V22.9ZM24.7307 25.1C25.3382 25.1 25.8307 24.6075 25.8307 24C25.8307 23.3925 25.3382 22.9 24.7307 22.9V25.1ZM6.15824 6.15824L6.93606 6.93606C7.14235 6.72977 7.25824 6.44998 7.25824 6.15824C7.25824 5.8665 7.14235 5.58671 6.93606 5.38042L6.15824 6.15824ZM1.22218 9.53866C0.792606 9.96824 0.792606 10.6647 1.22218 11.0943C1.65176 11.5239 2.34824 11.5239 2.77782 11.0943L1.22218 9.53866ZM2.77782 1.22218C2.34824 0.792606 1.65176 0.792606 1.22218 1.22218C0.792606 1.65176 0.792606 2.34824 1.22218 2.77782L2.77782 1.22218ZM13.5561 7.29047H24.7307V5.09047H13.5561V7.29047ZM7.27034 16.719H24.7307V14.519H7.27034V16.719ZM5.17511 25.1H24.7307V22.9H5.17511V25.1ZM5.38042 5.38042L1.22218 9.53866L2.77782 11.0943L6.93606 6.93606L5.38042 5.38042ZM1.22218 2.77782L5.38042 6.93606L6.93606 5.38042L2.77782 1.22218L1.22218 2.77782Z" fill="currentColor"/>
          </svg>
        </OptionsButton>
        <OptionsAudio>
          <OptionsButton>
            <svg width="16" height="19" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.4324 19.0823C18.9862 16.7654 19.2794 14.3473 19.2794 11.8607C19.2794 9.00262 18.892 6.235 18.1668 3.60752M1 5.71279H5.04267L11.8607 1C10.89 12.213 10.5877 9.18756 11.8607 21L5.04267 16.977H1V5.71279Z" stroke="currentColor" strokewidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.4324 19.0823C18.9862 16.7654 19.2794 14.3473 19.2794 11.8607C19.2794 9.00262 18.892 6.235 18.1668 3.60752M1 5.71279H5.04267L11.8607 1C10.89 12.213 10.5877 9.18756 11.8607 21L5.04267 16.977H1V5.71279Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </OptionsButton>
          <OptionsAudioProgress onMouseDown={(event) => handleProgressBarOnDown(event)}>
            <OptionsAudioProgressBar />
          </OptionsAudioProgress>
        </OptionsAudio>
      </OptionsButtons>
    </Box>
  )
}