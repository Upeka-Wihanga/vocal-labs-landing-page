import { motion } from 'framer-motion';
import styled from 'styled-components';

const NewsletterSection = styled.section`
    background: linear-gradient(
        to bottom,
        rgba(2, 6, 23, 0.95),
        rgba(15, 23, 42, 0.95)
    );
    padding: 100px 0;
`;

const NewsletterContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 0 2rem;
    text-align: center;
`;

const NewsletterTitle = styled(motion.h2)`
    font-size: 3rem;
    color: white;
    margin-bottom: 1.5rem;
`;

const NewsletterDescription = styled(motion.p)`
    font-size: 1.25rem;
    color: #94a3b8;
    margin-bottom: 2rem;
`;

const NewsletterForm = styled.form`
    display: flex;
    gap: 1rem;
    max-width: 500px;
    margin: 0 auto;

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

const NewsletterInput = styled.input`
    flex: 1;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    color: white;
    font-size: 1rem;

    &::placeholder {
        color: #94a3b8;
    }
`;

const NewsletterButton = styled(motion.button)`
    padding: 1rem 2rem;
    background: linear-gradient(to right, #3b82f6, #8b5cf6);
    color: white;
    border-radius: 8px;
    font-weight: 600;
    white-space: nowrap;

    &:hover {
        opacity: 0.9;
    }
`;

const Newsletter = () => {
    return (
        <NewsletterSection>
            <NewsletterContainer>
                <NewsletterTitle
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Stay Updated
                </NewsletterTitle>
                <NewsletterDescription
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Subscribe to our newsletter for the latest updates and speaking tips.
                </NewsletterDescription>
                <NewsletterForm>
                    <NewsletterInput
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                    <NewsletterButton
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                    >
                        Subscribe
                    </NewsletterButton>
                </NewsletterForm>
            </NewsletterContainer>
        </NewsletterSection>
    );
};

export default Newsletter;