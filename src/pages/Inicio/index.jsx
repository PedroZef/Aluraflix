import Banner from "../../components/Banner"
import Destaques from "../../components/Banner/Destaques"
import styles from "./Inicio.module.css"
import { register } from "swiper/element/bundle"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

register()
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { useEffect, useState } from "react"
import Area from "../../components/Area"
import CardVideo from "../../components/Area/CardVideo"
import ModalEditarVideo from "../../components/ModalEditarVideo"


const Inicio = () => {
    const [videos, setVideos] = useState([])
    const [frontendVideo, setFrontendVideo] = useState([])
    const [backendVideo, setBackendVideo] = useState([])
    const [mobileVideo, setMobileVideo] = useState([])
    const [videoSelecionado, setVideoSelecionado] = useState(null)

    useEffect(() => {
        async function conectApi() {
            const videosApi = await fetch(`http://localhost:3000/videos`)
            //Para proceber as funcionalidades de Post, Delete e Put,
            //troque o link do fetch por "http://localhost:3000/videos" e
            //abra novo terminal e rode o comando "npm start" ou "json-server --watch db.json"

            const videosApiData = await videosApi.json()
            setVideos(videosApiData)
        }
        conectApi()
    }, [])

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 720) {
                setSliderPreview(1)
            } else {
                setSliderPreview(3)
            }
        }
        window.addEventListener("resize", handleResize)
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
        }
    }, [videos])

    const atualizarVideoDeletado = async (id) => {
        const response = await fetch(`http://localhost:3000/videos/${id}`, {
            method: "DELETE",
        })
        const updatedVideos = await response.json()
        setVideos(updatedVideos)
    }

    const atualizarAposPut = async (videoAtualizado) => {
        const response = await fetch(
            `http://localhost:3000/videos/${videoAtualizado.id}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(videoAtualizado),
            }
        )
        const updatedVideos = await response.json()
        setVideos(updatedVideos)
        setVideoSelecionado(null)
    }

    return (
        <div className={styles.incialBg}>
            <Banner>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={{ delay: 3000 }}
                >
                    {videos.map((video) => (
                        <SwiperSlide key={video.id}>
                            <Destaques key={video.id} video={video} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Banner>
            <Area
                titulo="FRONT END"
                tituloColor="#2271d1"
                videoBorderColor="#2271d1"
                btnColor="#2271d1"
            >
                {frontendVideo.map((video) => (
                    <CardVideo
                        key={video.id}
                        video={video}
                        aoDeletar={atualizarVideoDeletado}
                        aoVideoSelecionado={(video) =>
                            setVideoSelecionado(video)
                        }
                    />
                ))}
            </Area>
            <Area
                titulo="BACK END"
                tituloColor={"#03e40e"}
                videoBorderColor={"#03e40e"}
                btnColor={"#03e40e"}
            >
                {backendVideo.map((video) => (
                    <CardVideo
                        key={video.id}
                        video={video}
                        aoDeletar={atualizarVideoDeletado}
                        aoVideoSelecionado={(video) =>
                            setVideoSelecionado(video)
                        }
                    />
                ))}
            </Area>
            <Area
                titulo="MOBILE"
                tituloColor={"#FFBA01"}
                videoBorderColor={"#FFBA01"}
                btnColor={"#FFBA01"}
            >
                {mobileVideo.map((video) => (
                    <CardVideo
                        key={video.id}
                        video={video}
                        aoDeletar={atualizarVideoDeletado}
                        aoVideoSelecionado={(video) =>
                            setVideoSelecionado(video)
                        }
                    />
                ))}
            </Area>
            <ModalEditarVideo
                videos={videos}
                video={videoSelecionado}
                aoFechar={() => setVideoSelecionado(null)}
                aoAtualizar={atualizarAposPut}
                videoAtualizado={atualizarAposPut}
            />
        </div>
    )
}

export default Inicio
