import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.scss";
export default function LoginPage() {
    const initialForm = {
        email: "",
        password: "",
        submitionError: "",
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
        setSubmit(false);
    };

    const validation = (formValues: any) => {
        const errors = {
            email: "",
            password: "",
            submitionError: "",
        };
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!formValues.email) {
            errors.email = "Enter a valid email example@email.com";
        } else if (!regex.test(formValues.email)) {
            errors.email = "Email must be format example@email.com ";
        }
        if (!formValues.password) {
            errors.password = "Enter a valid password";
        }
        //Need to add incorect email/password fetch after query is finished
        return errors;
    };

    return (
        <div className="loginPage">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="ui divider"></div>
                <div className="ui form">
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
                            <small
                                className="ui fluid red basic button"
                                id="error"
                            >
                                {formErrors.email}
                            </small>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="field">
                        <label className="ui label">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={userForm.password}
                            onClick={handleTouch}
                        />
                        {formErrors.password && submit ? (
                            <small
                                className="ui fluid red basic button"
                                id="error"
                            >
                                {formErrors.password}
                            </small>
                        ) : (
                            <></>
                        )}
                    </div>
                    {userForm.submitionError && submit ? (
                        <small className="ui fluid red basic button" id="error">
                            {formErrors.submitionError}
                        </small>
                    ) : (
                        <></>
                    )}
                    <button className="ui primary button">Submit</button>
                    <button className="ui button" onClick={resetForm}>
                        Clear
                    </button>
                </div>

                <Link
                    to="/register"
                    className="ui fluid blue basic button"
                    id="register"
                >
                    Don't have an account?
                </Link>
            </form>
        </div>
    );
}
