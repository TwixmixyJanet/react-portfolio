import { useState } from 'react';
import { 
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon,
    MDBNavbarNav
} from 'mdb-react-ui-kit';
import { LinkContainer } from 'react-router-bootstrap';
import './MyNav.css';

const MyNav = () => {
    const [showNavNoToggler, setShowNavNoToggler] = useState(false);

    return (
        <>
        <MDBNavbar expand='md' dark className='p-5'>
            <MDBContainer className='d-flex flex-wrap justify-content-center align-items-center'>
                <MDBNavbarToggler type='button'
                data-target='#navbar'
                aria-controls='navbar'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowNavNoToggler(!showNavNoToggler)}>
                    <MDBIcon fas icon='bars' size='2x' />
                </MDBNavbarToggler>
                <MDBCollapse navbar open={showNavNoToggler}>
                <MDBNavbarNav className='d-flex flex-wrap align-items-center'>
                    <LinkContainer to='/'>
                        <MDBNavbarBrand href="#home" >Janet Webster</MDBNavbarBrand>
                    </LinkContainer>
                    <LinkContainer to='/about' className='p-2'>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#about'>About</MDBNavbarLink>
                        </MDBNavbarItem>
                        
                    </LinkContainer>
                    <LinkContainer to='/portfolio' className='p-2'>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#portfolio'>Portfolio</MDBNavbarLink>
                        </MDBNavbarItem>
                    </LinkContainer>
                    <LinkContainer to='/resume' className='p-2'>
                    <MDBNavbarItem>
                            <MDBNavbarLink href='#resume'>Résumé</MDBNavbarLink>
                        </MDBNavbarItem>
                    </LinkContainer>
                    <LinkContainer to='/contact' className='p-2'>
                    <MDBNavbarItem>
                            <MDBNavbarLink href='#contact'>Contact</MDBNavbarLink>
                        </MDBNavbarItem>
                    </LinkContainer>
                </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
        </>
    );
}

export default MyNav;