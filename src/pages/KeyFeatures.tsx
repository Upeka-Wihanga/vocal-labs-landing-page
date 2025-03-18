//import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaMicrophone, FaBook, FaChartLine, FaWaveSquare, FaMedal } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const KeyFeaturesContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgb(55, 112, 170) 0%, #e9f2f9 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #007bff, #6610f2);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${fadeIn} 1s ease-out;
`;

const FeaturesList = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  animation: ${fadeIn} 1.5s ease-out;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FeatureItem = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(230, 240, 255, 0.9));
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1.5s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 123, 255, 0.2);
  }

  &:nth-child(5) {
    grid-column: 1 / -1;
    justify-self: center;
    width: 50%;
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #007bff;
`;

const FeatureTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #007bff, #6610f2);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const FeatureDescription = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

const KeyFeatures = () => {
  const features = [
    {
      title: 'Speech Development',
      description: 'Enhance your speech development with our AI-powered tools designed to improve your speaking skills.',
      icon: <FaMicrophone />,
    },
    {
      title: 'Vocabulary Evaluation',
      description: 'Evaluate and expand your vocabulary with detailed feedback and suggestions.',
      icon: <FaBook />,
    },
    {
      title: 'Effectiveness of the Speech',
      description: 'Analyze the effectiveness of your speech and receive actionable insights to improve.',
      icon: <FaChartLine />,
    },
    {
      title: 'Voice Analysis',
      description: 'Get in-depth voice analysis to understand your tone, pitch, and modulation.',
      icon: <FaWaveSquare />,
    },
    {
      title: 'Proficiency',
      description: 'Measure your proficiency and track your progress over time with our comprehensive tools.',
      icon: <FaMedal />,
    },
  ];

  return (
    <KeyFeaturesContainer>
      <Title>Key Features</Title>
      <FeaturesList>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureItem>
        ))}
      </FeaturesList>
    </KeyFeaturesContainer>
  );
};

export default KeyFeatures;