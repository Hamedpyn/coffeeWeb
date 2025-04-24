// import Font Awesome CSS
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Navbar from "@/components/modules/Navbar/Navbar";
import Footer from "@/components/modules/Footer/Footer";
import NavBarContext from "@/Context/NavBarContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false)
  let route = useRouter()

  useEffect(() => {
    setIsOpen(false)
  }, [route.pathname])

  return (
    <NavBarContext.Provider value={{
      isOpen, setIsOpen
    }}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </NavBarContext.Provider>
  )
}
