import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

function App () {
    return (
        <>
            <NavBar/>
            <ItemListContainer mensaje="Bienvenido" mensaje2="al ecommerce"/>
            <Footer/>
        </>
    )
}

export default App