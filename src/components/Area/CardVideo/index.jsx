import { memo } from "react"
import styles from "./CardVideo.module.css"
import excluirBtn from "./excluir.png"
import editarBtn from "./editar.png"
import { Link } from "react-router-dom"
import { deleteVideo } from "../../../lib/api"

const CardVideo = memo(function CardVideo({
    video,
    aoDeletar,
    aoVideoSelecionado,
    videoBorderColor,
    btnColor,
}) {
    async function excluirVideo(id) {
        try {
            await deleteVideo(id)
            await aoDeletar(id)
        } catch (error) {
            console.error(error)
            alert("Erro ao excluir vídeo")
        }
    }

    const rolarPraCimaESelecionarVideo = (video) => {
        aoVideoSelecionado(video)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className={styles.gcontainerCard}>
            <Link to={`/video/${video.id}`} aria-label={`Assistir ao vídeo: ${video.titulo}`}>
                <div
                    className={styles.imgContainer}
                    style={{
                        borderColor: videoBorderColor,
                        boxShadow: `0 0 13px ${videoBorderColor}`,
                    }}
                >
                    <img
                        src={video.imagem}
                        alt={`Thumbnail do vídeo: ${video.titulo}`}
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </Link>
            <div
                className={styles.btnContainer}
                style={{ boxShadow: `0 0 13px ${btnColor}` }}
            >
                <button
                    type="button"
                    className={styles.btn}
                    onClick={() => excluirVideo(video.id)}
                    style={{ backgroundColor: btnColor }}
                    aria-label={`Excluir vídeo: ${video.titulo}`}
                >
                    <img src={excluirBtn} alt="" aria-hidden="true" width="16" height="16" />
                    EXCLUIR
                </button>
                <button
                    type="button"
                    className={styles.btn}
                    onClick={() => rolarPraCimaESelecionarVideo(video)}
                    style={{ backgroundColor: btnColor }}
                    aria-label={`Editar vídeo: ${video.titulo}`}
                >
                    <img src={editarBtn} alt="" aria-hidden="true" width="16" height="16" />
                    EDITAR
                </button>
            </div>
        </div>
    )
})

export default CardVideo
