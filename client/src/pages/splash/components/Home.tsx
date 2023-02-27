import { SelectedPage } from "@/shared/types"
import { motion } from 'framer-motion'
import Tentacules from '@/assets/tentacules.png'
import useMediaQuery from "@/hooks/useMediaQuery"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <section
      id='home'
      className='gap-16 py-10 h-full w-full md:pb-0'
    >
      {/* MAIN HEADER */}
      <motion.div 
        className='md:flex mx-auto w-full items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN TEXT */}
        <div className='z-10 md:mt-0 xs:mt-32 sm:mt-32 md:basis-5/6 flex justify-center items-center md:text-[60px] sm:text-[40px] xs:text-[40px] font-bold font-neon flex-col '>
          <div><span className="text-blue-logo">Organize</span> <span className="text-violet-logo">Your</span> <span className="text-blue-logo">Chaos,</span></div> 
          <div><span className="text-violet-logo">Eight</span> <span className="text-blue-logo">Tentacules</span> <span className="text-violet-logo">at</span> <span className="text-blue-logo">a</span> <span className="text-violet-logo">Time.</span></div>
        </div>

        {/* MAIN IMAGE */}
        { isAboveMediumScreens ? (
          <div>
            <img alt="main-image" src={Tentacules}/>
          </div>
          ) : (
            ""
          )}
        
      </motion.div>
    </section>
  )
}

export default Home