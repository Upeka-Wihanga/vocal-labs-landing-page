import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const TestimonialsSection = styled.section`
    background: linear-gradient(
            to bottom,
            rgba(2, 6, 23, 0.95),
            rgba(15, 23, 42, 0.95)
    );
    padding: 100px 0;
    overflow: hidden;
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
`;

const Subtitle = styled(motion.p)`
    font-size: 1.25rem;
    color: #94a3b8;
    max-width: 600px;
    margin: 0 auto;
`;

const TestimonialSlider = styled(motion.div)`
    display: flex;
    gap: 2rem;
    padding: 2rem 0;
`;

const TestimonialCard = styled(motion.div)`
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 2rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    min-width: 350px;
    flex-shrink: 0;
`;

const QuoteText = styled.p`
    color: white;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
`;

const Author = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const AuthorImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`;

const AuthorInfo = styled.div`
  color: white;
`;

const AuthorName = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const AuthorRole = styled.div`
  color: #94a3b8;
  font-size: 0.9rem;
`;

const testimonials = [
    {
        quote: "This platform transformed my public speaking abilities. The real-time feedback is invaluable!",
        author: "Sarah Johnson",
        role: "Marketing Director",
        image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        quote: "I've seen tremendous improvement in my presentation skills since using this tool.",
        author: "Michael Chen",
        role: "Tech Lead",
        image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    // Add more testimonials
];

const Testimonials = () => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prev) =>
                prev <= -100 * (testimonials.length - 1) ? 0 : prev - 100
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <TestimonialsSection>
            <Container>
                <SectionHeader>
                    <Title
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        What Our Users Say
                    </Title>
                    <Subtitle
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Join thousands of satisfied users who have improved their public speaking
                    </Subtitle>
                </SectionHeader>
                <TestimonialSlider
                    animate={{ x: `${position}%` }}
                    transition={{ duration: 0.5 }}
                >
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <QuoteText>"{testimonial.quote}"</QuoteText>
                            <Author>
                                <AuthorImage src={testimonial.image} alt={testimonial.author} />
                                <AuthorInfo>
                                    <AuthorName>{testimonial.author}</AuthorName>
                                    <AuthorRole>{testimonial.role}</AuthorRole>
                                </AuthorInfo>
                            </Author>
                        </TestimonialCard>
                    ))}
                </TestimonialSlider>
            </Container>
        </TestimonialsSection>
    );
};

export default Testimonials;
