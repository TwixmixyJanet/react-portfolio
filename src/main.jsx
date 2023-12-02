import React from 'react'
import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

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
    // main layout (wraps the remaining page components)
    element: <App />,
    // https://reactrouter.com/en/main/route/error-element#errorelement
    // When exceptions are thrown in loaders, actions, or component rendering, instead of the normal render path for your Routes (<Route element>), the error path will be rendered (<Route errorElement>) and the error made available with useRouteError.
    // errorElement: <Error />,
    // An array of Route objects with nested routes on the children property.
    children: [
      // https://reactrouter.com/en/main/route/route
      // Routes are perhaps the most important part of a React Router app. They couple URL segments to components, data loading and data mutations. Through route nesting, complex application layouts and data dependencies become simple and declarative.
      {
        // https://reactrouter.com/en/main/route/route#index
        // Determines if the route is an index route. Index routes render into their parent's
        index: true,
        element: <Home />,
      },
      {
        // https://reactrouter.com/en/main/route/route#path
        // The path pattern to match against the URL to determine if this route matches a URL, link href, or form action.
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


// To mount our component onto the DOM, we'll actually render the RouterProvider component, which will hold the state of our browser location -  when the URL matches a certain pattern, a specific page will be shown.
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// );
