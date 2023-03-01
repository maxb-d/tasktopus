
import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'

type Props = {}

const DashLayout = (props: Props) => {
  return (
    <>
        <DashHeader />
        <div className='dash-container'>
            <Outlet />
        </div>
        <DashFooter />
    </>
  )
}

export default DashLayout