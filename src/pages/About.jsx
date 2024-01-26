import Img from "../images/img1.jpg";

export default function About(){
    return (
        <div className="text-center text-dark mt-28">
        <h1 className="text-4xl">About Save Machine</h1>
        <h3 className="text-xl mt-3">Our Story</h3>
            <div className="container"> 
            <p className="italic mt-4"> I am Saverio and have doing coffee machine repairs for 9 years
                and start to run my own business now. <br/>
                My goal is to provide you with top-notch service and support. 
                Whether you're a coffee shop owner, a café enthusiast, or a home brewer, <br/>
                I offer a comprehensive range of services, including routine maintenance, 
                repairs, installations, and upgrades. <br/> I want to ensure that your coffee machine 
                delivers the highest quality coffee experience every time. <br/>        
                With a dedication to excellence and your satisfaction in mind, <br/> 
                I'm committed to transforming the coffee industry, one machine at a time.
            </p>
            </div>
            <div className="mt-12 flex justify-center items-center">
                <img src={Img} alt="image alternative" 
                     className="min-h-[500px] max-h-[800px]
                                w-[350px] xl:w-[800px]
                                lg:[700px] md:w-[500px] sm:w-[450px]
                                rounded-md"
                />
            </div>
        </div>
    )
}