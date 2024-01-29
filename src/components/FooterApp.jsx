import { Footer } from "flowbite-react";

export default function FooterApp(){
    return (
        <>
        <Footer container className="bg-alternative_dark text-light mt-12 rounded-none">
            <div className="w-full text-center">
                <div className="w-full xl:flex lg:flex 
                                md:flex sm:flex 
                                justify-between 
                                sm:items-center"
                >
                    <div className="mb-8 mt-4">
                        <h1 className="text-xl">Opening Hours</h1>
                        <h2 className="text-md italic">Mon - Fri: 9am - 6pm</h2>
                        <h2 className="text-md italic">Sat: 10am - 2pm</h2>
                        <h3 className="text-md italic">Sun: Closed</h3>
                    </div>
                    <div>
                        <h1 className="text-xl no-underline">Save Machine</h1>
                        <a href="mailto:savemachinetech@gmail.com" className="text-md italic">
                            savemachinetech@gmail.com
                        </a>
                    </div>
                </div>
                    <Footer.Divider/>
                    <Footer.Copyright by="Save Machine" year={2023} className="text-center text-black text-lg"/>
            </div>
        </Footer>
        </>
    )
}