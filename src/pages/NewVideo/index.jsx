import { useState } from "react"
import CampoTexto from "../../components/CampoTexto"
import FormDescricao from "../../components/FormDescricao"
import ListaSuspensaArea from "../../components/ListaSuspensaArea"
import styles from "./NewVideo.module.css"
import FormBotao from "../../components/FormBotao"
import { createVideo } from "../../lib/api"

const NewVideo = () => {
    const [tituloPost, setTituloPost] = useState("")
    const [areaPost, setAreaPost] = useState("")
    const [imagemPost, setImagemPost] = useState("")
    const [videoPost, setVideoPost] = useState("")
    const [descricaoPost, setDescricaoPost] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [erro, setErro] = useState("")

    const aoGuardar = async (evento) => {
        evento.preventDefault()
        setMensagem("")
        setErro("")
        try {
            await createVideo({
                area: areaPost,
                imagem: imagemPost,
                titulo: tituloPost,
                descricao: descricaoPost,
                link: videoPost,
            })
            setAreaPost("")
            setImagemPost("")
            setTituloPost("")
            setDescricaoPost("")
            setVideoPost("")
            setMensagem("Vídeo salvo com sucesso!")
        } catch (error) {
            console.error(error)
            setErro("Não foi possível adicionar novo vídeo. Verifique se o json-server está rodando (npm start).")
        }
    }

    const aoLimpar = () => {
        setAreaPost("")
        setImagemPost("")
        setTituloPost("")
        setDescricaoPost("")
        setVideoPost("")
        setMensagem("")
        setErro("")
    }

    const categoria = ["frontend", "backend", "mobile"]

    return (
        <div className={styles.gContainerVideo}>
            <section className={styles.gContainerTitulo}>
                <h1>NOVO VÍDEO</h1>
                <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</p>
            </section>
            <section className={styles.gContainerForm}>
                <h2>Criar Card</h2>
                {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
                {erro && <p className={styles.erro}>{erro}</p>}
                <form onSubmit={aoGuardar}>
                    <div>
                        <CampoTexto
                            label="Título"
                            placeholder="Digite um título"
                            valor={tituloPost}
                            obrigatorio={true}
                            aoAlterado={(valor) => setTituloPost(valor)}
                        />

                        <ListaSuspensaArea
                            label="Categoria"
                            itens={categoria}
                            valor={areaPost}
                            obrigatorio={true}
                            aoAlterado={(valor) => setAreaPost(valor)}
                        />
                    </div>
                    <div>
                        <CampoTexto
                            label="Imagem"
                            placeholder="Digite o link da imagem"
                            valor={imagemPost}
                            obrigatorio={true}
                            aoAlterado={(valor) => setImagemPost(valor)}
                        />

                        <CampoTexto
                            label="Vídeo"
                            placeholder="Digite o link do vídeo"
                            valor={videoPost}
                            obrigatorio={true}
                            aoAlterado={(valor) => setVideoPost(valor)}
                        />
                    </div>
                    <FormDescricao
                        label="Descrição"
                        placeholder="Sobre o que é esse vídeo?"
                        valor={descricaoPost}
                        obrigatorio={true}
                        aoAlterado={(valor) => setDescricaoPost(valor)}
                    />
                    <div>
                        <FormBotao type="submit" nome="guardar"></FormBotao>
                        <FormBotao type="reset" nome="limpar" aoResetar={aoLimpar}></FormBotao>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default NewVideo
