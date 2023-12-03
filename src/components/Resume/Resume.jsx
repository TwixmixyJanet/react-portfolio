import { 
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBCardFooter,
    MDBBtn,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import resume from '../../assets/images/resume.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const downloadIcon = () => {
    return (
      <FontAwesomeIcon icon="fa-solid fa-download" />
    );
  };

const Resume = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1fyk6UEzhQw5PtoAYv6Ymtxsua_sFBljL/view?usp=sharing';
    return (
        <MDBContainer fluid className='h-100 pb-4 bkgrd'>
            <MDBRow className="row-cols-1 row-cols-md-2 g-3 pt-2">
                <MDBCol>
                <MDBCard className="m-3">
                <MDBCardTitle><h2 className='text-uppercase'>Skills</h2></MDBCardTitle>
                    <MDBCardBody>
                        
                        <MDBCardText className='d-flex flex-wrap justify-content-center align-items-center'>
                            <div>
                                <MDBBtn className='m-1'>JavaScript</MDBBtn>
                                <MDBBtn className='m-1'>MongoDB</MDBBtn>
                                <MDBBtn className='m-1'>Express.js</MDBBtn>
                                <MDBBtn className='m-1'>React.js</MDBBtn>
                                <MDBBtn className='m-1'>Node.js</MDBBtn>
                                <MDBBtn className='m-1'>SQL</MDBBtn>
                                <MDBBtn className='m-1'>PostgreSQL</MDBBtn>
                                <MDBBtn className='m-1'>MySQL</MDBBtn>
                                <MDBBtn className='m-1'>NoSQL</MDBBtn>
                                <MDBBtn className='m-1'>JSON</MDBBtn>
                                <MDBBtn className='m-1'>Web APIs</MDBBtn>
                                <MDBBtn className='m-1'>Third-Party APIs</MDBBtn>
                                <MDBBtn className='m-1'>Server-Side APIs</MDBBtn>
                                <MDBBtn className='m-1'>Object-Oriented Programming</MDBBtn>                     
                                <MDBBtn className='m-1'>Object-Relational Mapping</MDBBtn>
                                <MDBBtn className='m-1'>Model-View-Controller</MDBBtn>
                                <MDBBtn className='m-1'>Progressive Web Application</MDBBtn>
                                <MDBBtn className='m-1'>Python</MDBBtn>
                                <MDBBtn className='m-1'>Wordpress/PHP</MDBBtn>
                                <MDBBtn className='m-1'>Handlebars</MDBBtn>
                                <MDBBtn className='m-1'>Sequelize</MDBBtn>
                                <MDBBtn className='m-1'>Mongoose</MDBBtn>
                                <MDBBtn className='m-1'>jQuery</MDBBtn>
                                <MDBBtn className='m-1'>Bootstrap</MDBBtn>
                                <MDBBtn className='m-1'>CSS / Advanced CSS</MDBBtn>
                                <MDBBtn className='m-1'>TailwindCSS</MDBBtn>
                                <MDBBtn className='m-1'>HTML5</MDBBtn>
                                <MDBBtn className='m-1'>GitHub</MDBBtn>
                                <MDBBtn className='m-1'>Heroku</MDBBtn>
                                <MDBBtn className='m-1'>Netlify</MDBBtn>
                                <MDBBtn className='m-1'>Git</MDBBtn>
                                <MDBBtn className='m-1'>Command Line</MDBBtn>
                                <MDBBtn className='m-1'>Developer Tools</MDBBtn>
                                <MDBBtn className='m-1'>FTP</MDBBtn>
                                <MDBBtn className='m-1'>Pseudocode</MDBBtn>
                                <MDBBtn className='m-1'>VSCode</MDBBtn>
                                <MDBBtn className='m-1'>JIRA</MDBBtn>
                                <MDBBtn className='m-1'>Monday.com</MDBBtn>
                                <MDBBtn className='m-1'>Confluence</MDBBtn>
                                <MDBBtn className='m-1'>Microsoft Office / GSuite</MDBBtn>
                                <MDBBtn className='m-1'>Adobe Creative Suite</MDBBtn>
                                <MDBBtn className='m-1'>Photoshop</MDBBtn>
                                <MDBBtn className='m-1'>Computer Science</MDBBtn>
                                <MDBBtn className='m-1'>Problem Solving</MDBBtn>
                                <MDBBtn className='m-1'>Project Management</MDBBtn>
                                <MDBBtn className='m-1'>Strategic Planning</MDBBtn>
                                <MDBBtn className='m-1'>Agile Methodologies</MDBBtn>
                            </div>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
                <MDBCol>
                <MDBCard className="m-3">
                <MDBCardTitle><h2 className='text-uppercase'>Résumé</h2></MDBCardTitle>
                    <MDBCardImage className="img-thumbnail rounded-pill card-picture my-5 mx-auto" position='top' src={resume} />
                    <MDBCardBody> 
                        <MDBCardText>
                            <p>{downloadIcon}</p>
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter className="text-center">
                        <MDBBtn href={resumeUrl} download target="_blank">Download</MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
};

export default Resume;