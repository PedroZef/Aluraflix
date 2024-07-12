import React, { useState } from "react"
import styles from "./FormBotao.module.css"

const FormBotao = (props) => {
    const [isHovered, setIsHovered] = useState(false)
    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    const estiloHober =isHovered
        ? props.estiloCorBotaoHover
        : props.styleCorBotao

    return (
        <button
            className={styles.button}
            type={props.type}
            style={estiloHober}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={props.aoResetar}
        >
            {props.nome}
        </button>
    )
}

export default FormBotao
