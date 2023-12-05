import { MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import './Contact.css';
import { useForm } from 'react-hook-form';

// Functional component representing the 'Contact' section of the application
const Contact = () => {
    // Destructure methods and properties from the 'useForm' hook
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });

    // Define initial form values
    const initialValues = {
        senderName: '',
        email: '',
        message: ''
    };

    // Function to handle form submission
    const onSubmit = (data) => {
        console.log(data);
        // Convert form data to JSON string for logging
        const message = JSON.stringify(data);
        
        // Display a success message with the submitted data (not functional in a real application)
        document.querySelector('.message-sent').innerHTML = `
            <p class="text-light fs-6 font-monospace">SUCCESS!<br />
            Following message sent:<br />
            ${message}<br />
            Thank you for your message. <br />I will follow up with you soon!

            <br /><br />This form is currently not functional. <br />Thanks for testing it out!
            </p>
        `;
    };

    // Render the 'Contact' component
    return (
        // Use 'MDBContainer' for a fluid container with a custom background class ('bkgrd')
        <MDBContainer fluid className='min-vh bkgrd'>
            {/* Flexbox container for centering the form */}
            <div className="d-flex w-100 justify-content-center">
                {/* Form for submitting contact information */}
                <form onSubmit={handleSubmit(onSubmit)} className="w-50 mt-4">
                    {/* Input field for name */}
                    <MDBInput label='Name' id='name' type='text' size='lg' contrast
                        defaultValue={initialValues.senderName}
                        {...register("senderName", { required: true, minLength: 2, maxLength: 80 })}
                        className="w-100 m-4" />
                    {errors.senderName && <p className="text-warning mw-100">Name is required</p>}

                    {/* Input field for email */}
                    <MDBInput label='Email' id='email' type='email' size='lg' contrast
                        defaultValue={initialValues.email}
                        {...register("email", { 
                            required: true, 
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })} 
                        className="w-100 m-4" />
                    {errors.email && <p className="text-warning mw-100">Email is required</p>}

                    {/* Input field for message */}
                    <MDBInput label='Message' id='message' type='text' size='lg' contrast
                        defaultValue={initialValues.message}
                        {...register("message", { required: true })}
                        className="w-100 m-4" />
                    {errors.message && <p className="text-warning mw-100">Message is required</p>}

                    {/* Submit button */}
                    <input type="submit" className="btn btn-primary mt-3" />
                </form>
            </div>

            {/* Container for displaying the message sent status */}
            <div className="d-flex w-100 justify-content-center mt-3">
                <div className="message-sent"></div>
            </div>
        </MDBContainer>
    );
};

// Export the 'Contact' component
export default Contact;
