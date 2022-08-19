import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="app">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </div>
  );
}

export default App;
