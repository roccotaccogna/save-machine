import Home from "../images/Home.jpg";
import Img1 from "../images/img1.jpg";
import Img2 from "../images/img2.jpg";
import Img3 from "../images/img3.jpg";
import Img4 from "../images/img4.jpg";
import Img5 from "../images/img5.jpg";

import { Carousel } from 'flowbite-react';

export default function Homepage(){
    return (
        <>
        {/* HEADER */}
        <div className="p-24 text-center wallpaper">
        <header className="py-5 m-5 xl:mt-24
                           lg:mt-20 md:mt-20 sm:mt-16
                           mt-16"
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
                        pt-8 pb-8 pl-4 h-[700px]"
        >
            <img src={Home} alt="image" 
                 className="img-business ml-6 mt-8 
                            xl:w-[600px] xl:ml-12
                            lg:w-[600px] md:w-[400px] sm:w-[300px]
                            w-[300px] 
                            rounded-sm"/>
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
        <div className="h-56 sm:h-64 xl:h-80 
                        2xl:h-96 xl:w-[800px] md:w-[700px]
                        sm:w-[600px] m-auto"
        >
            <Carousel>
                <img src={Img1} alt="" />
                <img src={Img2} alt="" />
                <img src={Img3} alt="" />
                <img src={Img4} alt="" />
                <img src={Img5} alt="" />
            </Carousel>
        </div>
        </>
    )
}