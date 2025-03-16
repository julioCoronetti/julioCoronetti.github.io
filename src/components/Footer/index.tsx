import { Copyright } from "lucide-react";
import { FooterContainer, FooterContent, FooterText, LinksFooterArea, LinksNavigationFooter } from "./styles"
import { Link } from "react-scroll";
import githubLog from "../../assets/github-logo.svg"

interface FooterProps {
    stack: string;
}

export const Footer = ({ stack }: FooterProps) => {
    const date = new Date();

    return (
        <FooterContainer>
            <FooterContent>
                <FooterText>
                    <h2>JULIO <br /> CORONETTI</h2>
                    <p>{stack.toUpperCase()} DEVELOPER</p>
                </FooterText>

                <LinksNavigationFooter>
                    <Link to="about" smooth={true} duration={500}>
                        ABOUT
                    </Link>
                    <Link to="skills" smooth={true} duration={500}>
                        SKILLS
                    </Link>
                    <Link to="projects" smooth={true} duration={500}>
                        PROJECTS
                    </Link>
                    <Link to="contact" smooth={true} duration={500}>
                        CONTACT
                    </Link>
                </LinksNavigationFooter>

                <LinksFooterArea>
                    <a href="https://github.com/julioCoronetti" target="_blank">
                        <img src={githubLog} alt="Github Logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/julio-coronetti/" target="_blank">
                        <img src="/assets/linkedin-logo.svg" alt="Linkedin Logo" />
                    </a>
                    <a href="https://www.credly.com/users/julio-coronetti" target="_blank">
                        <img src="/assets/credly-logo.svg" alt="Credly Logo" />
                    </a>
                </LinksFooterArea>
            </FooterContent>
            <p><Copyright size={16} strokeWidth={3} /> JULIO CORONETTI {date.getFullYear()} - Almost all rights reserved 😅</p>
        </FooterContainer>
    )
}