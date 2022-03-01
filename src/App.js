import Footer from "./components/Footer"
import Main from "./components/Main"
import NavBar from "./components/NavBar"

function App () {
    return (
        <>
            <NavBar/>
            <Main mensaje="Bienvenido" mensaje2="al ecommerce"/>
            <Footer/>
        </>
    )
}

export default App