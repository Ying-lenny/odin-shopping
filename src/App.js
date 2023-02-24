import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CatalogPage from './pages/CatalogPage';
import Nav from './Components/Nav';
import ShoppingCart from './Components/ShoppingCart'
import { CartProvider } from "./context/CartContext";
import { useState } from 'react';

function App() {
    const [showCart, setShowCart] = useState(false)

	function toggleShoppingCart(e){
		e.preventDefault()
		setShowCart(!showCart)
	}

    return (
        <CartProvider>
            <BrowserRouter>
                <div className='Router'>
                    <Nav toggleShoppingCart={toggleShoppingCart}/>
					{showCart ? 
						<div 
							key="shoppingCart"
							className='shopping-cart-sidebar'
						>
							<ShoppingCart toggleShoppingCart={toggleShoppingCart}/>
						</div> 
					: null}
                    <Routes>
                        <Route path='/' exact element={<Homepage/>}/>
                        <Route path='/Catalog' element={<CatalogPage/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </CartProvider>
    )
}

export default App;