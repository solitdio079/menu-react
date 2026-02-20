import logo from '/assets/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (<>
        <nav className="navbar fixed top-0 z-99 rounded-none shadow-base-300/20 shadow-sm">
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center justify-between">
                    <div className="navbar-start items-center justify-between max-md:w-full">
                        <Link className="link text-base-content link-neutral text-xl font-bold no-underline" to="/">
                            <img src={logo} alt="Özsüt Logo" className="inline-block w-30 lg:w-60 mr-2" />
                        </Link>
                       
                    </div>
                </div>
                <div id="navbar-collapse" className="navbar-end items-center collapse grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full" >
                   <a href='https://wa.me/905316188679'> <button className="btn btn-success"> <span className='icon-[tabler--brand-whatsapp]'></span> Sipariş Ver</button> </a>
                </div>
            </div>
        </nav>
    </>)
}