import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { NavigationBar } from "./components/NavigationBar";
import { Header } from "./components/Header";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <NavigationBar />
      <Header />
    </ThemeProvider>
  )
}

export default App