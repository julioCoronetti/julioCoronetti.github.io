import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { NavigationBarList, NavigationContainer } from "./styles"

export const NavigationBar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("nav");
            if (header) {
                header.classList.toggle("active", window.scrollY > 0);
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
                    <a href="">JULIO CORONETTI</a>
                </li>
                <div>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/skills">SKILLS</Link>
                    </li>
                    <li>
                        <Link to="/projects">PROJECTS</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </div>
            </NavigationBarList>
        </NavigationContainer>
    )
}