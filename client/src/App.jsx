import './App.css';

import { Routes, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';

import Footer from './components/Footer/Footer';
import Category from './components/Category/Category';

import { userCheck } from './redux/actions/userActions';

import CategoriesAllCard from './page/CategoriesAllCard';

import AboutCompany from './components/AboutCompany/AboutCompany';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Lk from './components/Lk/Lk';


function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.addUser);

  useEffect(() => {
    dispatch(userCheck());
  }, []);
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

        <Route path="/about" element={<AboutCompany />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/lk" element={<Lk />} />

        <Route component={Error} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
