import './App.css';

import { Routes, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import { userCheck } from './redux/actions/userActions';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.addUser);

  useEffect(() => {
    dispatch(userCheck());
  }, []);
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route component={Error} />
      </Routes>

    </div>
  );
}

export default App;
