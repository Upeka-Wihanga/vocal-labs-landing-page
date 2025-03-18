//import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const RoadmapContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgb(55, 112, 170) 0%, #e9f2f9 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
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

const RoadmapContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: ${fadeIn} 1.5s ease-out;
`;

const RoadmapItem = styled.div`
  background: rgba(204, 215, 226, 0.99); /* Light blue color */
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1.5s ease-out;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 50px;
    background: #000;
    left: 50%;
    bottom: -25px;
    transform: translateX(-50%);
  }
`;

const ItemTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #007bff, #6610f2);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const ItemDescription = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

const Roadmap = () => {
  const roadmapItems = [
    {
      title: 'Q1 2025',
      description: 'Launch of the VocalLabs mobile app with core features including speech analysis and real-time feedback.',
    },
    {
      title: 'Q2 2025',
      description: 'Introduction of advanced analytics and personalized improvement plans based on user performance data.',
    },
    {
      title: 'Q3 2025',
      description: 'Expansion of language support and integration with popular speech platforms for seamless user experience.',
    },
    {
      title: 'Q4 2025',
      description: 'Release of community features allowing users to share their progress and receive feedback from peers.',
    },
  ];

  return (
    <RoadmapContainer>
      <Title>Our Roadmap</Title>
      <RoadmapContent>
        {roadmapItems.map((item, index) => (
          <RoadmapItem key={index}>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemDescription>{item.description}</ItemDescription>
          </RoadmapItem>
        ))}
      </RoadmapContent>
    </RoadmapContainer>
  );
};

export default Roadmap;