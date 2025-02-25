import { NavigationBarList, NavigationContainer } from "./styles"

export const NavigationBar = () => {
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