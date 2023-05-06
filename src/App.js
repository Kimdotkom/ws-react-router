import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Products from './Pages/Products';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
    <Navigation />
     <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/products' element={ <Products /> } />
      <Route path='/*' element={ <Error /> } />
     </Routes>
    </div>
  );
}

export default App;
