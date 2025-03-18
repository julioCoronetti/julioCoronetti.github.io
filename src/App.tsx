import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { NavigationBar } from "./components/NavigationBar";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { EmailContact } from "./components/EmailContact";
import { Footer } from "./components/Footer";

import "./index.css";
import { Element } from "react-scroll";

const App = () => {
  const stack = "Front-End"; // Front-End | Full-Stack
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <NavigationBar />

      <Element name="header">
        <Header stack={stack} />
      </Element>

      <Element name="about">
        <About stack={stack} />
      </Element>

      <Element name="skills">
        <Skills stack={stack} />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Element name="email">
        <EmailContact />
      </Element>

      <Footer stack={stack} />
    </ThemeProvider >
  )
}

export default App