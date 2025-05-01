import React, { useEffect } from 'react'
import Home from './Home'
import About from './About'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import Page7 from './Page7'

const App = () => {
  useEffect(() => {
    // Scroll to the top of the page (Home) on refresh
    window.scrollTo(0, 0);
  }, []);

  return (
   <>
   <Home/>
   <About/>
   <Page3/>
   <Page4/>
   <Page5/>
   <Page6/>
   <Page7/>
   </>
  )
}

export default App
