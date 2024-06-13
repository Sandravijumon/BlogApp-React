import logo from './logo.svg';
import './App.css';
import LogIn from './components/LogIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LogIn/>}/>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
