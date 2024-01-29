import Home from "../images/20230809_091059.jpg";
import Img1 from "../images/20230809_091025.jpg";
import Img2 from "../images/20230814_114125.jpg";
import Img3 from "../images/20230814_114151.jpg";
import Img4 from "../images/20230817_144713.jpg";
import Img5 from "../images/222347789.jpg";
import Img6 from "../images/main.jpg";

import { Carousel } from 'flowbite-react';

export default function Homepage(){
    return (
        <>
        {/* HEADER */}
        <div className="p-24 text-center wallpaper">
        <header className="py-5 m-5 xl:mt-40
                           lg:mt-32 md:mt-28 sm:mt-20
                           mt-24"
        >
            <h1 className="text-4xl uppercase font-bold text-home"> Welcome to Save Machine </h1>   
        </header>
        </div>

        {/* WHITE SPACE */}
        <div className="h-60">
        </div>

        {/* OUR BUSINESS */}
        <div className="div-business 
                        flex flex-col 
                        lg:flex-row md:flex-row 
                        pt-8 pb-8 pl-1 h-[800px]"
        >
            <img src={Home} alt="image" 
                 className="img-business ml-6 mt-8 
                            xl:w-[550px] xl:h-[550px]
                            xl:ml-12 lg:h-[550px] sm:h-[350px]
                            lg:w-[600px] md:w-[300px] sm:w-[300px]
                            w-[300px] h-[300px]
                            rounded-sm object-cover xl:pr-24"/>
            <div className="ml-4 mt-8 mr-4">
            <h1 className="text-center text-4xl font-semibold mt-6 mb-8">Our Business</h1>
            <p className="text-center italic"> With a passion for coffee and a commitment to excellence,
                we are your trusted coffee machine repair experts.
                At Save Machine, we specialize in
                diagnosing and fixing coffee machine issues of
                majority types and brands.
                We provide top-notch repair services, ensuring your coffee equipment runs smoothly.
                We take pride in our prompt, reliable,
                and cost-effective solutions, making us the go-to choice for coffee enthusiasts 
                and businesses in need of coffee machine maintenance.
            </p>
            </div>
        </div>

        {/* CAROUSEL */}
        <h1 className="mt-24 mb-12 text-center
                       text-4xl font-semibold text-dark">
            View Gallery
        </h1>
        <div className="h-64 sm:h-64 xl:h-80 
                        2xl:h-96 xl:w-[800px] md:w-[700px]
                        sm:w-[600px] m-auto"
        >
            <Carousel>
                <img src={Img1} alt="" className="mt-10"/>
                <img src={Img2} alt="" className="mt-4"/>
                <img src={Img3} alt="" />
                <img src={Img4} alt="" className="pb-8"/>
                <img src={Img5} alt="" className=""/>
                <img src={Img6} alt="" className=""/>
            </Carousel>
        </div>
        </>
    )
}