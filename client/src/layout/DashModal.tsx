
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

type Props = {
}

const DashModal = (props: Props) => {
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
                        <Link
                            to='/dash/todos'
                        >
                            Todos
                        </Link>
                                    
                    </div>
                    <div className='py-2'>
                        <Link
                            to='/dash/kanban'
                        >
                            Kanban
                        </Link>
                    </div>
                </div>
            
                <div>
                    {/* PROFILE ACCESS */}
                </div>
            </div>
        </motion.div>
  )
}

export default DashModal