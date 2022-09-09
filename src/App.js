import { Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react';
import Auth from './components/Auth';
import Restricted from './components/Restricted'
import './App.css';
import Header from './components/Header';
import AuthContext from './store/authContext';


function App() {
  const authCtx = useContext(AuthContext)
  return (
    <div className="App">
      <Header />
       <Routes>
        <Route path='/' element={!authCtx.token ? <Auth/> : <Navigate to='restricted'/>}/>
        <Route path='/restricted' element={authCtx.token ? <Restricted/> : <Navigate to='/'/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </div>
  );
}

export default App;
