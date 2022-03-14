import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import ItemListDetail from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

function App () {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer mensaje="Bienvenido" mensaje2="al ecommerce"/>}/>
                <Route path='/categoria/:id' element={<ItemListContainer mensaje="Bienvenido" mensaje2="al ecommerce"/>}/>
                <Route path='/carrito' element={<ItemListContainer/>}/>
                <Route path='/item/:id' element={<ItemListDetail/>}/>                
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App