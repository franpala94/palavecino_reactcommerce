# Trabajo final de React para [Coder House](https://www.coderhouse.com/)

## Documentacion del Proyecto:
Ecommerce desarrollado para ProGaming, pagina dedicada a la venta de Hardware para PC.

![DemoGif](https://imgkub.com/image/demo-react.RvA1j)

## Ejecutar la aplicacion: 
1º- Abrir nueva terminal y clonar el repositorio con:
```sh
https://github.com/franpala94/palavecino_reactcommerce.git
```
2º- Una vez dentro del proyecto, abrimos nueva terminal y ejecutamos lo siguiente:
```sh
cd app
npm install
npm start
```
## Dependencias Utilizadas:
- React Router: Utilizado para crear un rutas entre diferentes componentes. Se logro una navegabilidad dinamica en la app.

- Firebase: Utilizado como base de datos para reemplazar servicios backend. Se logro conectar la app con esta libreria para devolver los datos de nuestros productos.

- Box Icons: Libreria utilizada para importar iconos. 

- Toastify: Libreria utilizada para mostrar popups.

## Rutas:
- Index: ('/'): En esta ruta encontramos todos los productos renderizados desde la base de datos. Podemos encontrar una barra de navegacion en la parte superior, que nos direccionara a las diferentes categorias y un footer en la parte inferior.

- Categoria: ('/categoria/idd'): Ruta que renderiza los productos por su respectiva categoria, ya asignada en la base de datos y filtrado a traves del codigo. Se visualiza el producto con su precio y una imagen de referencia. 

- Item ('/item/:id'): Aqui podemos encontrar el detalle del producto seleccionado, visualizado a traves de ver detalle. En la ruta podemos encontrar el producto con su marca, modelo, precio, descripcion y el componente contador y boton de agregar al carrito.

- Carrito ('/carrito'): Renderiza los productos agregados por el usuario. Aqui podemos visualizar los productos, eliminarlos y redirigirnos para finalizar la compra.

- Checkout ('/checkout'): Aqui podemos finalizar la compra completando un formulario con nuestros datos, que seran enviados a la base de datos. Al final de la compra nos devolvera un id de compra para el seguimiento de nuestro pedido.

## Etapas de desarrollo:
- Se crean los primeros componentes y renderizamos para lograr visualizar el comienzo de nuestra app web.
- Se simula la conexion a una base de datos, utilizando promesas y asincronia, desde nuestro archivo 'productos.json'.
- Se agrega una navegacion dinamica a traves de routing a nuestra app. Tambien agregamos eventos y context.
- Suplantamos el archivo 'productos.json' por nuestra base de datos de firestore google y realizamos la conexion correspondiente.
- Por ultimo se complementa la pagina con un login y una forma de pago al terminar nuestra compra en el carrito.

## Futuro del proyecto:
- Mejora en estilos.
- Aplicar auth y login.
- Aplicar Testing de Quality a la pagina.


## Desarrollado con:
- [Visual Studio Code](https://code.visualstudio.com/)
- [React](https://es.reactjs.org/)
- [Box Icons](https://boxicons.com/)
- [Firebase Google](https://firebase.google.com/)
- [Toastify](https://www.npmjs.com/package/react-toastify/)

**Desarrollado por Franco Palavecino:**
- [GitHub](https://github.com/franpala94)
- [Linkedin](https://www.linkedin.com/in/franco-palavecino/)

