import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

// Define types for props
interface DelayProp {
  delay?: string;
}

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const ServicesContainer = styled.div`
  padding: 5rem 2rem;
  text-align: center;
  background: linear-gradient(120deg, #f5f7fa 0%, #e4f1f9 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(0, 123, 255, 0.1), rgba(111, 66, 193, 0.1));
    top: -150px;
    right: -150px;
    z-index: 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(111, 66, 193, 0.1), rgba(0, 123, 255, 0.1));
    bottom: -100px;
    left: -100px;
    z-index: 0;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #007bff, #6610f2);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${gradientMove} 5s ease infinite;
  font-weight: 800;
  position: relative;
  z-index: 1;
  display: inline-block;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto 3rem;
  animation: ${fadeInUp} 1s ease-out;
  position: relative;
  z-index: 1;
`;

const ServiceList = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ServiceCard = styled.div<DelayProp>`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  padding: 3rem 2rem;
  width: 320px;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  opacity: 0;
  transform: translateY(40px);
  animation: ${fadeInUp} 0.8s forwards;
  animation-delay: ${props => props.delay || '0s'};
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #007bff, #6f42c1);
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 123, 255, 0.1);
    
    &:before {
      transform: scaleX(1);
    }
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(45deg, #007bff, #6f42c1);
  background-size: 200% 200%;
  animation: ${gradientMove} 3s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: white;
  animation: ${float} 3s ease-in-out infinite;
`;

const ServiceTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, #007bff, #6f42c1);
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;

const ServiceDescription = styled.p`
  color: #555;
  line-height: 1.7;
  font-size: 1.05rem;
`;

const Services = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Add observer to card refs
    cardRefs.current.forEach(card => {
      if (card && observerRef.current) {
        observerRef.current.observe(card);
      }
    });

    return () => {
      if (observerRef.current) {
        cardRefs.current.forEach(card => {
          if (card && observerRef.current) {
            observerRef.current.unobserve(card);
          }
        });
      }
    };
  }, []);

  const services = [
    {
      icon: "📊",
      title: "Speech Analysis",
      description: "Get detailed feedback on your speeches, including tone, pace, clarity, and more. Our AI-powered tools provide insights that help you improve effectively."
    },
    {
      icon: "⚡",
      title: "Instant Feedback",
      description: "Receive instant feedback on your recorded speeches to help you improve quickly. No waiting - see results and actionable tips right after you finish speaking."
    },
    {
      icon: "📈",
      title: "Progress Tracking",
      description: "Track your progress over time with comprehensive analytics and reports. Visualize your improvement journey and identify areas for continued growth."
    },
    {
      icon: "👥",
      title: "Community Support",
      description: "Join a community of speakers and get support and tips from fellow users. Share experiences, exchange feedback, and grow together with like-minded individuals."
    }
  ];

  return (
    <ServicesContainer>
      <Title>Our Services</Title>
      <Subtitle>Discover how VocalLabs can transform your speech performance with our comprehensive suite of tools and features.</Subtitle>
      <ServiceList>
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            ref={(element: HTMLDivElement | null) => {
              cardRefs.current[index] = element;
            }}
            delay={`${0.2 * (index + 1)}s`}
          >
            <IconWrapper>
              <ServiceIcon>{service.icon}</ServiceIcon>
            </IconWrapper>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>
              {service.description}
            </ServiceDescription>
          </ServiceCard>
        ))}
      </ServiceList>
    </ServicesContainer>
  );
};

export default Services;