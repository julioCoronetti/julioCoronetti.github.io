import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { MenuButton, NavigationBarList, NavigationContainer } from "./styles";
import { Menu } from "lucide-react";

export const NavigationBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("nav");
            if (header) {
                header.classList.toggle("scrolling", window.scrollY > 0);
            }
        };

        const mediaQuery = window.matchMedia("(min-width: 768px)");

        if (mediaQuery.matches) {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (mediaQuery.matches) {
                window.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <NavigationContainer>
            <Link to="header" smooth={true} duration={500} onClick={handleLinkClick}>
                JULIO CORONETTI
            </Link>
            <MenuButton onClick={toggleMenu}>
                <Menu size={35} />
            </MenuButton>
            <NavigationBarList className={menuOpen ? "open" : ""}>
                <li>
                    <Link to="about" smooth={true} duration={500} onClick={handleLinkClick}>
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500} onClick={handleLinkClick}>
                        SKILLS
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500} onClick={handleLinkClick}>
                        PROJECTS
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} onClick={handleLinkClick}>
                        CONTACT
                    </Link>
                </li>
            </NavigationBarList>
        </NavigationContainer>
    );
};