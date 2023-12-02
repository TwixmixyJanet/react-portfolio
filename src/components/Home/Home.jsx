import { MDBContainer } from 'mdb-react-ui-kit';
import splash from '../../assets/images/splash.jpg';

const Home = () => {
    return (
        <MDBContainer fluid className="text-center bkgrd">
            <div>
                <h1 className="display-1 text-secondary">Janet Webster</h1>
                <h2 className="display-5 text-secondary">Full Stack Web Developer</h2>
            </div>
            <img src={splash} alt='splash' className='splash img-fluid rounded shadow-4-strong'/>
        </MDBContainer>
    )
};

export default Home;