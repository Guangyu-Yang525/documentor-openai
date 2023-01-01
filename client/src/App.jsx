
import { Route, Routes } from 'react-router-dom'
import NavBar from './routes/navbar.component'
import Func from './routes/func.component'
import Home from './routes/home.component'
import Login from './routes/login.component'
import Documents from './routes/document.component'
import About from './routes/about.component'

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route index element={<Home/>} />
        <Route path="func" element={<Func/>}/>
        <Route path="auth" element={<Login/>}/>
        <Route path="documents" element={<Documents/>}/>
        <Route path="about" element={<About/>}/>
      </Route>
    </Routes>
  )
}

export default App
