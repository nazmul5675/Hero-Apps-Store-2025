
import Banner from '../../Components/Banner/Banner';
import { Link, useLoaderData } from 'react-router';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
const Home = () => {
    const appData = useLoaderData();
    console.log(appData);
    return (
        <div >
            <Banner></Banner>
            <div className='my-10'>
                <div className='flex flex-col justify-center items-center gap-y-10 container mx-auto'>
                    <h1 className='font-semibold sm:text-5xl text-3xl text-center'>Trending Apps</h1>
                    <p className='text-base text-black/50 text-center' >Explore All Trending Apps on the Market developed by us</p>
                    <div className='grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-10'>
                        {
                            appData.map(app => <div key={app.id}>
                                <div className="card bg-base-100 w-96 h-96 shadow-sm   hover:scale-105 transition-transform duration-300 ">
                                    <figure className='bg-gray-100'>
                                        <Link to={`/appDetails/${app.id}`}>
                                            <img
                                                className='w-[2550px] h-[250px] p-10'
                                                src={app.image}
                                                alt="Shoes" />
                                        </Link>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{app.title}:{app.purpose}</h2>
                                        <div className='flex justify-between items-center'>
                                            <button className='btn text-green-500 bg-green-100'>
                                                <FaDownload /> {app.downloads}
                                            </button>
                                            <button className='btn bg-amber-100 text-amber-500' >
                                                <FaStar />  {app.ratingAvg}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>)
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