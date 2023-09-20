import { useState } from "react";


const Register = () => {
    const [form, setForm] = useState({});

    const handleInputChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log(form.email);

        fetch('http://localhost:3000/user/register', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: form.email,
                password: form.password,
                firstName: form.firstName,
                lastName: form.lastName
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        }).catch(errors => {
            console.log(errors);
        })
    }
    
    return(
        <div className="page-register">
            <form className="box" onSubmit={handleFormSubmit}>
                <div className="form-intro">
                    <span className="form-title">Register</span>
                    <span className="form-description">Register to manage prescriptions.</span>
                </div>
                <div className="form-row">
                    <input type="text" name="firstName" placeholder="First Name" className="form-input" onChange={handleInputChange} />
                    <input type="text" name="lastName" placeholder="Last Name" className="form-input" onChange={handleInputChange} />
                </div>
                <input type="email" name="email" placeholder="Email" className="form-input" onChange={handleInputChange} />
                <input type="password" name="password" placeholder="Password" className="form-input" onChange={handleInputChange} />
                <input type="password" name="passwordConfirmation" placeholder="Confirm Password" className="form-input" onChange={handleInputChange} />
                <button type="submit" className="form-button">Register</button>
            </form>
        </div>
    )
}

export default Register;