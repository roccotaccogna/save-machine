import Img2 from "../images/img2.jpg";

export default function Maintenance(){
    return (
        <div className="text-center 
                        mt-28 mb-32
                        lg:mb-64 
                        md:mb-60
                        xl:mb-64"
        >
            <h1 className="text-4xl text-dark uppercase">Maintenance quote</h1>

            <div className="div-business 
                        flex flex-col 
                        lg:flex-row md:flex-row 
                        pt-8 pb-8 pl-4 h-[700px] mt-10"
            >

            <div className="ml-4 mt-8">
                <h1 className="text-center text-4xl 
                           font-semibold mt-6 "
                >
                    Maintenance
                </h1>
                    <h3 className="mb-8 italic">When you need it most</h3>
                        <p className="text-center text-lg"> 
                            We service majority of the brands Domestic and Commercial Coffee Machine.
                            We offer a complete range of customizable services and packages to ensure 
                            your coffee is always perfect.<br/>
                            From basic maintenance services to personalized solutions for your 
                            specific needs, contact us for any info.
                        </p>
            </div>

            <img src={Img2} alt="image" 
                 className="img-business ml-6 mt-8 
                            xl:w-[600px] xl:ml-12
                            lg:w-[600px] md:w-[400px] sm:w-[400px]
                            w-[350px] 
                            rounded-sm  mr-4"/>
        </div>
        </div>
    )
}