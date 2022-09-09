import { Routes, Route, Navigate } from 'react-router-dom'
import Auth from './components/Auth';
import Restricted from './components/Restricted'
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
       <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/restricted' element={<Restricted/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </div>
  );
}

export default App;
