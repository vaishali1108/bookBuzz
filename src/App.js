import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/admin/DashboardPage';
import ManageBook from './pages/admin/ManageBook';
import ManageMember from './pages/admin/ManageMember';
import Home from './pages/member/Home';
import About from './componets/member/About';
import Event from './componets/member/Event';
import MyBook from './pages/member/MyBook';
import Login from './pages/common/Login';

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
       {/* member routes */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/Event' element={<Event/>}/>
        <Route path='/books' element={<MyBook/>}/>
        {/* admin routes */}
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/book' element={<ManageBook />} />
        <Route path='/member' element={<ManageMember />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;