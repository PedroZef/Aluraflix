import styles from "./FormDescricao.module.css"

const FormDescricao = (props) => {
    return (
        <div className={styles.gContainerForm}>
            <label style={props.estiloCorLabel}>{props.label}</label>
            <textarea
                rows="10"
                value={props.valor}
                required={props.obrigatorio}
                placeholder={props.placeholder}
                onChange={(evento) => props.aoAlterado(evento.target.value)}
                style={props.estiloCorCampoFormDescricao}
            ></textarea>
        </div>
    )
}

export default FormDescricao
