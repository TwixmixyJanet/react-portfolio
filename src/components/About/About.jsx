import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import './About.css';
import headshot from '../../assets/images/headshot.jpg';

const About = () => {
    return (
        <MDBContainer fluid className='vh-100 bkgrd'>
            <div className="d-flex justify-content-center flex-column flex-sm-row">
                <MDBCard className="order-sm-1 card-picture my-5 mx-auto mx-sm-3">
                    <MDBCardImage variant="top" className='img-fluid rounded' src={headshot} alt='headshot' />
                </MDBCard>
                <MDBCard className="order-sm-2 my-4 card-text mx-auto mx-sm-3 bg-light">
                    <MDBCardBody>
                        <MDBCardTitle className='text-center text-uppercase'>About Me</MDBCardTitle>
                        <MDBCardText>
                            <p><code>I'm a Full Stack MERN Software Engineer.</code>
                            <br />
                            <br />
                            📅📝👩‍💼 My background is in project management. I've been working in operations for over 8 years.
                            </p>
                            <p>
                            👩🏻‍💻🛠️🚀I got into coding when I was a teenager and am now returning to my roots in all things nerdy by acquiring my Full Stack MERN certification through UC Berkeley and my Front End Dev certification through Skillcrush.
                            </p>
                            <p>
                            🛼✌️🗳️Outside of professional endeavors I like to play roller derby with Charlotte Roller Derby, coach women and girls with Foundation For Girls, and contribute to my local community by getting out the vote.
                            </p>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </MDBContainer>
    )
}

export default About;