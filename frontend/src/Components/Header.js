import {Link} from "react-router-dom"
import styles from "./Header.module.css"
const Header = () =>{

    return(
        <div className={styles.customheaderstyle}>
            <Link to="/" className={styles.link}>Products</Link>
            <Link to="/add" className={styles.link}>Add Products</Link>
            <Link to="/update" className={styles.link}>Update Products</Link>
            <Link to="/logout" className={styles.link}>Logout</Link>
            <Link to="/profile" className={styles.link}>profile</Link>
            <Link to="/signup" className={styles.link}>Sign up</Link>
        </div>
    )
}   

export default Header