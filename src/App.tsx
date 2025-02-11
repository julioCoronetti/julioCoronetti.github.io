import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavigationBar } from "./components/NavigationBar";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";

import "./global.css";

const App = () => {

  return (
    <div>
      <NavigationBar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Footer/>
    </div>
  )
}

export default App