import { Routes, Route } from 'react-router-dom';
import { LandingView } from './features/landing/LandingView';
import { ServicesView } from './features/services/ServicesView';


function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingView />} />
      <Route path='/servicios' element={<ServicesView />} />
    </Routes>
  );
}

export default App;
