import Head from 'next/head'
import Container from '../components/Container'
import ExperienceBar from '../components/ExperienceBar'
import MainContent from '../components/MainContent'

export default function Index() {
  return (
  <Container>
    <Head>
      <title>
        Início | move.it
      </title>
    </Head>
    <ExperienceBar />
    <MainContent />
  </Container>
  )
}
