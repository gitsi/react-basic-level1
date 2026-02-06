import { NavLink , Link, useLocation  } from "react-router-dom";

function Navbar(){
    const location = useLocation();
    console.log(location.pathname);
    return(
        <nav style={styles.nav}>
            <NavLink to="/" style={getLinkStyle}>Homepage</NavLink>
            <Link className={location.pathname === "/formsubmission" ? "active-link" : ""} to="/formsubmission" style={styles.link}>Form Submission</Link>
            <NavLink to="/password" style={getLinkStyle}>Password Validator</NavLink>
            <Link className={location.pathname === "/quiz" ? "active-link" : ""} to="/quiz" style={styles.link}>Quiz App</Link>
            <NavLink to="/textconverter" style={getLinkStyle}>Text Converter</NavLink>
        </nav>
    );
}

const styles = {
     nav: {
        display: "flex",
        gap: "15px",
        padding: "10px",
        background: "#222",
    },
    link: {
        color: "#fff",
        textDecoration: "none",
    }
    
}

const getLinkStyle = ({isActive}) => ({
    color : isActive ? "yellow" : "white",
    textDecoration : "none",
    fontWeight : isActive ? "bold" : "normal",
})

export default Navbar
