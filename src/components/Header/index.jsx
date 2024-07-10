import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import LogoMenu from "./logo.png"

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logoH} src={LogoMenu} alt="Logo" />

            <div className={styles.linkContainer}>
                <Link to={"/"} className={styles.headerLink}>
                    HOME
                </Link>
                <Link to={"/novo-video"} className={styles.headerLink1}>
                    NOVO VÍDEO
                </Link>
            </div>
        </header>
    )
}

export default Header
