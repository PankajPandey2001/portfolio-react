import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form, FormGroup, Button, Label, Input } from 'reactstrap';
import './contact.css';

import img1 from "../../assets/nav_underline.svg";

const Contact = () => {

    return (
        <div id="contact" className="contact">

            <h1>
                Get in touch
            </h1>


            <div className="contact-image" >
                <img src={img1} alt="image" />
            </div>


            <div className="contact-flex">




                <div className="contact-content">
                    <h2>  Let's talk </h2>

                    <p>I specialize in building scalable web applications using a combination of front-end technologies like React and back-end frameworks like Spring Boot, ensuring seamless integration and optimal user experiences."</p>


                    <div className="contact-content-details">

                        <MdEmail />
                        <p> pankajpnd2001@gmail.com</p>
                    </div>


                    <div className="contact-content-details">

                        <IoMdCall />
                        <p> 9958372287</p>
                    </div>


                    <div className="contact-content-details">

                        <ImLocation />
                        <p> pankajpnd2001@gmail.com</p>
                    </div>


                </div>

                <div className="contact-form">

                    <Form>
                        <FormGroup>
                            <Label
                                for="exampleName"

                            >
                               Your name
                            </Label>
                            <Input
                               className="custom-input"
                                id="exampleName"
                                name="name"
                                placeholder="enter you name"
                                type="text"
                              
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label
                                for="exampleEmail"

                            >
                                Email
                            </Label>
                            <Input
                               className="custom-input"
                                id="exampleEmail"
                                name="email"
                                placeholder="Email"
                                type="email"
                                width={"3rem"}
                            />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <Label
                                for="examplePassword"

                            >
                                Write your Message here
                            </Label>
                            <Input
                            className="custom-input"
                                id="exampleMessage"
                                name="message"
                                placeholder="Enter your message"
                                type="text"
                            />
                        </FormGroup>
                        {' '}
                        <Button className="contact-form-button">
                            Submit Now
                        </Button>
                    </Form>
                </div>

            </div>

        </div>
    );

}

export default Contact; 