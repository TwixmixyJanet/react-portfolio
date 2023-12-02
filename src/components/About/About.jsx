import React from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import './About.css';
import headshot from '../../assets/images/headshot.JPEG';

const About = () => {
    return (
        <MDBContainer fluid className='vh-100 bkgrd'>
            <div className="d-flex justify-content-center flex-column flex-sm-row">
                <MDBCard className="order-sm-2 card-picture my-4 mx-auto mx-sm-0">
                    <MDBCardImage variant="top" className='img-fluid rounded' src={headshot} alt='headshot' />
                </MDBCard>
                <MDBCard className="order-sm-1 my-4 card-text mx-auto mx-sm-0" border='dark'>
                    <MDBCardBody>
                        <MDBCardTitle className='text-center'>About Janet Webster</MDBCardTitle>
                        <MDBCardText>
                            <p>
                            I'm a Full Stack MERN Software Engineer.<br />
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