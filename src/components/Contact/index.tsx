import { Link } from "react-scroll";
import { ContactArea, ContactContainer, LinksContactArea, TextContactArea, TitleContact } from "./styles";


export const Contact = () => {
    return (
        <ContactContainer>
            <TitleContact>
                <h1>CONTACT</h1>
                <hr />
            </TitleContact>

            <ContactArea>
                <TextContactArea>
                    <h3>Do you have a new idea?</h3>
                    <p>Contact me and let's develop your idea!</p>
                    <Link to="email" smooth={true} duration={500}>
                        SEND ME A EMAIL
                    </Link>
                </TextContactArea>

                <LinksContactArea>
                    <a href="https://github.com/julioCoronetti" target="_blank">
                        <img src="/src/assets/github-logo.svg" alt="Github Logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/julio-coronetti/" target="_blank">
                        <img src="/src/assets/linkedin-logo.svg" alt="Linkedin Logo" />
                    </a>
                    <a href="https://www.credly.com/users/julio-coronetti" target="_blank">
                        <img src="/src/assets/credly-logo.svg" alt="Credly Logo" />
                    </a>
                </LinksContactArea>
            </ContactArea>
        </ContactContainer>
    );
};