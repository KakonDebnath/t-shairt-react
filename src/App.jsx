import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navbar from './components/Header/Navbar';

const App = () => {
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "About",
      path: "/about"
    },
    {
      id: 3,
      name: "Book",
      path: "/book"
    },
  ]
  return (
    <>
      <header>
        <div>
          <Link to={'/'}>Logo</Link>
          <nav>
            <ul>
              {
                routes.map((route) =><Navbar key={route.id} route={route}></Navbar>)
              }
            </ul>
          </nav>
        </div>
      </header>
      <Outlet></Outlet>
      <footer>
        <h1>This is footer Components</h1>
      </footer>
    </>
  );
};

export default App;