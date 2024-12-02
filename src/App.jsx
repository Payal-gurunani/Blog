import React from 'react'
import {  BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import  './App.css'
import Home from './pages/Home'
import AddBlog from './pages/AddBlog'
import EditBlog from './pages/EditBlog'
import Navbar from './navbar/Navbar'
import About from './pages/About'
function App() {
  // const [count, setCount] = useState(0)

  return (
   <Router >
    <Navbar />
    <div className='p-4'>
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route  path='/add' element = {<AddBlog/>}/>
      <Route path='/edit/:id' element={<EditBlog />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
    </div>
   </Router>
  )
}

export default App
