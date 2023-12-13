import Hearder from './Components/Hearder'
import About from './Pages/About'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './Pages/SignUp'
import PrivateRoom from './Components/PrivateRoom'
import Profile from './Pages/Profile'

function App() {

  return (
    <>
    <BrowserRouter>
     <Hearder />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/about" element={<About />} />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path="*" element={<h1>404 not found</h1>} />

      <Route element={<PrivateRoom/>}>
        <Route path="/profile" element={<Profile/>} />
      </Route>
    </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
