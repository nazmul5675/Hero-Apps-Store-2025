
import Banner from '../../Components/Banner/Banner';
import { Link, useLoaderData } from 'react-router';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import App from '../../Components/App/App';
const Home = () => {
    const appData = useLoaderData();
    return (
        <div >
            <Banner></Banner>
            <div className='my-10'>
                <div className='flex flex-col justify-center items-center gap-y-10 container mx-auto'>
                    <h1 className='font-semibold sm:text-5xl text-3xl text-center'>Trending Apps</h1>
                    <p className='text-base text-black/50 text-center' >Explore All Trending Apps on the Market developed by us</p>
                    <div className='grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-10'>
                        {
                            appData.map(app => <App key={app.id} app={app}></App>)
                        }
                    </div>
                    <button className="btn  bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] text-white font-semibold">
                        <Link to='/apps'> Show All</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;