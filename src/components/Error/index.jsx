import { useRouteError } from 'react-router-dom';
import { MDBContainer } from 'mdb-react-ui-kit';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <MDBContainer fluid className="text-center bkgrd">
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    </MDBContainer>
  );
}

export default ErrorPage;