import { useState, useEffect } from 'react'

import { SelectedPage } from '@/shared/types'

import SplashFooter from '@/layout/SplashFooter'
import SplashHeader from '@/layout/SplashHeader'
import Home from './components/Home'
import Contact from './components/Contact'
import Features from './components/Features'
import OctopusJokes from './components/OctopusJokes'
import About from './components/About'

type Props = {}

const Splash = (props: Props) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setSelectedPage(SelectedPage.Home)
      } else {
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
        <SplashHeader 
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <div className='splash-container'>
          <Home 
            setSelectedPage={setSelectedPage}
          />
          <Features 
            setSelectedPage={setSelectedPage}
          />
          <OctopusJokes 
            setSelectedPage={setSelectedPage}
          />
          <About 
            setSelectedPage={setSelectedPage}
          />
          <Contact 
            setSelectedPage={setSelectedPage}
          />
        </div>
        <SplashFooter />
    </>
  )
}

export default Splash