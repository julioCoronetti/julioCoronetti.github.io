import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { ContactArea, ContactContainer, LinksContactArea, TextContactArea, TitleContact } from "./styles";

import githubLog from "/assets/github-logo.svg"
import linkedinLogo from "/assets/linkedin-logo.svg"
import credlyLogo from "/assets/credly-logo.svg"

// Substitua ContactArea por MotionContactArea
const MotionContactArea = motion.create(ContactArea);

export const Contact = () => {
    return (
        <ContactContainer>
            <TitleContact>
                <h1>CONTACT</h1>
                <hr />
            </TitleContact>

            <MotionContactArea
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <TextContactArea>
                    <h3>Do you have a new idea?</h3>
                    <p>Contact me and let's develop your idea!</p>
                    <Link to="email" smooth={true} duration={500}>
                        SEND ME A EMAIL
                    </Link>
                </TextContactArea>

                <LinksContactArea>
                    <a href="https://github.com/julioCoronetti" target="_blank">
                        <img src={githubLog} alt="Github Logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/julio-coronetti/" target="_blank">
                        <img src={linkedinLogo} alt="Linkedin Logo" />
                    </a>
                    <a href="https://www.credly.com/users/julio-coronetti" target="_blank">
                        <img src={credlyLogo} alt="Credly Logo" />
                    </a>
                </LinksContactArea>
            </MotionContactArea>
        </ContactContainer>
    );
};