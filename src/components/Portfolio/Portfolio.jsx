import React from 'react';
import { 
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCol,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBCardLink,
    MDBCardFooter
} from 'mdb-react-ui-kit';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import project5 from '../../assets/project5.png';
import project6 from '../../assets/project6.png';

const Portfolio = () => {
    return (
        <MDBContainer fluid className="h-100 pb-4 bkgrd">
            <MDBRow className="row-cols-1 row-cols-md-3 g-3 pt-2">
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position='top' src={project1}/>
                        <MDBCardBody>
                            <MDBCardTitle>Project 1</MDBCardTitle>
                            <MDBCardText>
                                <p>Project 1 description</p>
                                <p>Technologies used: HTML, CSS, JavaScript, jQuery, APIs</p>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <MDBCardLink href=''>Repo Link</MDBCardLink>
                            <MDBCardLink href=''>Deploy Link</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position='top' src={project1}/>
                        <MDBCardBody>
                            <MDBCardTitle>Project 1</MDBCardTitle>
                            <MDBCardText>
                                <p>Project 1 description</p>
                                <p>Technologies used: HTML, CSS, JavaScript, jQuery, APIs</p>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <MDBCardLink href=''>Repo Link</MDBCardLink>
                            <MDBCardLink href=''>Deploy Link</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position='top' src={project1}/>
                        <MDBCardBody>
                            <MDBCardTitle>Project 1</MDBCardTitle>
                            <MDBCardText>
                                <p>Project 1 description</p>
                                <p>Technologies used: HTML, CSS, JavaScript, jQuery, APIs</p>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <MDBCardLink href=''>Repo Link</MDBCardLink>
                            <MDBCardLink href=''>Deploy Link</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position='top' src={project1}/>
                        <MDBCardBody>
                            <MDBCardTitle>Project 1</MDBCardTitle>
                            <MDBCardText>
                                <p>Project 1 description</p>
                                <p>Technologies used: HTML, CSS, JavaScript, jQuery, APIs</p>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <MDBCardLink href=''>Repo Link</MDBCardLink>
                            <MDBCardLink href=''>Deploy Link</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position='top' src={project1}/>
                        <MDBCardBody>
                            <MDBCardTitle>Project 1</MDBCardTitle>
                            <MDBCardText>
                                <p>Project 1 description</p>
                                <p>Technologies used: HTML, CSS, JavaScript, jQuery, APIs</p>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <MDBCardLink href=''>Repo Link</MDBCardLink>
                            <MDBCardLink href=''>Deploy Link</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position='top' src={project1}/>
                        <MDBCardBody>
                            <MDBCardTitle>Project 1</MDBCardTitle>
                            <MDBCardText>
                                <p>Project 1 description</p>
                                <p>Technologies used: HTML, CSS, JavaScript, jQuery, APIs</p>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <MDBCardLink href=''>Repo Link</MDBCardLink>
                            <MDBCardLink href=''>Deploy Link</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
};

export default Portfolio;