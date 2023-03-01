import Logo from '@/assets/logo.png'
import useMediaQuery from '@/hooks/useMediaQuery'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import DashModal from './DashModal'

type Props = {
}

const DashHeader = (props: Props) => {
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
                    <Link
                        to='/dash'
                    >
                        <img className='w-40' alt="logo" src={Logo} />
                    </Link>
                </div>
                <div className={`${flexString}`}>
                    { isAboveMediumScreens ? (
                            <div className={`${flexString} gap-16`}>
                                {/* LINKS DIV */}
                                <div className={`${flexString} gap-12`}>
                                    <Link
                                        to='/dash/todos'
                                    >
                                        Todos
                                    </Link>
                                    <Link
                                        to='/dash/kanban'
                                    >
                                        Kanban
                                    </Link>
                                </div>
                            
                                <div className={`${flexString} gap-6`}>
                                    {/* PROFILE PIC AND SELECT */}
                                    PP
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
                <DashModal 
                />
            )}
        </AnimatePresence>
    </header>
  )
}

export default DashHeader