import { useEffect } from "react";
import { Link } from "react-scroll";
import { NavigationBarList, NavigationContainer } from "./styles"

export const NavigationBar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("nav");
            if (header) {
                header.classList.toggle("scrolling", window.scrollY > 0);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <NavigationContainer>
            <NavigationBarList>
                <li>
                    <Link to="header" smooth={true} duration={500}>
                        JULIO CORONETTI
                    </Link>
                </li>
                <div>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500}>
                            SKILLS
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500}>
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                            CONTACT
                        </Link>
                    </li>
                </div>
            </NavigationBarList>
        </NavigationContainer>
    )
}