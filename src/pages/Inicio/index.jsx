import Banner from "../../components/Banner"
import Destaques from "../../components/Banner/Destaques"
import styles from "./Inicio.module.css"
import { register } from "swiper/element/bundle"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

register()
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { useEffect, useState } from "react"
import Area from "../../components/Area"
import CardVideo from "../../components/Area/CardVideo"
import ModalEditarVideo from "../../components/ModalEditarVideo"
import { listVideos, deleteVideo, updateVideo } from "../../lib/api"


const Inicio = () => {
    const [videos, setVideos] = useState([])
    const [frontendVideo, setFrontendVideo] = useState([])
    const [backendVideo, setBackendVideo] = useState([])
    const [mobileVideo, setMobileVideo] = useState([])
    const [videoSelecionado, setVideoSelecionado] = useState(null)
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState("")

    useEffect(() => {
        async function conectApi() {
            try {
                setCarregando(true)
                setErro("")
                const videosApiData = await listVideos()
                setVideos(Array.isArray(videosApiData) ? videosApiData : [])
            } catch (error) {
                console.error(error)
                setErro("Não foi possível carregar os vídeos. Verifique se o json-server está rodando (npm start).")
            } finally {
                setCarregando(false)
            }
        }
        conectApi()
    }, [])

    useEffect(() => {
        if (videos.length > 0) {
            const frontendVideos = videos.filter(
                (video) => video.area === "frontend"
            )
            const backendVideos = videos.filter(
                (video) => video.area === "backend"
            )
            const mobileVideos = videos.filter(
                (video) => video.area === "mobile"
            )

            setFrontendVideo(frontendVideos)
            setBackendVideo(backendVideos)
            setMobileVideo(mobileVideos)
        } else {
            setFrontendVideo([])
            setBackendVideo([])
            setMobileVideo([])
        }
    }, [videos])

    const removerVideo = async (id) => {
        try {
            await deleteVideo(id)
            setVideos((prev) => prev.filter((v) => String(v.id) !== String(id)))
        } catch (error) {
            console.error(error)
            alert("Erro ao excluir vídeo")
        }
    }

    const atualizarAposPut = async (videoAtualizado) => {
        try {
            const salvo = await updateVideo(videoAtualizado.id, {
                area: videoAtualizado.area,
                imagem: videoAtualizado.imagem,
                titulo: videoAtualizado.titulo,
                descricao: videoAtualizado.descricao,
                link: videoAtualizado.link,
            })
            setVideos((prev) =>
                prev.map((v) => (String(v.id) === String(salvo.id) ? salvo : v))
            )
            setVideoSelecionado(null)
        } catch (error) {
            console.error(error)
            alert("Não foi possível atualizar o card vídeo")
        }
    }

    return (
        <div className={styles.incialBg}>
            {erro && <p className={styles.erro}>{erro}</p>}
            {carregando ? (
                <p className={styles.carregando}>Carregando vídeos...</p>
            ) : (
                <>
                    <Banner>
                        <Swiper
                            modules={[Autoplay, Navigation, Pagination]}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            navigation
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                        >
                            {videos.map((video) => (
                                <SwiperSlide key={video.id}>
                                    <Destaques video={video} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Banner>
                    <Area
                        titulo="FRONT END"
                        tituloColor="#6BD1FF"
                        videoBorderColor="#6BD1FF"
                        btnColor="#6BD1FF"
                    >
                        {frontendVideo.map((video) => (
                            <CardVideo
                                key={video.id}
                                video={video}
                                aoDeletar={removerVideo}
                                aoVideoSelecionado={(video) =>
                                    setVideoSelecionado(video)
                                }
                            />
                        ))}
                    </Area>
                    <Area
                        titulo="BACK END"
                        tituloColor={"#00C86F"}
                        videoBorderColor={"#00C86F"}
                        btnColor={"#00C86F"}
                    >
                        {backendVideo.map((video) => (
                            <CardVideo
                                key={video.id}
                                video={video}
                                aoDeletar={removerVideo}
                                aoVideoSelecionado={(video) =>
                                    setVideoSelecionado(video)
                                }
                            />
                        ))}
                    </Area>
                    <Area
                        titulo="MOBILE"
                        tituloColor={"#FFBA05"}
                        videoBorderColor={"#FFBA05"}
                        btnColor={"#FFBA05"}
                    >
                        {mobileVideo.map((video) => (
                            <CardVideo
                                key={video.id}
                                video={video}
                                aoDeletar={removerVideo}
                                aoVideoSelecionado={(video) =>
                                    setVideoSelecionado(video)
                                }
                            />
                        ))}
                    </Area>
                </>
            )}
            <ModalEditarVideo
                video={videoSelecionado}
                aoFechar={() => setVideoSelecionado(null)}
                aoAtualizar={atualizarAposPut}
            />
        </div>
    )
}

export default Inicio
