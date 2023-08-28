import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Outlet />
        </>
      ),
      children: [
        { path: '/', element: <BookList /> },
        { path: '/Categories', element: <h1>I will be developed soon!</h1> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
