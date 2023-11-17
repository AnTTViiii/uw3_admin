import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import Dashboard from './pages/Dashboard'
import User from './pages/User'
import MainLayout from './layout/MainLayout'
import Artist from './pages/Artist'
import Album from './pages/Album'
import Song from './pages/Song'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />} >
                    <Route index element={<Dashboard />} />
                    <Route path='users' element={<User />} />
                    <Route path='artists' element={<Artist />} />
                    <Route path='albums' element={<Album />} />
                    <Route path='songs' element={<Song />} />
                    <Route path='settings' element={<Blank />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
