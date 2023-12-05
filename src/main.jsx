// Import the necessary modules and components from external libraries and files
import ReactDOM from 'react-dom/client'; // ReactDOM for rendering React components into the DOM
import App from './App'; // Import the main App component
import './index.css'; // Import the styles defined in the index.css file
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Import styles from the 'mdb-react-ui-kit' library
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import routing-related components from 'react-router-dom'
import Error from './components/Error'; // Import the Error component
import Home from './components/Home'; // Import the Home component
import Contact from './components/Contact'; // Import the Contact component
import About from './components/About'; // Import the About component
import Portfolio from './components/Portfolio'; // Import the Portfolio component
import Resume from './components/Resume'; // Import the Resume component

// Create a router using the createBrowserRouter function from 'react-router-dom'
const router = createBrowserRouter([
  {
    // Define the main route for the root path '/'
    path: '/',
    element: <App />, // Render the main App component for the root path
    errorElement: <Error />, // Render the Error component in case of an error
    children: [
      {
        // Define a child route for the root path, indicating it as the index
        index: true,
        element: <Home />, // Render the Home component for the root path
      },
      {
        // Define a child route for the '/About' path
        path: '/About',
        element: <About />, // Render the About component for the '/About' path
      },
      {
        // Define a child route for the '/Portfolio' path
        path: '/Portfolio',
        element: <Portfolio />, // Render the Portfolio component for the '/Portfolio' path
      },
      {
        // Define a child route for the '/Contact' path
        path: '/Contact',
        element: <Contact />, // Render the Contact component for the '/Contact' path
      },
      {
        // Define a child route for the '/Resume' path
        path: '/Resume',
        element: <Resume />, // Render the Resume component for the '/Resume' path
      },
    ],
  },
]);

// Use ReactDOM.createRoot to create a root instance for rendering React elements
ReactDOM.createRoot(document.getElementById('root')).render(
  // Render the RouterProvider component with the specified router configuration
  <RouterProvider router={router} />
);