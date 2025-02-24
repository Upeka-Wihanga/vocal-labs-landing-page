import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const StatsSection = styled.section`
    background: linear-gradient(
            to bottom,
            rgba(15, 23, 42, 0.95),
            rgba(2, 6, 23, 0.95)
    );
    padding: 80px 0;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`;

const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    text-align: center;
`;

const StatCard = styled(motion.div)`
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 2rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
`;

const StatNumber = styled.div`
    font-size: 3.5rem;
    font-weight: 700;
    background: linear-gradient(to right, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
    color: #94a3b8;
    font-size: 1.1rem;
`;

const Stats = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const stats = [
        { number: 95, label: "Success Rate", suffix: "%" },
        { number: 100000, label: "Practice Sessions", suffix: "+" },
        { number: 4.9, label: "User Rating", suffix: "", decimals: 1 }
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <StatsSection>
            <Container>
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <StatsGrid>
                        {stats.map((stat, index) => (
                            <StatCard
                                key={index}
                                variants={containerVariants}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <StatNumber>
                                    {inView && (
                                        <CountUp
                                            end={stat.number}
                                            duration={2.5}
                                            decimals={stat.decimals || 0}
                                            suffix={stat.suffix}
                                        />
                                    )}
                                </StatNumber>
                                <StatLabel>{stat.label}</StatLabel>
                            </StatCard>
                        ))}
                    </StatsGrid>
                </motion.div>
            </Container>
        </StatsSection>
    );
};

export default Stats;