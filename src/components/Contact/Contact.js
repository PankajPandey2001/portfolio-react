import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form, FormGroup , Button , Label, Input } from 'reactstrap';
import './contact.css' ;


const Contact = () => {

    return (
        <div className="contact">

            <h1>
                Get in touch
            </h1>

            <div className="contact-flex">


        
            <div className="contact-content">
                <h2>  Lets talk </h2>

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
                            for="exampleEmail"
                            hidden
                        >
                            Email
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="Email"
                            type="email"
                        />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label
                            for="examplePassword"
                            hidden
                        >
                            Password
                        </Label>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="Password"
                            type="password"
                        />
                    </FormGroup>
                    {' '}
                    <Button>
                        Submit
                    </Button>
                </Form>
            </div>

            </div>

        </div>
    );

}

export default Contact; 