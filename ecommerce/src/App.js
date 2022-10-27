import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./context/CartContext";
import CartContainer from "./Components/CartContainer/CartContainer";

const App = () => {
  return (
  <BrowserRouter>
    <CartProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer title="Catálogo"/>}></Route>
        <Route path='/item/:id' element={<ItemDetailContainer title="Detalle"/>}></Route>
        <Route path='/category/:category' element={ <ItemListContainer/>}></Route>   
        <Route path='*' element={ <ItemListContainer title="Catálogo"/>}></Route>   
        <Route path='/cart' element= {<CartContainer/>}> </Route>
      </Routes>
    </CartProvider>
  </BrowserRouter>
  );
}

export default App;
