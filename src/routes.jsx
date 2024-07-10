import { Routes, Route, BrowserRouter } from "react-router-dom"
import Inicio from "./pages/Inicio"
import NewVideo from "./pages/NewVideo"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

import NotFound from "./pages/NotFound"
import AssistirVideo from "./pages/AssistirVideo"


const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header /> <Inicio /> <Footer />
                            </>
                        }
                    ></Route>
                    <Route
                        path="/novo-video"
                        element={
                            <>
                                <Header />
                                <NewVideo />
                                <Footer />
                            </>
                        }
                    ></Route>
                    <Route
                        path="/video/:id"
                        element={
                            <>
                                <Header />
                                <AssistirVideo  />
                                <Footer />
                            </>
                        }
                    ></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes
