import { Facebook, Instagram, Linkedin, MoveRight, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <div className='bg-slate-50 text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>

            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>

                <div className='max-w-80'>
                    <img src="/logo7.png" alt="logo" className='invert mb-4 h-8 md:h-9' />
                    <p className='text-sm'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                        {/* Instagram */}
                        <Instagram size={22} className="hover:scale-105 hover:text-[var(--secondary)] cursor-pointer" />
                        {/* Facebook */}
                        <Facebook size={22} className="hover:scale-105 hover:text-[var(--secondary)] cursor-pointer" />
                        {/* Twitter */}
                        <Twitter size={22} className="hover:scale-105 hover:text-[var(--secondary)] cursor-pointer" />
                        {/* LinkedIn */}
                        <Linkedin size={22} className="hover:scale-105 hover:text-[var(--secondary)] cursor-pointer" />
                    </div>
                </div>

                <div>
                    <p className='text-lg text-[var(--primary)] font-playfair font-semibold'>COMPANY</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Partners</a></li>
                    </ul>
                </div>

                <div>
                    <p className='text-lg text-[var(--primary)] font-playfair font-semibold'>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Safety Information</a></li>
                        <li><a href="#">Cancellation Options</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Accessibility</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    <p className='text-lg text-[var(--primary)] font-playfair font-semibold'>STAY UPDATED</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                        <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                            {/* Arrow icon */}
                            <MoveRight size={18} color="black"
                            className="invert" />
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>&copy; {new Date().getFullYear()} <a href="#">Book&Stay</a>. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;