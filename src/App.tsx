import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Navbar from './components/layout/Navbar';
import Hero from './components/landing/Hero';
import Features from './components/landing/Features';
import HowItWorks from './components/landing/HowItWorks';
import Stats from './components/landing/Stats';
import Newsletter from './components/landing/Newsletter';
import CallToAction from './components/landing/CallToAction';
import Footer from './components/layout/Footer';

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
            <GlobalStyles />
            <AppWrapper>
                <Navbar />
                <MainContent>
                    <Hero />
                    <Features />
                    <HowItWorks />
                    <Stats />
                    <Newsletter />
                    <CallToAction />
                </MainContent>
                <Footer />
            </AppWrapper>
        </ThemeProvider>
    );
}

export default App;