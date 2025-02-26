import { useEffect } from "react";
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
                        <a href="about">ABOUT</a>
                    </li>
                    <li>
                        <a href="skills">SKILLS</a>
                    </li>
                    <li>
                        <a href="projects">PROJECTS</a>
                    </li>
                    <li>
                        <a href="contact">CONTACT</a>
                    </li>
                </div>
            </NavigationBarList>
        </NavigationContainer>
    )
}