import { SelectedPage } from '@/shared/types'
import { motion, AnimatePresence } from 'framer-motion'
import AnchorLink from './AnchorLink'
import ActionButton from '@/components/ActionButton'

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Modal = ({ selectedPage, setSelectedPage }: Props) => {
  return (
        <motion.div
            key="modal"
            className='fixed right-0 bottom-0 z-40 w-full drop-shadow-2x1 bg-white'
            initial={{ y: "-170%", opacity: 1}}
            animate={{y: -140, opacity: 1}}
            exit={{y: "-170%", opacity: 1, transition: {duration: 0.4}}}
            transition={{duration: 0.4, ease: "easeOut"}}
        >
            <div className="flex-col px-8 py-4 text-xl">
                {/* LINKS DIV */}
                <div className="flex-col py-2">
                    <div className='py-2'>
                        <AnchorLink
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                    <div className='py-2'>
                        <AnchorLink
                            page="Features"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                    <div className='py-2'>
                        <AnchorLink
                            page="OctopusJokes"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                    <div className='py-2'>
                        <AnchorLink
                            page="About"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                    <div className='py-2'>
                        <AnchorLink
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            
                <div>
                    <div className='py-4'>
                        <button className='hover:border-b-2 hover:border-b-blue-logo transition duration-500'>Sign Up</button>
                    </div>
                    <div>
                        <ActionButton>Sign In</ActionButton>
                    </div>
                </div>
            </div>
        </motion.div>
  )
}

export default Modal