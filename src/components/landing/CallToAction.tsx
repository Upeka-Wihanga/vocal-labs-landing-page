import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 100px 5%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  text-align: center;
  color: white;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: 2px solid white;
  border-radius: 8px;
  background: transparent;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: white;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CallToAction = () => {
    return (
        <Section>
            <Container>
                <Title
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Ready to Transform Your Speaking Skills?
                </Title>
                <Description
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Join thousands of speakers who have already improved their public speaking with VocalLabs.
                </Description>
                <CTAButton
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true }}
                >
                    Get Started Free
                </CTAButton>
            </Container>
        </Section>
    );
};

export default CallToAction;
