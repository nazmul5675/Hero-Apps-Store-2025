
import { useLoaderData, useOutletContext, useParams } from 'react-router';
import downloadsIcon from '../../assets/icon-downloads.png';
import starIcon from '../../assets/icon-ratings.png';
import reviewIcon from '../../assets/icon-review.png';

import BarChartss from '../../Components/BarChartss/BarChartss';





const AppDetailsPage = () => {

    const { handleInstallBtn } = useOutletContext();
    const { btn } = useOutletContext();




    const appData = useLoaderData();
    const { id } = useParams();
    const dataId = parseInt(id);
    const singleApp = appData.find(app => app.id === dataId);

    const {
        companyName,
        description,
        downloads,
        image,
        purpose,
        ratingAvg,
        ratings,
        reviews,
        size,
        title } = singleApp

    return (
        <div className='bg-slate-100 py-5'>
            <div className='container mx-auto '>
                <div className='flex flex-col sm:flex-row justify-start items-center p-10 gap-x-10 '>
                    <div className='sm:w-1/3 w-1/2'>
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl mb-3'>{title} : {purpose}</h1>
                        <p className='text-xl text-[#627382] font-normal'>Developed by <span className='text-[#632EE3]'>{companyName}</span></p>
                        <div className='border border-t-1 border-black/10 my-5'></div>
                        <div className='flex sm:flex-row flex-col justify-evenly gap-x-20 my-10 '>
                            <div className='sm:mb-0 mb-8'>
                                <img src={downloadsIcon} alt="" />
                                <p className='text-base text-[#001931] '>Downloads</p>
                                <h1 className='text-[#001931] font-extrabold text-4xl'>{downloads}</h1>
                            </div>
                            <div className='sm:mb-0 mb-8'>
                                <img src={starIcon} alt="" />
                                <p className='text-base text-[#001931] '>{ratingAvg}</p>
                                <h1 className='text-[#001931] font-extrabold text-4xl'>4.9</h1>
                            </div>
                            <div className='sm:mb-0 mb-8'>
                                <img src={reviewIcon} alt="" />
                                <p className='text-base  text-[#001931]'>Total Reviews</p>
                                <h1 className='text-[#001931] font-extrabold text-4xl'>{reviews}</h1>
                            </div>
                        </div>

                        <button onClick={() => handleInstallBtn(singleApp)} className='btn bg-green-600 text-white'>{btn}
                            {btn === 'Install Now' && `(${size})`} </button>
                        <div className='border border-t-1 border-black/10 my-2'></div>
                    </div>
                </div>


                <div>
                    <h1 className='font-semibold text-2xl mb-3'>Ratings</h1>
                    <div>
                        <BarChartss ratings={ratings}></BarChartss>
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold text-2xl my-3'>Description</h1>
                    <p className='text-base text-[#627382]'>{description}</p>
                </div>
            </div>
        </div>

    );
};

export default AppDetailsPage;