import NavBarContext from "@/Context/NavBarContext";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

function Navbar() {
  const { isOpen, setIsOpen } = useContext(NavBarContext);
  const [search, setSearch] = useState("");
  const [navLink, setNavLink] = useState("");
  let route = useRouter();

  const searchNavigator = () => {
    if (search.trim()) {
      route.push(`/search?q=${search}`);
      setSearch('');
    }
  };

  useEffect(() => {
    const pathname = route.pathname === '/' ? '/' : route.pathname.slice(1);
    setNavLink(pathname);
  }, [route.pathname]);


  return (
    <div className={`container-fluid px-2 lg:px-0 ${styles.nav_bar}`}>
      <nav
        className={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <Link href="/" className={`${styles.navbar_brand} px-lg-4 m-0`}>
          <h1 className="m-0 display-4 text-uppercase text-white">HAMEDPYN</h1>
        </Link>

        <button
          onClick={() => setIsOpen(prev => !prev)}
          type="button"
          className={`${styles.navbar_toggler} lg:hidden`}
        >
          <span className={`${styles.navbar_toggler_icon}`}></span>
        </button>
        <div
          className={`${styles.navbar_collapse} lg:!flex ${isOpen ? "" : "hidden"}`}
          id="navbarCollapse"
        >
          <div className={`${styles.navbar_nav} lg:flex lg:justify-between  w-full ml-auto p-4`}>
            <div className="flex items-center w-fit lg:w-auto border-b-2 border-white ml-3 pl-1">
              <input
                onKeyDown={(e) => e.code == 'Enter' && searchNavigator()}
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                type="text"
                className={`${styles.search_input}`}
                placeholder="Search..."
              />
              <FontAwesomeIcon
                onClick={searchNavigator}
                className={styles.search_icon}
                icon={faSearch}
              />
            </div>
            <div className="lg:flex">

              <Link
                href="/"
                className={`${styles.nav_link} ${navLink == '/' && styles.active_nav_link} `}
              >
                Home
              </Link>
              <Link href="/about" className={`${styles.nav_link} ${navLink == 'about' && styles.active_nav_link}`}>
                About
              </Link>
              <Link href="/services" className={`${styles.nav_link} ${navLink == 'services' && styles.active_nav_link}`}>
                Service
              </Link>
              <Link href="/menu" className={`${styles.nav_link} ${navLink == 'menu' && styles.active_nav_link}`}>
                Menu
              </Link>
              <div className={`${styles.dropdown}`}>
                <Link
                  href="#"
                  className={`${styles.nav_link} ${styles.dropdown_toggle} ${navLink == 'reservation' || navLink == 'testimonial' && styles.active_nav_link}`}
                  data-toggle="dropdown"
                >
                  Pages
                </Link>
                <div className={`${styles.dropdown_menu} ${styles.text_capitalize}`}>
                  <Link href="/reservation" className={`${styles.dropdown_item}`}>
                    Reservation
                  </Link>
                  <Link href="/testimonial" className={`${styles.dropdown_item}`}>
                    Testimonial
                  </Link>
                </div>
              </div>
              <Link href="/contact" className={`${styles.nav_link}`}>
                Contact
              </Link>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;