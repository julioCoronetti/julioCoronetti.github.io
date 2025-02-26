import logo from '../../assets/logo.svg';
import { AboutContainer, TextAboutContainer, TitleAbout } from './styles';

export const About = () => {
    return (
        <AboutContainer>
            <TextAboutContainer>
                <TitleAbout>
                    <h2>ABOUT ME</h2>
                    <hr />
                </TitleAbout>
                <p>Hello! I'm <span>Julio Coronetti</span>, a web developer specializing in building web applications. Focused on creating <span>exotic</span> and fun experiences! I build complete web applications using <span>React</span>, <span>Next.js</span>, <span>TypeScript</span>, <span>Java</span> and <span>Spring</span>, developing everything from the visual interface to the system logic. Always exploring new technologies to create smooth, efficient, and engaging digital experience.</p>
            </TextAboutContainer>
            <img src={logo} />
        </AboutContainer>
    )
}