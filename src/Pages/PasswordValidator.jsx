// import { rules } from "eslint-plugin-react-hooks";
import { useState } from "react";

function PasswordValidator(){

    const [password, setPassword] = useState("");

    // validation rules

    const rules = {
        uppercase:/[A-Z]/.test(password),
        number:/[0-9]/.test(password),
        special: /[!@#$%^&*]/.test(password),
        length: password.length >= 8,
    }

    //strength calculation

    const strength =
    Object.values(rules).filter(Boolean).length;

    const strengthText = [ "Very Weak",
    "Weak",
    "Medium",
    "Strong",
    "Very Strong"]


    return(

        <div style={styles.list}>
            <h2>Password Validator</h2>
            <input type="password" placeholder="" value={password} onChange={(e)=> setPassword(e.target.value)} style={styles.input} />

             {password && (
                <h3>
                Strength: {strengthText[strength]}
                </h3>
            )}

            <ul style={styles.list}>
                <li style={rules.length ? styles.valid : styles.invalid}>8 Characters</li>
                <li style={rules.uppercase ? styles.valid : styles.invalid}>1 Uppercase letter</li>
                <li style={rules.number ? styles.valid : styles.invalid}>1 Number</li>
                <li style={rules.special ? styles.valid : styles.invalid}>1 Special Character</li>
            </ul>

        </div>

    );

}


const styles = {
  container: {
    width: "350px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial"
  },
  input: {
    padding: "10px",
    width: "100%",
    marginBottom: "20px"
  },
  list: {
    listStyle: "none",
    textAlign: "left"
  },
  valid: {
    color: "green"
  },
  invalid: {
    color: "red"
  }
};



export default PasswordValidator;