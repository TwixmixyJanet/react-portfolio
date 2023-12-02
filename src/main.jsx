// import React from 'react'
import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css'

// import Error from './pages/Error';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
// import Footer from './components/Footer/Footer';
// import Navigation from './components/Navigation/MyNav';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />, - not needed right now
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

// old version:
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// );
