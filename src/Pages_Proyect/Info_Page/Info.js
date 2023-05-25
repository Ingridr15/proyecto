import './Info.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../Home_Page/Components/Banner/Banner';
import Footer from '../Home_Page/Components/Footer/Footer';
import Mision from './Components/Mision';
import Vision from './Components/Vision';


const Info =()=>{
    return(
        <div className='Info'>
            <Banner/>
            <Mision/>
            <Vision/>
            <Footer/>
        </div>
    );
}


export default Info;