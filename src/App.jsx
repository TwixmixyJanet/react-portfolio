import MyNav from './components/Navigation/MyNav';
import Footer from './components/Footer/Footer';
import './App.css'

import { Outlet } from 'react-router-dom';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {

  return (
    <>
        <MyNav />
        <main >
          <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default App;
