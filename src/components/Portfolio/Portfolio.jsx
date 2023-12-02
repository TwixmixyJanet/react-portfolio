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
import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.png';
import project3 from '../../assets/images/project3.png';
import project4 from '../../assets/images/project4.png';
import project5 from '../../assets/images/project5.png';
import project6 from '../../assets/images/project6.png';

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
                        <MDBCardImage className="img-thumbnail" position='top' src={project2}/>
                        <MDBCardBody>
                            <MDBCardTitle>Project 2</MDBCardTitle>
                            <MDBCardText>
                                <p>Project 2 description</p>
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
                        <MDBCardImage className="img-thumbnail" position='top' src={project3}/>
                        <MDBCardBody>
                            <MDBCardTitle>Project 3</MDBCardTitle>
                            <MDBCardText>
                                <p>Project 3 description</p>
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
                        <MDBCardImage className="img-thumbnail" position='top' src={project4}/>
                        <MDBCardBody>
                            <MDBCardTitle>Project 4</MDBCardTitle>
                            <MDBCardText>
                                <p>Project 4 description</p>
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
                        <MDBCardImage className="img-thumbnail" position='top' src={project5}/>
                        <MDBCardBody>
                            <MDBCardTitle>Project 5</MDBCardTitle>
                            <MDBCardText>
                                <p>Project 5 description</p>
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
                        <MDBCardImage className="img-thumbnail" position='top' src={project6}/>
                        <MDBCardBody>
                            <MDBCardTitle>Project 6</MDBCardTitle>
                            <MDBCardText>
                                <p>Project 6 description</p>
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