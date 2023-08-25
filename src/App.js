import React from 'react';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
      },
      {
        path: "/books",
        element: <div>Hello Books!</div>,
      },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
