import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Profile from './Profile';
import Nav from './Nav';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <div className='Router'>
                <Nav/>
                <Routes>
                    <Route path='/' exact element={<App/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default RouteSwitch;