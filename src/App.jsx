// Import the custom Navigation component
import MyNav from './components/Navigation';

// Import the Footer component
import Footer from './components/Footer';

// Import the styling for the App component
import './App.css';

// Import the Outlet component from 'react-router-dom', which is used to render child components based on the current route
import { Outlet } from 'react-router-dom';

// Import styles from 'mdb-react-ui-kit' and Font Awesome icons
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

// Define the main App component
function App() {
  // Render the main structure of the application
  return (
    <>
        {/* Render the custom Navigation component */}
        <MyNav />

        {/* Main content area, renders child components based on the current route */}
        <main>
          <Outlet />
        </main>

        {/* Render the Footer component */}
        <Footer />
    </>
  );
}

// Export the App component as the default export
export default App;
