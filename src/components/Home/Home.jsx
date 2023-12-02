import { MDBContainer } from 'mdb-react-ui-kit';
import splash from '../../assets/images/splash.jpg';

const Home = () => {
    return (
        <MDBContainer fluid className="text-center bkgrd">
            <img src={splash} alt='splash' className='splash img-fluid shadow-4-strong'/>
        </MDBContainer>
    )
};

export default Home;