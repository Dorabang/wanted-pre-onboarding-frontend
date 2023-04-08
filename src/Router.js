import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import TodoBoard from './pages/Todo/TodoBoard';

const Router = () => {
  const [userObj, setUserObj] = useState(null);

  const SERVER_URI = 'https://www.pre-onboarding-selection-task.shop';

  useEffect(() => {
    setUserObj(localStorage.getItem('userToken'));
  }, [userObj]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home userObj={userObj} />} />

        <Route
          path='/signin'
          element={<SignIn userObj={userObj} SERVER_URI={SERVER_URI} />}
        />

        <Route
          path='/signup'
          element={<SignUp userObj={userObj} SERVER_URI={SERVER_URI} />}
        />

        <Route
          path='/todo'
          element={<TodoBoard userObj={userObj} SERVER_URI={SERVER_URI} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
