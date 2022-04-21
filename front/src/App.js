import './App.scss';
import { ContactForm } from './pages/ContactForm';
import { NavBar } from './components/NavBar';
import { Gallery } from './pages/Gallery';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Products } from './pages/Products';
import { Login } from './pages/Login';
import {LoginProvider} from './context/LoginContext';

function App() {
  return (
    <>
    <LoginProvider>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/gallery' element={<Gallery></Gallery>} />
          <Route exact path='/contact-form'element={<ContactForm></ContactForm>}/>
          <Route exact path='/products' element={<Products></Products>} />
          <Route exact path='/login' element={<Login></Login>} />
          <Route exact path='*' element={<Gallery></Gallery>} />
        </Routes>
      </Router>
      </LoginProvider>
    </>
  );
}

export default App;
