import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import NotFound from './pages/NotFound.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path="/" element= {< HomePage /> } /> 
      <Route path="*" element= {< NotFound /> } />
      

      </Routes> 
    </BrowserRouter>
  </StrictMode>,
)
