import { useRouteError } from 'react-router-dom';
import { MDBContainer } from 'mdb-react-ui-kit';
import MyNav from '../Navigation';
import Footer from '../Footer';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <MyNav />
    <MDBContainer fluid className="text-center min-vh bkgrd">
    <div id="error-page" className='p-5'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    </MDBContainer>
    <Footer />
    </>
  );
}

export default ErrorPage;