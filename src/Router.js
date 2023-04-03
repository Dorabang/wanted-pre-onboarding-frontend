import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Todo from './pages/Todo/TodoBoard';

const Router = () => {
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    setUserObj(localStorage.getItem('userToken'));
  }, [userObj]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/signin' element={<SignIn />} />

        <Route path='/signup' element={<SignUp />} />

        <Route path='/todo' element={<Todo userObj={userObj} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
