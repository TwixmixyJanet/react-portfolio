import { MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import './Contact.css';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all'});

    const initialValues = {
        senderName: '',
        email: '',
        message: ''
    };

    const onSubmit = (data) => {
        
        console.log(data);
        const message = JSON.stringify(data)
        document.querySelector('.message-sent').innerHTML = `
        <p class="text-light">SUCCESS!<br />
        Following message sent:<br />
        ${message}<br />
        Thank you for your message. I will follow up with you soon!

        <br /><br />This form is currently not functional. Thanks for testing it out!
        </p>
        `;
    };

    return (
        <MDBContainer fluid className='vh-100 bkgrd'>
            <div className="d-flex w-100 justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)} className="w-50 mt-4">
                    {/* <p className="my-0 text-light">Name</p> */}
                    <MDBInput label='Name' id='name' type='text' size='lg' contrast
                    defaultValue={initialValues.senderName}
                    {...register("senderName", { required: true, minLength: 2, maxLength: 80 })}
                    className="w-100 m-4" />
                    {/* <input 
                    defaultValue={initialValues.senderName}
                    {...register("senderName", { required: true, minLength: 2, maxLength: 80 })}
                    className="w-100" /> */}
                    {errors.senderName && <p className="text-warning mw-100">Name is required</p>}
                    {/* <p className="my-0 text-light">Email</p> */}
                    <MDBInput label='Email' id='email' type='email' size='lg' contrast
                    defaultValue={initialValues.email}
                    {...register("email", { 
                        required: true, 
                        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })} 
                    className="w-100 m-4" />
                    {/* <input defaultValue={initialValues.email}
                    {...register("email", { 
                        required: true, 
                        pattern: /^\S+@\S+$/i 
                        // potential alternative pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })}
                    className='w-100' /> */}
                    {errors.email && <p className="text-warning mw-100">Email is required</p>}
                    {/* <p className="my-0 text-light">Message</p> */}
                    <MDBInput label='Message' id='message' type='text' size='lg' contrast
                    defaultValue={initialValues.message}
                    {...register("message", { required: true })}
                    className="w-100 m-4" />
                    {/* <input defaultValue={initialValues.message}
                    {...register("message", { required: true })}
                    className="w-100" /> */}
                    {errors.message && <p className="text-warning mw-100">Message is required</p>}
                    <input type="submit" className="btn btn-primary mt-3" />
                </form>
            </div>
            <div className="d-flex w-100 justify-content-center mt-3">
                <div className="message-sent"></div></div>
        </MDBContainer>
    )
};

export default Contact;