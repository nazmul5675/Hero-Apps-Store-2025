import React from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from '../../assets/logo.png';
const Footer = () => {
    return (
        <div className='bg-[#001931]'>
            <div className='container mx-auto'>
                <footer className='footer sm:footer-horizontal    p-4 text-white/70'>
                    <div>
                        <div className='flex items-center gap-x-3'>
                            <img className='w-10' src={logoImg} alt="" />
                            <Link className='text-white font-bold text-xl' to='/'>HERO.IO</Link>
                        </div>
                        <div>
                            <div className='flex sm:flex-row flex-col  gap-x-5 '>
                                <NavLink className={({ isActive }) => (isActive ? 'font-semibold text-base text-[#632EE3] underline' : 'font-semibold text-base text-white ')} to='/'>Home</NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'font-semibold text-base text-[#632EE3] underline' : 'font-semibold text-base text-white ')} to='/apps'>Apps</NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'font-semibold text-base text-[#632EE3] underline' : 'font-semibold text-base text-white')} to='/installation'>Installation</NavLink>

                            </div>
                        </div>
                    </div>

                    <nav>
                        <h6 className="footer-title">Our Services</h6>
                        <a className="link link-hover">Branding Solutions</a>
                        <a className="link link-hover">UI/UX Design</a>
                        <a className="link link-hover">Digital Marketing</a>
                        <a className="link link-hover">Advertising Campaigns</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Press</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Support</h6>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Contact Us</a>
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Terms of Service</a>
                    </nav>

                </footer>


                <footer className="footer sm:footer-horizontal footer-center bg-[#001931]  p-4 text-white/70">
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by <Link className='underline hover:bg-[#001931]/10 hover:text-white' to='/'>HERO.IO</Link></p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Footer;