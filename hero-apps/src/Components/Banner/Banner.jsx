import bannerImg from '../../assets/hero.png';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
const Banner = () => {
    return (
        <div className=' my-20'>
            <div className='flex flex-col justify-center items-center gap-y-10 container mx-auto'>
                <div className='flex flex-col gap-y-10'>
                    <h1 className='text-7xl text-black font-bold text-center'>We Build <br />
                        <span className='text-[#632EE3] font-black'>Productive</span> Apps</h1>
                    <p className='text-[#627382] text-xl text-center px-10'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className='flex justify-center items-center'>
                        <button className='btn font-semibold text-green-700 mr-3'><FaGooglePlay /> <span className='text-black'>Google Play</span></button>
                        <button className='btn font-semibold text-blue-700 '><FaAppStoreIos /> <span className='text-black'>App Store</span></button>
                    </div>
                </div>
                <img src={bannerImg} alt="" />
            </div>
            <div className='bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] text-white font-semibold py-10'>
                <h1 className='font-bold text-5xl text-center mb-10 '>Trusted by Millions, Built for You</h1>
                <div className='flex justify-center items-center gap-x-30'>
                    <div className='flex flex-col justify-center items-center gap-y-5'>
                        <p className='font-normal text-base '>Total Downloads</p>
                        <h1 className='font-extrabold text-6xl '>29.6M</h1>
                        <p className='font-normal text-base '>21% more than last month</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-y-5'>
                        <p className='font-normal text-base '>Total Reviews</p>
                        <h1 className='font-extrabold text-6xl '>906K</h1>
                        <p className='font-normal text-base '>46% more than last month</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-y-5'>
                        <p className='font-normal text-base '>Active Apps</p>
                        <h1 className='font-extrabold text-6xl '>132+</h1>
                        <p className='font-normal text-base '>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;