import { Link } from "react-router-dom";
import styles from "./Destaques.module.css";
import youtubeIcon from "./youtube.png";

const Destaques = ({ video }) => {
    const containerStyles = {
        backgroundImage: `url(${video.imagem})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        boxShadow: "inset 5px 0px 29px 0px rgba(34, 113, 209, 0.7)",
        width: "100%",
        minHeight: "532px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "24px",
        padding: "40px 5%",
        boxSizing: "border-box",
    };

    const imgStyles = {
        backgroundImage: `url(${video.imagem})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        width: "min(600px, 90vw)",
        height: "min(333.58px, 50vw)",
        boxShadow: "inset 5px 0px 29px 0px rgba(34, 113, 209, 0.7)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px",
    };

    const getShadowStyle = (area) => {
        switch (area) {
            case "backend":
                return { boxShadow: "inset 5px 0px 29px 0px var(--backend, #00C86F)" };
            case "mobile":
                return { boxShadow: "inset 5px 0px 29px 0px var(--mobile, #FFBA05)" };
            default:
                return { boxShadow: "inset 5px 0px 29px 0px var(--azul, #24A5E0)" };
        }
    };

    const getAreaStyle = (area) => {
        switch (area) {
            case "frontend":
                return { backgroundColor: "var(--frontend, #6BD1FF)" };
            case "backend":
                return { backgroundColor: "var(--backend, #00C86F)" };
            case "mobile":
                return { backgroundColor: "var(--mobile, #FFBA05)" };
            default:
                return {};
        }
    };

    const formatArea = (area) => {
        switch (area) {
            case "frontend":
                return "front end";
            case "backend":
                return "back end";
            default:
                return area;
        }
    };

    return (
        <div style={containerStyles}>
            <div className={styles.infoContainer}>
                <span style={{ ...getAreaStyle(video.area), display: "inline-flex", justifyContent: "center", alignItems: "center", textAlign: "center", color: "var(--surface, #03122f)", textTransform: "uppercase", padding: "10px 24px", borderRadius: "10px", width: "fit-content", minWidth: "160px", fontWeight: "bold", fontSize: "20px", letterSpacing: "1px" }}>
                    {formatArea(video.area)}
                </span>
                <h1>{video.titulo}</h1>
                <p>{video.descricao}</p>
            </div>

            <Link to={`/video/${video.id}`} aria-label={`Assistir ao vídeo: ${video.titulo}`}>
                <div
                    style={{ ...imgStyles, ...getShadowStyle(video.area) }}
                >
                    <img src={youtubeIcon} alt="" aria-hidden="true" width="48" height="48" decoding="async" />
                </div>
            </Link>
        </div>
    );
};

export default Destaques;