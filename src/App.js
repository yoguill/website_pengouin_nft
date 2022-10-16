import Home from './components/sections/Home';
import About from './components/sections/About';
import Roadmap from './components/sections/Roadmap';
import NFT from './components/sections/Nft';
import Team from './components/sections/Team';
import Faq from './components/sections/Faq';
import Footer from './components/Footer';
import Navbar from './components/Navigation';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components'
import { light } from './styles/Themes';
import { dark } from './styles/Themes';
import ScrollToTop from './components/ScrollToTop';




const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navbar/>
        <Home/>
        <About/>
        <Roadmap/>
        <NFT/>
        <Team/>
        <Faq/>
        <Footer/>
        <ScrollToTop/>
      </ThemeProvider>
    </>
  );
}

export default App;
