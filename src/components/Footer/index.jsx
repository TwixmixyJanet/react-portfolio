import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';

// Functional component representing the footer section of the application
const Footer = () => {
    return (
        // MDBFooter component with text styling and light background color
        <MDBFooter className="text-center text-lg-start text-muted" bgColor='light'>
            <div className="text-center p-4">
                {/* LinkedIn icon with a link to the LinkedIn profile */}
                <a rel='noreferrer' href="https://www.linkedin.com/in/twixmixy/" className="me-4 text-reset" target='_blank'>
                    <MDBIcon fab icon='linkedin' size='2x'/>
                </a>

                {/* GitHub icon with a link to the GitHub profile */}
                <a rel='noreferrer' href="https://github.com/TwixmixyJanet" className="me-4 text-reset" target='_blank'>
                    <MDBIcon fab icon='github' size='2x'/>
                </a>

                {/* Microblog icon with a link to the Substack microblog */}
                <a rel='noreferrer' href="https://twixmixy.substack.com/" className="me-4 text-reset" target='_blank'>
                    <MDBIcon fab icon='microblog' size='2x'/>
                </a>
            </div>
        </MDBFooter>
    );
};

// Export the 'Footer' component
export default Footer;
