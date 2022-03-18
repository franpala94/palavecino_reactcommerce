import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import ItemListDetail from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import MiProvider from "./components/CartContext"
import Carrito from "./components/Carrito"


function App () {
    return (
        <MiProvider>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer mensaje="Bienvenido" mensaje2="al ecommerce"/>}/>
                    <Route path='/categoria/:id' element={<ItemListContainer mensaje="Bienvenido" mensaje2="al ecommerce"/>}/>
                    <Route path='/carrito' element={<Carrito/>}/>
                    <Route path='/item/:id' element={<ItemListDetail/>}/>                
                </Routes>
                <Footer/>
            </BrowserRouter>
        </MiProvider>
        
    )
}

export default App