import GlobalStyles from '../../styles/globalStyles'
import Context from '../context/ChallengeContext'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Context>
        <Component {...pageProps} />
      </Context>
    </>
  )
}

export default MyApp
