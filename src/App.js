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
        { path: '/', element: <div>Hello world!</div> },
        { path: '/books', element: <BookList /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
