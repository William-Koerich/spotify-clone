import React from 'react'
import Image from 'next/image'

/* ------| Components |------ */
import { Music } from './Music'
import { Audio } from './Audio'
import { Options } from './Options'

/* ------| Estilos |------ */
import { Box, Player } from "./styles"

export const AudioPlayer = () => {
  return (
    <Player>
      <Box>
        <Music />
        <Audio />
        <Options />
      </Box>
    </Player>
  )
}