
import './App.css'
import Signup from './components/Signup'  
import Navbar  from './components/Navbar'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Abc from './components/Abc'
import Mapping from './components/Mapping'
import Api from './components/Api'
import Blog from './components/Blog'
import Poke from './components/Poke'


function App() {
  
  return (
    <>
      <Navbar />
      <br />
      <br />

      <Routes>

        <Route path='/sign' element={<Signup />} />

        <Route path='/login' element={<Login />} />

        <Route path='/state' element={<Statebasics />} />

        <Route path='/count' element={<Counter />} />

        <Route path='/react' element={<Abc />} />

        <Route path='/map' element={<Mapping />} />

        <Route path='/api' element={<Api />} />
        
        <Route path='/blog' element={<Blog />} />

        <Route path='/poke' element={<Poke />} />

        
      </Routes>

      
    </>
  )
}

export default App
