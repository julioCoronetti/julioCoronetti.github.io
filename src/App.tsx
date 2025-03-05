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
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <NavigationBar />
      <Element name="header">
        <Header />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="skills">
        <Skills />
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
      <Footer />
    </ThemeProvider >
  )
}

export default App