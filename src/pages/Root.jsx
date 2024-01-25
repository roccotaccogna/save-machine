import FooterApp from "../components/FooterApp";
import NavbarApp from "../components/NavbarApp";
import AppLayout from "../layouts/AppLayout";

function Root(){
    return (
        <div>
        <NavbarApp/>
        <AppLayout/>
        <FooterApp/>
        </div>
    )
}

export default Root;