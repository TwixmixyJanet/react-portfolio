import React from 'react';
import { 
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBCardFooter,
    MDBBtn
} from 'mdb-react-ui-kit';
import resume from '../../assets/images/resume.png';

const Resume = () => {
    const resumeUrl = '';
    return (
        <MDBContainer className="vh-100">
            <div className="d-flex justify-content-center">
                <MDBCard className="w-25">
                    <MDBCardImage className="img-thumbnail" position='top' src={resume} />
                    <MDBCardBody>
                        <MDBCardTitle>Resume</MDBCardTitle>
                        <MDBCardText>
                            <p>Click below to download my resume</p>
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter className="text-center">
                        <MDBBtn href={resumeUrl} download>Download</MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
            </div>
        </MDBContainer>
    )
};

export default Resume;