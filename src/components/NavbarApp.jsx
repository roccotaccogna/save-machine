import { Link } from 'react-router-dom';
import { Navbar, Dropdown } from 'flowbite-react';

import Logo from "../images/20230926_165940_0000.png";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";

export default function NavbarApp(){

    const handleClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <Navbar className="bg-alternative_dark pt-5 
                            fixed top-0 
                            left-0 right-0 z-10"
        >
        <Navbar.Brand>
        <Link to="/" onClick={handleClick}>
            <img src={Logo} alt="Logo Save Machine" className="w-[130px] mb-[-20px] mt-[-20px]"/>
        </Link>
        </Navbar.Brand>
        <div className="flex md:order-2 mb-3">
            <div className="flex flex-wrap gap-2">
                    <a href="https://www.instagram.com/savemachinetech/" target="blank">
                        <IoLogoInstagram size={32}/>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100094070301486" target="blank">                  
                        <FaFacebook size={32}/>
                    </a>
            </div>
        </div>
                <div className="flex gap-8 
                                mt-2 xl:mt-0
                                lg:mt-0 md:mt-0
                                sm:mt-0 sm:ml-1
                                "
                >
                    <Link to="/" onClick={handleClick} 
                                 className="cursor-pointer 
                                        text-lg 
                                        hover:bg-transparent
                                        text-light 
                                        hover:text-alternative"> Home </Link> 

                    <Link to="/about" onClick={handleClick}
                                      className="cursor-pointer 
                                                 text-lg 
                                                 hover:bg-transparent
                                               text-light 
                                               hover:text-alternative"> About </Link>

                    <Link to="/contact" onClick={handleClick}
                                        className="cursor-pointer 
                                                   text-lg 
                                                   hover:bg-transparent
                                                 text-light 
                                                 hover:text-alternative"> Contact </Link>

            <div className="nav-dropdown">
                <Dropdown label="Repair" inline>
                    <Dropdown.Item className="text-lg">
                        <Link to="/maintenance" onClick={handleClick}> Maintenance </Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="text-lg">
                        <Link to="/cleaning" onClick={handleClick}> Cleaning </Link>
                    </Dropdown.Item>
                </Dropdown>
            </div>
                </div>
            
            {/* </Navbar.Collapse> */}
        </Navbar>
    )
}