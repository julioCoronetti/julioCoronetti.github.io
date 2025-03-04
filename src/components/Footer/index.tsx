import { Copyright } from "lucide-react";
import { FooterContainer, FooterContent, FooterText, LinksFooterArea, LinksNavigationFooter } from "./styles"

export const Footer = () => {
    let date = new Date();

    return (
        <FooterContainer>
            <FooterContent>
                <FooterText>
                    <h2>JULIO <br /> CORONETTI</h2>
                    <p>FULL-STACK DEVELOPER</p>
                </FooterText>

                <LinksNavigationFooter>
                    <a href="">ABOUT</a>
                    <a href="">SKILLS</a>
                    <a href="">PROJECTS</a>
                    <a href="">CONTACT</a>
                </LinksNavigationFooter>

                <LinksFooterArea>
                    <a href="">
                        
                    </a>
                    <a href="">
                        
                    </a>
                    <a href="">
                        
                    </a>
                </LinksFooterArea>
            </FooterContent>
            <p><Copyright size={16} strokeWidth={3} /> JULIO CORONETTI {date.getFullYear()} - Almost all rights reserved 😅</p>
        </FooterContainer>
    )
}