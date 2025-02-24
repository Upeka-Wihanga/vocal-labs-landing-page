import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroSection = styled.section`
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    background: linear-gradient(
            to bottom right,
            rgba(2, 6, 23, 0.95),
            rgba(15, 23, 42, 0.95)
    );
    overflow: hidden;
    padding-bottom: 50px; /* Add padding to the bottom to avoid overlap */
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 968px) {
        flex-direction: column;
        text-align: center;
        padding-top: 6rem;
    }
`;

const TextContent = styled.div`
    flex: 1;
    max-width: 600px;
`;

const GradientText = styled(motion.span)`
    background: linear-gradient(to right, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: bold;
`;

const Title = styled(motion.h1)`
    font-size: 4.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1.5rem;
    line-height: 1.1;

    @media (max-width: 768px) {
        font-size: 3rem;
    }
`;

const Description = styled(motion.p)`
    font-size: 1.25rem;
    color: #94a3b8;
    margin-bottom: 2.5rem;
    line-height: 1.6;
`;

const ButtonContainer = styled(motion.div)`
    display: flex;
    justify-content: left;
`;

const WatchDemoButton = styled(motion.button)`
    padding: 1rem 2rem;
    background: transparent;
    color: white;
    border: 2px solid #3b82f6;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(59, 130, 246, 0.1);
        transform: translateY(-2px);
    }
`;

const HeroVisual = styled(motion.div)`
    flex: 1;
    height: 600px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    margin-left: 130px; 

    @media (max-width: 968px) {
        height: 400px;
        margin-top: 2rem;
        margin-left: 0; 
    }
`;

const ImageContainer = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 832px;
    max-height: 832px;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
                45deg,
                rgba(59, 130, 246, 0.1),
                rgba(139, 92, 246, 0.1)
        );
        z-index: 1;
    }

    &::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        right: -50%;
        bottom: -50%;
        background: linear-gradient(
                45deg,
                transparent,
                rgba(230, 20, 100, 0.1),
                transparent
        );
        transform: rotate(45deg);
        animation: shine 6s infinite;
    }

    @keyframes shine {
        0% {
            transform: translateX(-100%) rotate(45deg);
        }
        100% {
            transform: translateX(100%) rotate(45deg);
        }
    }
`;

const StyledImage = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
`;

const Hero = () => {
    const handleWatchDemoClick = () => {
        const videoSection = document.getElementById('video-section');
        if (videoSection) {
            videoSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <HeroSection>
            <HeroContent>
                <TextContent>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Title>
                            Transform Your
                            <GradientText> Public Speaking </GradientText>
                            with AI
                        </Title>
                        <Description>
                            Master the art of public speaking with real-time AI feedback,
                            advanced analytics, and personalized coaching. Join thousands
                            of successful speakers who have elevated their communication skills.
                        </Description>
                        <ButtonContainer>
                            <WatchDemoButton
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleWatchDemoClick}
                            >
                                Watch Demo
                            </WatchDemoButton>
                        </ButtonContainer>
                    </motion.div>
                </TextContent>
                <HeroVisual>
                    <ImageContainer
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <StyledImage
                            src="\images\WhatsApp Image 2025-02-24 at 08.01.20 (1).png"
                            alt="Vocal Coach Visual"
                        />
                    </ImageContainer>
                </HeroVisual>
            </HeroContent>
        </HeroSection>
    );
};

export default Hero;