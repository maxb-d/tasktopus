import { Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import Splash from './pages/splash/Splash'

type Props = {}

const App = (props: Props) => {

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Splash />} />

      </Route>
    </Routes>
  )
}

export default App