import { HashRouter, Routes, Route } from 'react-router-dom'

import { Home, Login, ProductsDetail, Purchase } from './pages/index.js'
import { LoadingScreen, NavBar } from './components'
import { useSelector } from "react-redux";
import './App.css'
import { Container } from 'react-bootstrap';

function App() {
  const isLoading = useSelector((state) => state.isLoading); //esto es como un objeto donde para acceder se usa state.isloading {
  //   isLoading: true
  // }


  return (
    <div className="App">
      <HashRouter>
        <NavBar />
      {isLoading && <LoadingScreen />}
       <Container className='mt-5'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductsDetail />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/login" element={<Login />} />
        </Routes>

       </Container>
      </HashRouter>


    </div>
  )
}

export default App
