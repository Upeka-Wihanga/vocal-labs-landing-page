import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { VideoProvider } from './contexts/VideoContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Prices from './pages/Prices';
import About from './pages/About';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Partners from './pages/Partners';
import Roadmap from './pages/Roadmap';
import KeyFeatures from './pages/KeyFeatures';

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const MainContent = styled.main`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    padding-top: 70px; /* Ensure content is not hidden behind the fixed navbar */
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <VideoProvider>
                <GlobalStyles />
                <AppWrapper>
                    <Router>
                        <Navbar />
                        <MainContent>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/prices" element={<Prices />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/services" element={<Services />} />
                                <Route path="/faq" element={<FAQ />} />
                                <Route path="/partners" element={<Partners />} />
                                <Route path="/roadmap" element={<Roadmap />} />
                                <Route path="/features" element={<KeyFeatures />} />
                            </Routes>
                        </MainContent>
                    </Router>
                    <Footer />
                </AppWrapper>
            </VideoProvider>
        </ThemeProvider>
    );
}

export default App;