import { useState, useEffect } from 'react'

import { SelectedPage } from '@/shared/types'

import SplashFooter from '@/layout/SplashFooter'
import SplashHeader from '@/layout/SplashHeader'
import Home from './components/Home'
import Contact from './components/Contact'
import Features from './components/Features'
import OctopusJokes from './components/OctopusJokes'
import About from './components/About'

import './splash.css'
import ScrollSvg from '@/assets/scroll.svg'
import TentaculesHome from '@/assets/tentaculesHome.png'

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
        {/* <div className='line-container z-40'>
          <img src={ScrollSvg} className="inline-block height-full" alt="scroll logo" />
        </div> */}
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
          <div className='flex items-center'>
            <img src={TentaculesHome} alt='tentacules home' />
            <p className=''>You're Just One Tentacule Away From Reaching Us</p>
          </div>
          <Contact 
            setSelectedPage={setSelectedPage}
          />
        </div>
        <SplashFooter />
    </>
  )
}

export default Splash