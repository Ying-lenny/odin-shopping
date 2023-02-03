import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Catalog from './Catalog';
import Nav from './Nav';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <div className='Router'>
                <Nav/>
                <Routes>
                    <Route path='/' exact element={<App/>}/>
                    <Route path='/Catalog' element={<Catalog/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default RouteSwitch;