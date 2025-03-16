import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import HowItWorks from '../components/landing/HowItWorks';
import Video from '../components/landing/Video';
import Stats from '../components/landing/Stats';
import Newsletter from '../components/landing/Newsletter';
import CallToAction from '../components/landing/CallToAction';

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <Video />
            <HowItWorks />
            <Stats />
            <Newsletter />
            <CallToAction />
        </>
    );
};

export default Home;
