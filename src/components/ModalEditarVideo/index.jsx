import { useEffect, useState } from "react"
import CampoTexto from "../CampoTexto"
import FormBotao from "../FormBotao"
import FormDescricao from "../FormDescricao"
import ListaSuspensaArea from "../ListaSuspensaArea"
import styles from "./ModalEditarVideo.module.css"
import botaoFechar from "./iconeFechar.png"

const ModalEditarVideo = ({ video, aoFechar, aoAtualizar }) => {
    const [tituloPut, setTituloPut] = useState("")
    const [areaPut, setAreaPut] = useState("")
    const [descricaoPut, setDescricaoPut] = useState("")
    const [imagemPut, setImagemPut] = useState("")
    const [videoPut, setVideoPut] = useState("")

    useEffect(() => {
        if (video) {
            setTituloPut(video.titulo || "")
            setAreaPut(video.area || "")
            setDescricaoPut(video.descricao || "")
            setImagemPut(video.imagem || "")
            setVideoPut(video.link || "")
        }
    }, [video])

    useEffect(() => {
        if (!video) return
        const fecharComEsc = (evento) => {
            if (evento.key === "Escape") aoFechar()
        }
        window.addEventListener("keydown", fecharComEsc)
        return () => window.removeEventListener("keydown", fecharComEsc)
    }, [video, aoFechar])

    const categoria = ["frontend", "backend", "mobile"]

    const styleLabel = {
        color: "#fff",
        fontSize: "20px",
    }

    const styleColorCampo = {
        border: "2px solid #2271D1",
        backgroundColor: "#03122f",
    }

    const styleWidthFormDescricao = {
        maxWidth: "674px",
    }

    const styleCorBotao = {
        border: "2px solid #fff",
        background: "#03122f",
    }

    const styleCorBotaoHover = {
        border: "2px solid #2271D1",
        boxShadow: "inset 0px 0px 12px 4px #2271D1",
        background: "#000",
    }

    const estiloCorCampoFormDescricao = {
        ...styleColorCampo,
        ...styleWidthFormDescricao,
    }

    const aoSalvar = async (evento) => {
        evento.preventDefault()
        if (!video) return
        await aoAtualizar({
            id: video.id,
            area: areaPut,
            imagem: imagemPut,
            titulo: tituloPut,
            descricao: descricaoPut,
            link: videoPut,
        })
    }

    const aoLimpar = () => {
        setAreaPut("")
        setImagemPut("")
        setTituloPut("")
        setDescricaoPut("")
        setVideoPut("")
    }

    if (!video) return null

    return (
        <>
            <div className={styles.overlay} onClick={aoFechar} />
            <dialog open={!!video} onClose={aoFechar} className={styles.dialog}>
                <h1>Editar Card:</h1>
                <form onSubmit={aoSalvar}>
                    <CampoTexto
                        label="Título"
                        placeholder="Digite um título"
                        valor={tituloPut}
                        obrigatorio={true}
                        aoAlterado={(valor) => setTituloPut(valor)}
                        estiloCorCampo={styleColorCampo}
                        estiloCorLabel={styleLabel}
                        className={styles.titulo}
                    />

                    <ListaSuspensaArea
                        label="Categoria"
                        itens={categoria}
                        valor={areaPut}
                        obrigatorio={true}
                        aoAlterado={(valor) => setAreaPut(valor)}
                        estiloCorCampo={styleColorCampo}
                        estiloCorLabel={styleLabel}
                        className={styles.categoria}
                    />

                    <CampoTexto
                        label="Imagem"
                        placeholder="Digite o link da imagem"
                        valor={imagemPut}
                        obrigatorio={true}
                        aoAlterado={(valor) => setImagemPut(valor)}
                        estiloCorCampo={styleColorCampo}
                        estiloCorLabel={styleLabel}
                        className={styles.imagem}
                    />

                    <CampoTexto
                        label="Vídeo"
                        placeholder="Digite o link do vídeo"
                        valor={videoPut}
                        obrigatorio={true}
                        aoAlterado={(valor) => setVideoPut(valor)}
                        estiloCorCampo={styleColorCampo}
                        estiloCorLabel={styleLabel}
                        className={styles.video}
                    />

                    <FormDescricao
                        label="Descrição"
                        placeholder="Sobre o que é esse vídeo?"
                        valor={descricaoPut}
                        obrigatorio={true}
                        aoAlterado={(valor) => setDescricaoPut(valor)}
                        estiloCorCampoFormDescricao={
                            estiloCorCampoFormDescricao
                        }
                        estiloCorLabel={styleLabel}
                        className={styles.descricao}
                    />

                    <div>
                        <FormBotao
                            styleCorBotao={styleCorBotao}
                            estiloCorBotaoHover={styleCorBotaoHover}
                            type="submit"
                            nome="guardar"
                            className={styles.guardar}
                        ></FormBotao>

                        <FormBotao
                            aoResetar={aoLimpar}
                            styleCorBotao={styleCorBotao}
                            estiloCorBotaoHover={styleCorBotaoHover}
                            type="reset"
                            nome="limpar"
                            className={styles.limpar}
                        ></FormBotao>
                    </div>
                </form>

                <form className={styles.dialogBtn} method="dialog">
                    <button onClick={aoFechar} aria-label="Fechar modal">
                        <img
                            src={botaoFechar}
                            alt="Botão fechar do modal"
                        />
                    </button>
                </form>
            </dialog>
        </>
    )
}

export default ModalEditarVideo
