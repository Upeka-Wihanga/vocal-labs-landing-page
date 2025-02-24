import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const FeaturesSection = styled.section`
    padding: 100px 0;
    margin-top: 0; /* Remove margin to avoid gray bar */
    background: linear-gradient(
            to bottom,
            rgba(2, 6, 23, 0.95),
            rgba(15, 23, 42, 0.95)
    );
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`;

const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 4rem;
`;

const Title = styled(motion.h2)`
    font-size: 3rem;
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

const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
`;

const FeatureCard = styled(motion.div)`
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 2rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.08);
    }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  svg {
    width: 30px;
    height: 30px;
    color: white;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #94a3b8;
  line-height: 1.6;
`;

const Features = () => {
    const features = [
        {
            title: "Real-time Analysis",
            description: "Get instant feedback on your speech patterns, pacing, and tone while you speak.",
            icon: "⚡"
        },
        {
            title: "AI-Powered Insights",
            description: "Advanced algorithms analyze your speaking style and provide personalized recommendations.",
            icon: "🧠"
        },
        {
            title: "Progress Tracking",
            description: "Monitor your improvement over time with detailed analytics and performance metrics.",
            icon: "📈"
        },
        // Add more features as needed
    ];

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            
            opacity: 1,
            y: 0
        }
    };

    return (
        <FeaturesSection>
            <Container>
                <SectionHeader>
                    <Title
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        Powerful Features
                    </Title>
                    <Subtitle
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Everything you need to become a confident public speaker
                    </Subtitle>
                </SectionHeader>
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <FeaturesGrid>
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.03 }}
                            >
                                <FeatureIcon>{feature.icon}</FeatureIcon>
                                <FeatureTitle>{feature.title}</FeatureTitle>
                                <FeatureDescription>{feature.description}</FeatureDescription>
                            </FeatureCard>
                        ))}
                    </FeaturesGrid>
                </motion.div>
            </Container>
        </FeaturesSection>
    );
};

export default Features;