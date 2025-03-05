import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
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

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <NavigationBar />
        <Header />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <EmailContact />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App