import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

import { Modal, Button } from 'flowbite-react';

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

const schemaValidation = Yup.object({
    name: Yup.string()
            .min(2, 'Minimum 2 characters!')
            .max(50, 'Maximum 50 characters!')
            .required('Required!'),
    email: Yup.string()
            .email('Invalid email!')
            .required('Required!'),
    phone: Yup.number()
            .required('Required!'),
    address: Yup.string()
             .required('Required!'),
    subject: Yup.string()
             .required('Required!'),
    message: Yup.string()
             .required('Required!')
})

const handleClick = () => {
    window.scrollTo(0, 0);
}


export default function Contact(){

    const [success, setSuccess] = useState(false);
    const form = useRef();

    
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm(
                `${import.meta.env.VITE_SERVICE_ID}`, 
                `${import.meta.env.VITE_TEMPLATE_ID}`, 
                form.current, 
                `${import.meta.env.VITE_PUBLIC_KEY}`
            )
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                setSuccess(true);
            }, (error) => {
                console.log(error.text);
            });
    }
    
    return (
        <>   
        {/* MODAL */}
        {success ? (
            <Modal size="lg" 
                   popup
                   show={success}
                   className="items-center"
                   onClose={()=> setSuccess(false)}
            >
                <Modal.Header className="bg-light"/>
                <Modal.Body className="bg-light">
                    <div className="text-center">
                        <AiOutlineLike className="mx-auto mb-4 h-24 w-24 text-dark"/>
                        <h3 className="text-xl italic mb-4">
                            Email sent successfully!
                        </h3>
                    </div>
                    <div className="flex justify-center gap-4">
                        <Link to="/">
                            <Button className="uppercase backHome" onClick={handleClick}>
                                Back Home
                            </Button>
                        </Link>
                    </div>
                </Modal.Body>
            </Modal>
        ) : ('')}

        <div className="text-center text-dark mt-52 
                        xl:mt-40 lg:mt-40 md:mt-40 sm:mt-40">
            <div className="grid grid-cols-1 xl:grid-cols-2
                            lg:grid-cols-2">
            {/* CONTACT US */}
            <div className="flex xl:ml-8 ml-6">
                <div>
                    <h1 className="text-4xl mb-6">Contact Us</h1>
                    <div className="flex">
                    <MdEmail size={34} className="mr-3 ml-3"/>
                        <a href="mailto:savemachinetech@gmail.com" className="text-lg italic underline">
                            savemachinetech@gmail.com
                        </a>
                    </div>
                    <div className="flex mt-4">
                    <FaPhoneAlt size={34} className="mr-3 ml-3"/>
                        <a href="tel:+610420852721" className="text-md italic underline">
                            +61 0420 852 721
                        </a>
                    </div>

                    <h1 className="text-4xl mt-10">Follow Us</h1>
                        <div className="flex mt-3 ml-[90px]">
                            <a href="https://www.instagram.com/savemachinetech/" 
                               target="blank"
                               className="mr-4 ml-4"
                            >
                                <IoLogoInstagram size={32}/>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100094070301486" target="blank">                  
                                <FaFacebook size={32}/>
                            </a>
                        </div>
                </div>
            </div>

            {/* FORM */}
            <div className="mt-10 lg:mt-0 ml-2
                            xl:ml-8 lg:ml-8 md:ml-8
                            xl:w-[400px] lg:w-[400px]
                            md:w-[400px] sm:w-[400px]
                            w-[350px] 
                            form-container">
                <Formik 
                        initialValues={{
                            name: '',
                            email: '',
                            phone: '',
                            address: '',
                            subject: '',
                            message: '',
                          }}
                        validationSchema={schemaValidation}
                >
                        <Form className="form" ref={form} onSubmit={sendEmail}>

                            <div className="form-group mb-2">
                                <label htmlFor="name">Name:</label>
                                <Field name="name" type="text" required/>

                                <label htmlFor="email" className="mt-6">Email:</label>
                                <Field name="email" type="email" required/>
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="phone">Phone:</label>
                                <Field name="phone" type="number" required/>

                                <label htmlFor="address" className="mt-6">Address:</label>
                                <Field name="address" type="text" required/>
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="subject">Subject:</label>
                                <Field name="subject" type="text" required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <Field as="textarea" 
                                       name="message"
                                       type="text" 
                                       cols="50" 
                                       rows="10"
                                       required
                                />
                            </div>

                            <button type="submit" 
                                    className="form-submit-btn ml-[100px]"
                            >
                                Submit
                            </button>
                        </Form>
                </Formik>
            </div>
            </div>
        </div>
        </>
    )
}