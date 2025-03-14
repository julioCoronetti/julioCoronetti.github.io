import { Link } from "react-scroll";
import { HeaderContainer, TextContainer } from "./styles";
import { motion } from "framer-motion";

interface HeaderProps {
    stack: string;
}

export const Header = ({ stack }: HeaderProps) => {
    return (
        <HeaderContainer>
            <TextContainer>
                <motion.span
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >Hi! My name is</motion.span>

                <motion.h1
                    initial={{ x: 150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >Julio Coronetti!</motion.h1>

                <motion.h1
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >And I am <span>{stack} Developer.</span></motion.h1>

                <motion.p
                    initial={{ x: 250, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.9 }}
                >A web developer specializing in building web applications. Focused on creating exotic and fun experiences!</motion.p>
            </TextContainer>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <Link to="about" smooth={true} duration={500}>
                    SEE MORE ABOUT ME
                </Link>
            </motion.div>
        </HeaderContainer>
    )
}