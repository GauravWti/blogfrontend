import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import NewForm from './component/NewForm.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ParticularBlog from './component/ParticularBlog.jsx';

function App() {
  return (
    <div>

     <BrowserRouter>
         <Routes>
            <Route element={<Form/>} path='/'/>
            <Route element={<NewForm/>} path='/try'/>
            <Route element={<ParticularBlog/>} path='/post'/>

         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
