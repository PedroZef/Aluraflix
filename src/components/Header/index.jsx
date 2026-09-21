import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import LogoMenu from "./logo.png"
import { useTheme } from "../../hooks/useTheme"

const Header = () => {
    const { theme, toggleTheme } = useTheme()
    const isDark = theme === "dark"

    return (
        <header className={styles.header}>
            <Link to="/" aria-label="Aluraflix - Página Inicial">
                <img
                    className={styles.logoH}
                    src={LogoMenu}
                    alt="Aluraflix"
                    width="169"
                    height="40"
                    decoding="async"
                />
            </Link>

            <div className={styles.linkContainer}>
                <Link to={"/"} className={styles.headerLink}>
                    HOME
                </Link>
                <Link to={"/novo-video"} className={styles.headerLink1}>
                    NOVO VÍDEO
                </Link>
                <button
                    type="button"
                    onClick={toggleTheme}
                    className={styles.themeToggle}
                    aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
                    title={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
                >
                    <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
                    {isDark ? "CLARO" : "ESCURO"}
                </button>
            </div>
        </header>
    )
}

export default Header
