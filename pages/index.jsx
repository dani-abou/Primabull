// import { default as HomePage } from '../src/page_components/home'
import { Alert, Snackbar } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Landing from '../src/page_components/landing'

const PageProps = {
  hideNav: false,
  backgroundImg: true
}

const Home = ({ headControls }) => {
  const router = useRouter()
  const [showSnack, setShowSnack] = useState(false);

  useEffect(() => {
    if (router.query.confirmOrder) {
      setShowSnack(true)
    }
  }, [router, setShowSnack])

  const hideSnack = () => {
    setShowSnack(false)
    router.push({
      pathname: '/',
      shallow: true
    })
  }

  useEffect(() => headControls(PageProps), [headControls])

  return <>
    <Landing />
    <Snackbar open={showSnack} autoHideDuration={6000} onClose={hideSnack}>
      <Alert onClose={hideSnack} severity="success" sx={{ width: '100%' }}>
        Your Order has been succesfully placed!
      </Alert>
    </Snackbar>
  </>
}

export default Home