import { Link } from "react-scroll";
import { HeaderContainer, TextContainer } from "./styles";
import { motion } from "framer-motion";

interface HeaderProps {
    stack: string;
}

const textVariants = (delay: number) => ({
    hidden: { x: 50 + delay * 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 + delay * 0.2 } },
});

export const Header = ({ stack }: HeaderProps) => {
    return (
        <HeaderContainer>
            <TextContainer>
                <motion.span initial="hidden" whileInView="visible" variants={textVariants(0)}>
                    Hi! My name is
                </motion.span>

                <motion.h1 initial="hidden" whileInView="visible" variants={textVariants(1)}>
                    Julio Coronetti!
                </motion.h1>

                <motion.h1 initial="hidden" whileInView="visible" variants={textVariants(2)}>
                    And I am <span>{stack} Developer.</span>
                </motion.h1>

                <motion.p initial="hidden" whileInView="visible" variants={textVariants(3)}>
                    A web developer specializing in building web applications. Focused on
                    creating exotic and fun experiences!
                </motion.p>
            </TextContainer>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 0.7 } }}
            >
                <Link to="about" smooth={true} duration={500}>
                    SEE MORE ABOUT ME
                </Link>
            </motion.div>
        </HeaderContainer>
    );
};
