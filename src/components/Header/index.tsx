import { Link } from "react-scroll"
import { HeaderContainer, TextContainer } from "./styles"

interface HeaderProps {
    stack: string;
}

export const Header = ({ stack }: HeaderProps) => {
    return (
        <HeaderContainer>
            <TextContainer>
                <span>Hi! My name is</span>
                <h1>Julio Coronetti!</h1>
                <h1>And I am <span>{stack} Developer.</span></h1>
                <p>A web developer specializing in building web applications. Focused on creating exotic and fun experiences!</p>
            </TextContainer>

            <Link to="about" smooth={true} duration={500}>
                SEE MORE ABOUT ME
            </Link>
        </HeaderContainer>
    )
}