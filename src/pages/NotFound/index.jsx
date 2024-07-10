import styles from "./NotFound.module.css"
import notFoundImg from "./icon-Page_not_found.png"


const NotFound = () => {
    return (
        <img
            className={styles.img}
            src={notFoundImg}
            alt="Imagem de página não encontrada"
        />
    )
}

export default NotFound
