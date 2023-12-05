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

// Functional component representing the navigation bar of the application
const MyNav = () => {
    // State to manage the visibility of the navigation bar on small screens
    const [showNavNoToggler, setShowNavNoToggler] = useState(false);

    return (
        <>
            {/* MDBNavbar component with dark styling and padding */}
            <MDBNavbar expand='md' dark className='p-5'>
                {/* MDBContainer for centering and aligning items in the navigation bar */}
                <MDBContainer className='d-flex flex-wrap justify-content-center align-items-center'>
                    {/* MDBNavbarToggler for the collapsible navigation menu on small screens */}
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbar'
                        aria-controls='navbar'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavNoToggler(!showNavNoToggler)}>
                        {/* Icon for the toggle button */}
                        <MDBIcon fas icon='bars' size='2x' />
                    </MDBNavbarToggler>

                    {/* MDBCollapse component for the collapsible navigation menu */}
                    <MDBCollapse navbar open={showNavNoToggler}>
                        {/* MDBNavbarNav for the navigation items */}
                        <MDBNavbarNav className='d-flex flex-wrap align-items-center'>
                            {/* Home link with a LinkContainer for routing */}
                            <LinkContainer to='/'>
                                <MDBNavbarBrand href="#home" >Janet Webster</MDBNavbarBrand>
                            </LinkContainer>

                            {/* About link with a LinkContainer for routing */}
                            <LinkContainer to='/about' className='p-2'>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#about'>About</MDBNavbarLink>
                                </MDBNavbarItem>
                            </LinkContainer>

                            {/* Portfolio link with a LinkContainer for routing */}
                            <LinkContainer to='/portfolio' className='p-2'>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#portfolio'>Portfolio</MDBNavbarLink>
                                </MDBNavbarItem>
                            </LinkContainer>

                            {/* Résumé link with a LinkContainer for routing */}
                            <LinkContainer to='/resume' className='p-2'>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#resume'>Résumé</MDBNavbarLink>
                                </MDBNavbarItem>
                            </LinkContainer>

                            {/* Contact link with a LinkContainer for routing */}
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

// Export the 'MyNav' component
export default MyNav;
