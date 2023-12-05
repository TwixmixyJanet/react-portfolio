// Import specific components from the 'mdb-react-ui-kit' library
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';

// Import the styling for the 'About' component from the 'About.css' file
import './About.css';

// Import the 'headshot' image from the specified file path
import headshot from '../../assets/images/headshot.jpg';

// Functional component representing the 'About' section of the application
const About = () => {
    return (
        // Use 'MDBContainer' for a fluid container with a custom background class ('bkgrd')
        <MDBContainer fluid className='min-vh bkgrd'>
            {/* Flexbox container with columns on small screens and rows on larger screens */}
            <div className="d-flex justify-content-center flex-column flex-sm-row">
                {/* Order 1 (on small screens) and Order 2 (on larger screens) image of the headshot */}
                <MDBCardImage variant="top" className='img-fluid rounded-pill order-sm-1 card-picture my-5 mx-auto mx-sm-3' src={headshot} alt='headshot' />

                {/* Order 2 (on small screens) and Order 1 (on larger screens) card containing text */}
                <MDBCard className="order-sm-2 my-4 card-text mx-auto mx-sm-3 bg-light">
                    <MDBCardBody>
                        {/* Title for the 'About Me' section */}
                        <MDBCardTitle className='text-center text-uppercase'>About Me</MDBCardTitle>

                        {/* Main text content with details about me */}
                        <MDBCardText>
                            <p><code>I'm a Full Stack MERN Software Engineer.</code>
                            <br />
                            <br />
                            📅📝👩‍💼 My background is in project management. I've been working in operations for over 8 years.
                            </p>
                            <p>
                            👩🏻‍💻🛠️🚀I got into coding when I was a teenager and am now returning to my roots in all things nerdy by acquiring my <code>Full Stack MERN certification through UC Berkeley</code> and my <code>Front End Dev certification through Skillcrush</code>.
                            </p>
                            <p>
                            🛼✌️🗳️Outside of professional endeavors I like to play roller derby with Charlotte Roller Derby, coach women and girls with Foundation For Girls, and contribute to my local community by getting out the vote.
                            </p>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </MDBContainer>
    );
}

// Export the 'About' component
export default About;