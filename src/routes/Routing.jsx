import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/Root";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Maintenance from "../pages/Maintenance";
import Cleaning from "../pages/Cleaning";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Homepage/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/maintenance",
                element: <Maintenance/>
            },
            {
                path:"/cleaning",
                element: <Cleaning/>
            },
        ]
    }
])

export default router;