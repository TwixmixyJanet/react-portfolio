import { useRouteError } from 'react-router-dom';
import { MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import MyNav from '../Navigation';
import Footer from '../Footer';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <MyNav />
    <MDBContainer fluid className="text-center min-vh bkgrd">
    <div id="error-page" className='p-5 text-light'>
      <MDBIcon fab icon='bug' size='5x' className='p-3' />
      <h1>🐛OOPS!🐛</h1>
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