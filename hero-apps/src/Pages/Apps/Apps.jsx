import React from 'react';
import { useLoaderData } from 'react-router';
import App from '../../Components/App/App';

const Apps = () => {
    const appData = useLoaderData();
    console.log(appData);
    return (
        <div className='container mx-auto py-10'>
            <div className='  justify-center items-center '>
                <div className='text-center mb-2'>
                    <h1 className='font-bold sm:text-5xl text-3xl mb-3'>Our All Applications</h1>
                    <p className='text-base font-normal text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex sm:flex-row flex-col sm:justify-between items-center'>
                    <h1 className='font-semibold text-xl ' >({appData.length}) Apps Found</h1>
                    <div>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" required placeholder="Search" />
                        </label>
                    </div>
                </div>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-10 my-10'>
                {
                    appData.map(app => <App key={app.id} app={app}></App>)
                }
            </div>
        </div>
    );
};

export default Apps;