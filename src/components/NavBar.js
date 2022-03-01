function NavBar(){
    return <header>
    <nav class="nav">            
        <div class="nav__firma">
            <a href="index.html">
                <img src="logo1.png" alt=""></img>
            </a>
        </div>
        <div class="nav__cnt">
            
            <input type="checkbox" id="btn-menu" class="nav__ico"></input>
            <label class="nav__ico" for="btn-menu"><i class='bx bx-menu bx-flip-horizontal'  ></i></label>
            
            <ul class="nav__lista">
                <li class="nav__despl"><a class="nav__link--blk nav__link--baseline" href="index.html">Home</a></li>                
                <li ><a class="nav__link--blk nav__link--baseline" href="*">Productos</a></li>
                <li><a class="nav__link--blk nav__link--baseline" href="*">Marcas</a></li>
                <li><a class="nav__link--blk nav__link--baseline" href="*">Contacto</a></li>
            </ul>
        </div>
    </nav>       
</header>
}

export default NavBar