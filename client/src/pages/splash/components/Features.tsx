import { motion } from 'framer-motion'

import { SelectedPage } from '@/shared/types'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
  }

const Features = ({ setSelectedPage }: Props) => {
  return (
    <section
      id='features'
      className='gap-16 py-10 h-full w-full md:pb-0 bg-blue-logo'
    >
      {/* MAIN HEADER */}
      <motion.div 
        className='md:flex mx-auto w-full items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        Features
        </motion.div>
    </section>
  )
}

export default Features