import { MDBContainer } from 'mdb-react-ui-kit';
import splash from '../../assets/images/splash.jpg';

// Functional component representing the home page of the application
const Home = () => {
    return (
        // MDBContainer component for a fluid container with a custom background class ('bkgrd')
        <MDBContainer fluid className="text-center bkgrd">
            <div>
                {/* Display the name in a large font size with light text color */}
                <h1 className="display-1 text-light p-4">Janet Webster</h1>

                {/* Display the job title in a smaller font size with light text color */}
                <h2 className="display-5 text-light">Software Engineer</h2>
            </div>

            {/* Display an image with a rounded-pill style, shadow, and margin */}
            <img src={splash} alt='splash' className='splash img-fluid rounded-pill shadow-4-strong card-picture my-5'/>
        </MDBContainer>
    );
};

// Export the 'Home' component
export default Home;
