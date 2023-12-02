import React from 'react';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter className="text-center text-lg-start text-muted" bgColor='light'>
            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.05' }}>
                <span>
                    <a rel='noreferrer' href="https://www.linkedin.com/in/twixmixy/" className="me-4 text-reset" target='_blank'>
                        <MDBIcon fab icon='linkedin' size='2x'/>
                    </a>
                    <a rel='noreferrer' href="https://github.com/TwixmixyJanet" className="me-4 text-reset" target='_blank'>
                        <MDBIcon fab icon='github' size='2x'/>
                    </a>
                    <a rel='noreferrer' href="https://twixmixy.substack.com/" className="me-4 text-reset" target='_blank'>
                        <MDBIcon fab icon='newspaper' size='2x'/>
                    </a>
                </span>
            </div>
        </MDBFooter>
    )
};

export default Footer;