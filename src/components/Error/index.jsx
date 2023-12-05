import { useRouteError } from 'react-router-dom';
import { MDBContainer } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import MyNav from '../Navigation';
import Footer from '../Footer';

// Functional component representing the error page
const ErrorPage = () => {
  // Retrieve error details from the route
  const error = useRouteError();
  // Log the error details to the console
  console.error(error);

  // Render the error page
  return (
    <>
      {/* Include the navigation component */}
      <MyNav />

      {/* Container for the error page with a custom background class ('bkgrd') */}
      <MDBContainer fluid className="text-center min-vh bkgrd">
        {/* Error page content */}
        <div id="error-page" className='p-5 text-light'>
          <h1>⚠️🚨❗❗🚨⚠️</h1>
          <h2>OOPS!</h2>
          <p>Sorry, an unexpected error has occurred.</p>
          {/* Display error details, either status text or message */}
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </MDBContainer>

      {/* Include the footer component */}
      <Footer />
    </>
  );
}

// Export the 'ErrorPage' component
export default ErrorPage;
