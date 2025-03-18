import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Define keyframes for the animation
const moveRoadMap = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
`;

const Section = styled.section`
  position: relative; /* Add relative positioning */
  padding: 100px 5%;
  background: ${({ theme }) => theme.colors.background}; /* Change to a white background color */
  overflow: hidden; /* Ensure the background effect doesn't overflow */
`;

const BackgroundEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg,rgb(255, 255, 255) 25%, transparent 25%, transparent 50%, #e0e0e0 50%, #e0e0e0 75%, transparent 75%, transparent); /* Create a road map pattern */
  background-size: 50px 50px; /* Adjust the size of the pattern */
  animation: ${moveRoadMap} 10s linear infinite; /* Apply the animation */
  opacity: 0.1; /* Adjust opacity to make it subtle */
  z-index: -1; /* Ensure it is behind other content */
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StepsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Step = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px); /* Pop-up effect on hover */
  }
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s, transform 0.3s; /* Add transition for color and transform */

  &:hover {
    color: ${({ theme }) => theme.colors.primary};  /* Change color on hover */
    transform: scale(1.1); /* Scale effect on hover */
  }
`;

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray[400]};
  line-height: 1.6;
  transition: color 0.3s; /* Add transition for color */

  &:hover {
    color: rgb(156, 61, 154); /* Change color on hover to the gradient color */
  }
`;

const HowItWorks = () => {
    const steps = [
        {
            title: 'Record Your Speech',
            description: 'Use our platform to record or upload your speech for analysis.',
        },
        {
            title: 'Get Real-time Feedback',
            description: 'Receive instant feedback on your delivery, pacing, and tone.',
        },
        {
            title: 'Track Progress',
            description: 'Monitor your improvement over time with detailed analytics.',
        },
    ];

    return (
        <Section>
            <BackgroundEffect /> {/* Add the background effect */}
            <SectionTitle>How It Works</SectionTitle>
            <StepsContainer>
                {steps.map((step, index) => (
                    <Step
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <StepNumber>{index + 1}</StepNumber>
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                    </Step>
                ))}
            </StepsContainer>
        </Section>
    );
};

export default HowItWorks;