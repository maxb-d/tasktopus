import Logo from '@/assets/logo.png'
import ActionButton from '@/components/ActionButton'
import AnchorLink from '@/pages/splash/components/AnchorLink'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Modal from '@/pages/splash/components/Modal'

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const SplashHeader = ( { selectedPage, setSelectedPage }: Props) => {
    const flexString = 'flex items-center justify-between'
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    const [isMenuToggled, setIsMenuToggled] = useState(false) 

    const handleClickOutside = (e: any) => {
        e.stopPropagation()
        setIsMenuToggled(!isMenuToggled)
    }

  return (
    <header>
        {/* HEADER DIV */}
        <div 
            className={`${flexString}fixed top-0 z-30 w-full py-6 bg-white`}
            onClick={() => setIsMenuToggled(false)}    
        >
            {/* INSIDE HEADER DIV */}
            <div className={`${flexString} mx-auto px-6 w-full`}>
                {/* LOGO DIV */}
                <div>
                    <img className='w-40' alt="logo" src={Logo} />
                </div>
                <div className={`${flexString}`}>
                    { isAboveMediumScreens ? (
                            <div className={`${flexString} gap-16`}>
                                {/* LINKS DIV */}
                                <div className={`${flexString} gap-12`}>
                                    <AnchorLink
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <AnchorLink
                                        page="Features"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <AnchorLink
                                        page="OctopusJokes"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <AnchorLink
                                        page="About"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <AnchorLink
                                        page="Contact"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                            
                                <div className={`${flexString} gap-6`}>
                                    <div className=''>
                                        <button className='hover:border-b-2 hover:border-b-blue-logo transition duration-500'>Sign Up</button>
                                    </div>
                                    <div>
                                        <ActionButton>Sign In</ActionButton>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className={`${flexString} w-full`}>
                                <button
                                    className='rounded-full bg-blue-logo p-2'
                                    onClick={(e) => handleClickOutside(e)}
                                >
                                    { !isMenuToggled ? <Bars3BottomRightIcon className='h-6 w-6 text-white' /> : <XMarkIcon className='h-6 w-6 text-white' />}
                                    
                                </button>
                            </div>  
                        )
                    }
                </div>
            </div>
        </div>

        {/* MOBILE MENU MODAL */}
        <AnimatePresence>
            { !isAboveMediumScreens && isMenuToggled && (
                <Modal 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            )}
        </AnimatePresence>
    </header>
  )
}

export default SplashHeader