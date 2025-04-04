import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useRef, useContext, useEffect } from 'react';
import { VideoContext } from '../../contexts/VideoContext'; // Correct the import path

const VideoSection = styled.section`
    padding: 100px 5%;
    background: linear-gradient(
            to bottom,
            rgba(15, 23, 42, 0.95),
            rgba(2, 6, 23, 0.95)
    );
    position: relative;
    z-index: 1;
    scroll-margin-top: 70px; /* For smooth scrolling with navbar height offset */
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 3rem;
`;

const Title = styled(motion.h2)`
    font-size: 3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const Subtitle = styled(motion.p)`
    font-size: 1.25rem;
    color: #94a3b8;
    max-width: 600px;
    margin: 0 auto;
`;

const Video = () => {
    const { autoPlay, setAutoPlay } = useContext(VideoContext);
    const videoRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        if (autoPlay && videoRef.current) {
            const iframe = videoRef.current;
            const src = iframe.src;
            iframe.src = src + "?autoplay=1";
            setAutoPlay(false);
        }
    }, [autoPlay, setAutoPlay]);

    return (
        <VideoSection id="video-section">
            <Container>
                <SectionHeader>
                    <Title>Watch Our Demo</Title>
                    <Subtitle>See how our AI-powered platform can transform your public speaking skills.</Subtitle>
                </SectionHeader>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <iframe
                        ref={videoRef}
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/Cb9PhwEq2Cg"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            </Container>
        </VideoSection>
    );
};

export default Video;