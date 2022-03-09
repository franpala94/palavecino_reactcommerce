import Footer from "./components/Footer"
import ItemListDetail from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

function App () {
    return (
        <>
            <NavBar/>
            <ItemListContainer mensaje="Bienvenido" mensaje2="al ecommerce"/>
            <ItemListDetail/>
            <Footer/>
        </>
    )
}

export default App