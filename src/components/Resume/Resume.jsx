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
        <MDBContainer fluid className='vh-100 bkgrd'>
            <div className="d-flex justify-content-center">
                <MDBCard className="w-35 m-3">
                    <MDBCardBody>
                        <MDBCardTitle>Skills</MDBCardTitle>
                        <MDBCardText>
                            <div><MDBBtn className='m-1'>JavaScript</MDBBtn>
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
                <MDBCard className="w-25 m-3">
                    <MDBCardImage className="img-thumbnail" position='top' src={resume} />
                    <MDBCardBody>
                        <MDBCardTitle><h1>Resume</h1></MDBCardTitle>
                        <MDBCardText>
                            <h2 className='text-uppercase p-4'>Click below to download my resume</h2>
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