import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import PatientDetail from './pages/PatientDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

export const App = () => {
  return (
      <Box width='100%' sx= {{ width: { xl: '1488px' } }} m="auto">
        <Navbar/>
        <Routes>
          <Route path="/" element= { <Home/>}/>
          <Route path="/add/:id" element={<PatientDetail />} />
        </Routes>
        <Footer />
      </Box>
  )
}



export default App