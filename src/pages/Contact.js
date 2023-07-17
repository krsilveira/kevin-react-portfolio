import { useContext, useState } from "react"
import { PageContext } from "../PageProvider"
import { emailValidate } from "../utils/helpers"

const Contact = () => {
    console.log("Contact")
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({ name: false, email: false, message: false });
    const { page } = useContext(PageContext)
    if (page !== "contact") {
        return (<>{""}</>)
    }
    const handleName = () => {
        const newErrors = { ...errors };
        if (name.trim() === '') {
            newErrors.name = true;
        } else {
            newErrors.name = false;
        }
        setErrors(newErrors);
    };
    const handleEmail = () => {
        const newErrors = { ...errors };
        if (email.trim() === '') {
            newErrors.email = true;
        } else {
            newErrors.email = false;
        }
        setErrors(newErrors);
    }
    const handleMessage = () => {
        const newErrors = { ...errors };
        if (message.trim() === '') {
            newErrors.message = true;
        } else {
            newErrors.message = false;
        }
        setErrors(newErrors);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !message) {
            return;
        }
        if (!emailValidate(email)) {
            return;
        }
        // Reset errors and inputs
        setErrors({ name: false, email: false, message: false });
        setName('');
        setEmail('');
        setMessage('');
    };



    return (
        <>
            <div className="yellowbg mt-5" onSubmit={handleSubmit}>
                <h1>Contact Page</h1>
                <div>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" value={name}
                                onChange={(event) => setName(event.target.value)} onBlur={() => handleName()} />
                            {/* Display error message--name field is required */}
                            {errors.name && <p style={{ color: 'red' }}>Please enter a name.</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" value={email}
                                onChange={(event) => setEmail(event.target.value)} onBlur={() => handleEmail()} />
                            {errors.email && <p style={{ color: 'red' }}>Please enter an email.</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" rows="5" value={message}
                                onChange={(event) => setMessage(event.target.value)} onBlur={() => handleMessage()}></textarea>
                            {errors.message && <p style={{ color: 'red' }}>Please enter a message.</p>}
                        </div>
                        <button type="submit" className="btn btn-submit mt-1" >Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;