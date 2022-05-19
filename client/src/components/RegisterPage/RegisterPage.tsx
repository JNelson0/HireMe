import { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.scss";
export default function LoginPage() {
    const initialForm = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    const [userForm, setUserForm] = useState(initialForm);
    const [formErrors, setFormErrors] = useState(initialForm);
    const [touched, setTouched] = useState(initialForm);
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setFormErrors(validation(userForm));
        setSubmit(true);
    };

    const handleTouch = (e: any) => {
        const { name } = e.target;
        setTouched({ ...touched, [name]: true });
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUserForm({ ...userForm, [name]: value });
    };

    const resetForm = (e: any) => {
        e.preventDefault();
        setUserForm(initialForm);
        setFormErrors(initialForm);
        setTouched(initialForm);
        setSubmit(false);
    };

    const validation = (formValues: any) => {
        const errors = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!formValues.firstname) {
            errors.firstname = "First name required!";
        }
        if (!formValues.lastname) {
            errors.lastname = "Last name required!";
        }
        if (!formValues.email) {
            errors.email = "Email required!";
        } else if (!regex.test(formValues.email)) {
            errors.email = "Email must be format example@email.com ";
        }
        if (!formValues.password) {
            errors.password = "Password required!";
        }
        if (
            !formValues.confirmPassword ||
            formValues.password !== formValues.confirmPassword
        ) {
            errors.confirmPassword = "Passwords don't match!";
        }

        return errors;
    };

    return (
        <div className="loginPage">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                    <div className="field">
                        <label className="ui label">First name</label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="First name"
                            onChange={handleChange}
                            value={userForm.firstname}
                            onClick={handleTouch}
                        />
                        {formErrors.firstname && submit ? (
                            <small className="ui pointing red basic label">
                                {formErrors.firstname}
                            </small>
                        ) : (
                            <></>
                        )}
                    </div>

                    <div className="field">
                        <label className="ui label">Last name</label>
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Last name"
                            onChange={handleChange}
                            value={userForm.lastname}
                            onClick={handleTouch}
                        />
                        {formErrors.lastname && submit ? (
                            <small className="ui pointing red basic label">
                                {formErrors.lastname}
                            </small>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="field">
                        <label className="ui label">Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="email@email.com"
                            onChange={handleChange}
                            value={userForm.email}
                            onClick={handleTouch}
                        />
                        {formErrors.email && submit ? (
                            <small className="ui pointing red basic label">
                                {formErrors.email}
                            </small>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="field">
                        <label className="ui label">Password</label>
                        <input
                            type="text"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={userForm.password}
                            onClick={handleTouch}
                        />
                        {formErrors.password && submit ? (
                            <small className="ui pointing red basic label">
                                {formErrors.password}
                            </small>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="field">
                        <label className="ui label">Confirm Password</label>
                        <input
                            type="text"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            value={userForm.confirmPassword}
                            onClick={handleTouch}
                        />
                        {formErrors.confirmPassword && submit ? (
                            <small className="ui pointing red basic label">
                                {formErrors.confirmPassword}
                            </small>
                        ) : (
                            <></>
                        )}
                    </div>
                    <button className="ui primary button">Submit</button>
                    <button className="ui button" onClick={resetForm}>
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
}
