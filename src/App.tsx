import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { NavigationBar } from "./components/NavigationBar";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

import "./index.css"
import { EmailContact } from "./components/EmailContact";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <NavigationBar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <EmailContact />
    </ThemeProvider>
  )
}

export default App