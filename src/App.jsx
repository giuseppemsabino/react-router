import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PostsPage from './pages/PostsPage'

function App() {
  

  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={HomePage}/>
      <Route path='/about' Component={AboutPage}/>
      <Route path='/post' Component={PostsPage}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
