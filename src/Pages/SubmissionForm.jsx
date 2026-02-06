import { useState } from "react";

function SubmissionForm(){
    const [form, setForm] = useState({
        name:"",email:"",password:""
    });


    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    //handle input change
    function handleChange(e){
        setForm({
            ...form,[e.target.name]:e.target.value
        });
    }

    //validation
    function validate(){
        let newErrors = {};
        if(!form.name){
            newErrors.name = "Name is required";
        }
        if(!form.email){
            newErrors.email = "Email is required";
        }
        if(!form.password){
            newErrors.password = "Password is required"
        }
        return newErrors;
    }

    //Submit 
    function handleSubmit(e){
        e.preventDefault();
        const validateErrors = validate();

        if(Object.keys(validateErrors).length > 0){
            setErrors(validateErrors);
            setSubmitted(false);
        } else {
            setErrors({});
            setSubmitted(true);
            console.log("Form data",form);
            
        }
    }

    return(

        <div style={styles.container}>
            <h2>submission form</h2>
            <form onSubmit={handleSubmit}>

                {/* Name */}
                <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={form.name}
                onChange={handleChange}
                />
                <p style={styles.error}>{errors.name}</p>

                {/* Email */}
                <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={form.email}
                onChange={handleChange}
                />
                <p style={styles.error}>{errors.email}</p>

                {/* Password */}
                <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
                />
                <p style={styles.error}>{errors.password}</p>

                <button type="submit">Submit</button>

            </form>
            {submitted && (
                <h3 style={{ color: "green" }}>
                Form Submitted Successfully
                </h3>
            )}
        </div>
    );
}

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    textAlign: "center"
  },
  error: {
    color: "red",
    fontSize: "12px"
  }
};

export default SubmissionForm;

