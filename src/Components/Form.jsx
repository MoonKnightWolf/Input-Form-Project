import React, {useState} from 'react';
import AllInputs from "./allInputs.jsx";
import style from "./FormStyle.module.css";

const Form = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        date: "",
        number: "",
        password: "",
        confirmPassword: "",
    });

    const allInputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMsg: "Username must be allow Alphabet (A to Z or a to z) and underscore (_), numbers are also allow in the username field but after alphabet.",
            pattern: "^[A-Za-z][A-Za-z0-9_]{7,29}$",
            required: true
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMsg: "That email account doesn't exist. Enter a valid registered account.",
            pattern:"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
            required: true
        },
        {
            id: 3,
            name: "date",
            type: "date",
            placeholder: "Date"

        },
        {
            id: 4,
            name: "number",
            type: "number",
            placeholder: "Mobile Number",
            errorMsg: "Enter valid mobile number, which you registered.",
            pattern: "\t^((\\+){1}91){1}[1-9]{1}[0-9]{9}$",
            required:true

        },
        {
            id: 5,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMsg: "A Password must be consists " +
                "at least 8 characters long, " +
                "1 capital letter, " +
                "1 lowercase letter, " +
                "1 special character, " +
                "1 numeric character. ",
            pattern:"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
            required: true
        },
        {
            id: 6,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMsg: "Confirm the Password"
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }
    return (
        <>
            <h1 className={style.titleStyle}>Form Handling</h1>
            <form className={style.formStyle} onSubmit={handleSubmit}>
                {allInputs.map((input) => {
                    return (<>
                            <AllInputs key={input.id} value={values[input.name]} onChange={onChange} {...input} />
                        </>
                    );
                })}
                <button className={style.btnStyle}>Submit</button>
            </form>
        </>
    );
}

export default Form