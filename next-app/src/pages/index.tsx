import { Main } from 'next/document'
import Container from '../components/Container'
import ExperienceBar from '../components/ExperienceBar'
import MainContent from '../components/MainContent'

export default function Index() {
  return (
  <Container>
    <ExperienceBar />
    <MainContent />
  </Container>
  )
}
