import styled from "styled-components"
import { motion } from "framer-motion"

export const Box = styled.div`
  width: 25%;
  height: 100%;
  min-width: 288px;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
`

export const AlbumImage = styled.figure`
  width: 80px;
  height: 100%;
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
`

export const Favorite = styled.div`
  width: 64px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  color: white;
`

export const FavoriteButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  position: relative;
  background-color: transparent;
  cursor: pointer;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  h2 {
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${props => props.theme.colors.text.primary};
    font-size: 16px;
    font-family: ${props => props.theme.font.family.sans};
  }

  h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${props => props.theme.colors.text.secondary};
    font-size: 14px;
    font-family: ${props => props.theme.font.family.sans};
  }
`