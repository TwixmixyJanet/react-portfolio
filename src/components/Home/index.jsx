import { MDBContainer } from 'mdb-react-ui-kit';
import splash from '../../assets/images/splash.jpg';

const Home = () => {
    return (
        <MDBContainer fluid className="text-center bkgrd">
            <div>
                <h1 className="display-1 text-light p-4">Janet Webster</h1>
                <h2 className="display-5 text-light">Full Stack MERN Software Engineer</h2>
            </div>
            <img src={splash} alt='splash' className='splash img-fluid rounded-pill shadow-4-strong
            card-picture my-5'/>
        </MDBContainer>
    )
};

export default Home;