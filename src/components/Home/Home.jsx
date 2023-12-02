import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import splash from '../../assets/images/splash.jpg';

const Home = () => {
    return (
        <MDBContainer fluid className="text-center vh-100 bkgrd">
            <img src={splash} alt='splash' className='splash img-fluid rounded-pill shadow-4-strong'/>
            <p className="my-0 py-0 text-dark fs-1">My React Portfolio!</p>
        </MDBContainer>
    )
};

export default Home;