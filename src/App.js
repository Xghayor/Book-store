import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Status from './components/Categories';

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
        { path: '/Categories', element: <Status /> },
      ],
    },
  ], {
    basename: '/Book-store',
  });

  return <RouterProvider router={router} />;
};

export default App;
