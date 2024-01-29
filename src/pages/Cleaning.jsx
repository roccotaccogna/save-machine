import Img3 from "../images/Cafetto tris.jpg";

export default function Cleaning(){
    return (
        <div className="text-center mb-32
                        lg:mb-64 md:mb-60
                        xl:mb-64 mt-52 
                        xl:mt-40 lg:mt-40 md:mt-40 sm:mt-40"
        >
        <h1 className="text-4xl text-dark uppercase">Cleaning quote</h1>

        <div className="div-business 
                    flex flex-col 
                    lg:flex-row md:flex-row 
                    pt-8 pb-8 pl-4 h-[700px] mt-10"
        >

        <div className="xl:ml-4 mt-8">
            <h1 className="text-center text-4xl 
                       font-semibold mt-6 "
            >
                Cleaning
            </h1>
                <h3 className="mb-8 italic">Descailing and Shining</h3>
                    <p className="text-center text-lg"> 
                        We service majority of the brands Domestic and Commercial Coffee Machine.
                        We offer a complete range of customizable services and packages to ensure 
                        your coffee is always perfect.
                        Descaling parts, descaling boiler, polish, basic clean, grinder clean, 
                        contact us for any info.
                    </p>
        </div>

        <img src={Img3} alt="image" 
             className="img-business ml-6 mt-8 
                        xl:w-[600px] xl:ml-12
                        lg:w-[600px] md:w-[400px] sm:w-[300px] 
                        w-[350px]
                        rounded-sm  mr-4"/>
    </div>
    </div>
    )
}