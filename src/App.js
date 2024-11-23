import './App.css';
import Home from '../src/Pages/Home'
import About from '../src/Pages/About'
import Write from './Pages/Write';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Register from '../src/Pages/Register';
import Login from './Pages/Login';
import Contact from './Pages/Contact';

function App() {

  const router = createHashRouter([
    {
      path: "/",
      element: <><Home /></>,
    },
    {
      path: "/about",
      element: <><About /></>,
    },
    {
      path: "/write",
      element: <><Write /></>,
    },
    {
      path: "/contact",
      element: <><Contact /></>,
    },
    {
      path: "/register",
      element: <><Register /></>,
    },
    {
      path: "/login",
      element: <><Login /></>,
    },
  ]);

  return (
    <>
      <div className='app-bg'>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
