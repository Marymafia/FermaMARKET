import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Category from './components/Category/Category';
import CategoriesAllCard from './page/CategoriesAllCard';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/:id" element={<CategoriesAllCard />} />
        <Route component={Error} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
