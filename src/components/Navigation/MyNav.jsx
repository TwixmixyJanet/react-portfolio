import React, { useState } from 'react';
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
        <MDBNavbar expand='lg' dark bgColor='dark'>
            <MDBContainer fluid>
                <MDBNavbarToggler type='button'
                data-target='#navbarTogglerDemo01'
                aria-controls='navbarTogglerDemo01'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowNavNoToggler(!showNavNoToggler)}>
                    <MDBIcon fas icon='bars' />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNavNoToggler}>
                <MDBNavbarNav>
                    <LinkContainer to='/'>
                        <MDBNavbarBrand href="#home">Janet Webster</MDBNavbarBrand>
                    </LinkContainer>
                    <LinkContainer to='/about'>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#about'>About</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem to='/portfolio'>
                            <MDBNavbarLink href='#portfolio'>Portfolio</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem to='/resume'>
                            <MDBNavbarLink href='#resume'>Résumé</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem to='/contact'>
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