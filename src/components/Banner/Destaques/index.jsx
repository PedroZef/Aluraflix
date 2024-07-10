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
        width: "90%",
        height: "532px",
        display: "flex",
        justifyContent: "space-around",
    };

    const imgStyles = {
        backgroundImage: `url(${video.imagem})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        width: "600px",
        height: "333.58px",
        marginTop: "130px",
        marginRigth: "40px",
        boxShadow: "inset 5px 0px 29px 0px rgba(34, 113, 209, 0.7)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };

    const getShadowStyle = (area) => {
        switch (area) {
            case "backend":
                return { boxShadow: "inset 5px 0px 29px 0px #00C86F" };
            case "mobile":
                return { boxShadow: "inset 5px 0px 29px 0px #FFBA05" };
            default:
                return {};
        }
    };

    const getAreaStyle = (area) => {
        switch (area) {
            case "frontend":
                return { backgroundColor: "#6BD1FF" };
            case "backend":
                return { backgroundColor: "#00C86F" };
            case "mobile":
                return { backgroundColor: "#FFBA05" };
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
                <h1 style={{ ...getAreaStyle(video.area), textAlign: "center", color: "#fff", textTransform: "uppercase", padding: "10px", borderRadius: "10px", width: "60%" }}>
                    {formatArea(video.area)}
                </h1>
                <h1>{video.titulo}</h1>
                <p>{video.descricao}</p>
            </div>

            <Link to={`video/${video.id}`}>
                <div
                    style={{ ...imgStyles, ...getShadowStyle(video.area) }}
                >
                    <img src={youtubeIcon} alt="Ícone do YouTube" />
                </div>
            </Link>
        </div>
    );
};

export default Destaques;