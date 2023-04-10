import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import TodoList from './pages/Todo';

const Router = () => {
  const SERVER_URI = 'https://www.pre-onboarding-selection-task.shop';
  const accessToken = localStorage.getItem('access_token');

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home accessToken={accessToken} />} />

        <Route
          path='/signin'
          element={<SignIn accessToken={accessToken} SERVER_URI={SERVER_URI} />}
        />

        <Route
          path='/signup'
          element={<SignUp accessToken={accessToken} SERVER_URI={SERVER_URI} />}
        />

        <Route
          path='/todo'
          element={
            <TodoList accessToken={accessToken} SERVER_URI={SERVER_URI} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
