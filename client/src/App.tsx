import { Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import Splash from './pages/splash/Splash'
import Login from './features/auth/Login'
import DashLayout from './layout/DashLayout'
import DashWelcome from './layout/DashWelcome'
import TodoList from './features/todos/Todos'

type Props = {}

const App = (props: Props) => {

  return (
    
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Splash />} />
        <Route path='login' element={<Login />} />

        <Route path='dash' element={<DashLayout />} >
          <Route index element={<DashWelcome/>} />

          <Route path='todos'>
            <Route index element={<TodoList />} />
          </Route>

        </Route>
      
      </Route>
    </Routes>
  )
}

export default App