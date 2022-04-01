import type { NextPage } from 'next'
import Head from 'next/head'

/* ------| Componentes |------ */
import { AudioPlayer } from '../src/components/Player'
import { Sidebar } from '../src/components/Sidebar'

/* ------| Estilos |------ */
import { Container, Main, Wrapper, WrapperBox } from '../src/styles/pages/layout'

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Spotify - Web player (redesigned)</title>
      </Head>
      <WrapperBox>
        <Container>
          <Sidebar />
          <Main>
            Olá
          </Main>
        </Container>
        <AudioPlayer />
      </WrapperBox>
    </Wrapper>
  )
}

export default Home
