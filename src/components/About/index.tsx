import logo from '../../../public/assets/logo.svg';
import { AboutContainer, TextAboutContainer, TitleAbout } from './styles';
import { motion } from "framer-motion";

interface AboutProps {
    stack: string;
}

export const About = ({ stack }: AboutProps) => {
    const textFrontEnd = "<p>Hello! <span>I'm Julio Coronetti</span>, a web developer specialized in building web applications. Focused on creating <span>exotic</span> and fun experiences! I build web applications using <span>React</span> and <span>TypeScript</span>, developing the visual interface with <span>styled-components</span> and <span>TailwindCSS</span>. Passionate about design systems, I use <span>shadcn/ui</span> and <span>Figma</span> to craft intuitive user experiences. With <span>react-router-dom</span>, I ensure seamless navigation, and <span>Git</span> helps me maintain version control efficiently. Always exploring new technologies, including <span>Google Cloud</span>, to create smooth, efficient, and engaging digital experiences.</p>";

    const textFullStack = "<p>Hello! I'm <span>Julio Coronetti</span>, a web developer specializing in building web applications. Focused on creating <span>exotic</span> and fun experiences! I build complete web applications using <span>React</span>, <span>Next.js</span>, <span>TypeScript</span>, <span>Java</span> and <span>Spring</span>, developing everything from the visual interface to the system logic. Always exploring new technologies to create smooth, efficient, and engaging digital experience.</p>";

    const textAbout = stack === "Front-End" ? textFrontEnd : textFullStack;

    return (
        <AboutContainer>
            <TextAboutContainer>
                <TitleAbout>
                    <h2>ABOUT ME</h2>
                    <hr />
                </TitleAbout>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div dangerouslySetInnerHTML={{ __html: textAbout }} />
                </motion.div>
            </TextAboutContainer>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <img src={logo} />
            </motion.div>
        </AboutContainer>
    )
}