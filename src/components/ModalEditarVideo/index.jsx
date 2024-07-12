import { useEffect, useState } from "react"
import CampoTexto from "../CampoTexto"
import FormBotao from "../FormBotao"
import FormDescricao from "../FormDescricao"
import ListaSuspensaArea from "../ListaSuspensaArea"
import styles from "./ModalEditarVideo.module.css"
import botaoFechar from "./iconeFechar.png"
import NewVideo from "./../../pages/NewVideo/index"

const ModalEditarVideo = ({ video, aoFechar, aoAtualizar }) => {
    const [tituloPut, setTituloPut] = useState("")
    const [areaPut, setAreaPut] = useState("")
    const [descricaoPut, setDescricaoPut] = useState("")
    const [imagemPut, setImagemPut] = useState("")
    const [videoPut, setVideoPut] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        const NewVideo = { titulo, area, descricao, imagem, video }
        const response = await fetch(
            `http://localhost:3000/videos/${video.id}`,
            {
                method: "POST",
                headers: { "Content-Type": "aplication/json" },
                body: JSON.stringify(NewVideo),
            }
        )
        const newVideoData = await response.json()
        aoAtualizar(newVideoData)
        aoFechar()
    }

    useEffect(() => {
        if (video) {
            setTituloPut(video.titulo)
            setAreaPut(video.area)
            setDescricaoPut(video.descricao)
            setImagemPut(video.imagem)
            setVideoPut(video.link)
        }
    }, [video])

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

    async function atualizarVideoPut(
        id,
        area,
        imagem,
        titulo,
        descricao,
        link
    ) {
        let videoPutApi
        videoPutApi = await fetch(`http://localhost:3000/videos/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                area: area,
                imagem: imagem,
                titulo: titulo,
                descricao: descricao,
                link: link,
            }),
        })
        if (!videoPutApi.ok) {
            throw new Error("Não foi possível atualizar o card vídeo")
        }

        const videoPutApiConvertido = await videoPutApi.json()
        return videoPutApiConvertido
    }

    const aoSalvar = async (evento) => {
        evento.preventDefault()
        const videoAtualizado = await atualizarVideoPut(
            video.id,
            areaPut,
            imagemPut,
            tituloPut,
            descricaoPut,
            videoPut
        )
        setAreaPut("")
        setImagemPut("")
        setTituloPut("")
        setDescricaoPut("")
        setVideoPut("")
        aoAtualizar(videoAtualizado)
        alert("Video salvo com sucesso")
    }

    const aoLimpar = () => {
        setAreaPut("")
        setImagemPut("")
        setTituloPut("")
        setDescricaoPut("")
        setVideoPut("")
    }

    return (
        <>
            {video && (
                <>
                    {" "}
                    <div className={styles.overlay}> </div>
                    <dialog
                        open={!!video}
                        onClose={aoFechar}
                        className={styles.dialog}
                    >
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
                            <button>
                                <img
                                    src={botaoFechar}
                                    alt="Botão fechar do modal"
                                />
                            </button>
                        </form>
                    </dialog>
                </>
            )}
        </>
    )
}

export default ModalEditarVideo
