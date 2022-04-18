import './App.scss';
import { ContactForm } from './pages/ContactForm';
import { NavBar } from './components/NavBar';
import { Gallery } from './pages/Gallery';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Products } from './pages/Products';

function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/gallery' element={<Gallery></Gallery>} />
          <Route
            exact
            path='/contact-form'
            element={<ContactForm></ContactForm>}
          />
          <Route exact path='/products' element={<Products></Products>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
