import { HeaderContainer, TextContainer } from "./styles"

export const Header = () => {
    return (
        <HeaderContainer>
            <TextContainer>
                <span>Hi! My name is</span>
                <h1>
                    <span>Julio Coronetti!</span> 
                    <br />
                    And I am <span>Full Stack Developer.</span>
                </h1>
                <p>A web developer specializing in building web applications. Focused on creating exotic and fun experiences!</p>
            </TextContainer>

            <a href="">SEE MORE ABOUT ME</a>
        </HeaderContainer>
    )
}