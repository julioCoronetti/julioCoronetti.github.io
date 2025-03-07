import { Link } from "react-scroll"
import { HeaderContainer, TextContainer } from "./styles"

export const Header = () => {
    return (
        <HeaderContainer>
            <TextContainer>
                <span>Hi! My name is</span>
                <h1>Julio Coronetti!</h1>
                <h1>And I am <span>Full Stack Developer.</span></h1>
                <p>A web developer specializing in building web applications. Focused on creating exotic and fun experiences!</p>
            </TextContainer>

            <Link to="about" smooth={true} duration={500}>
                SEE MORE ABOUT ME
            </Link>
        </HeaderContainer>
    )
}