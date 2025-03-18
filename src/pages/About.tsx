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

const AboutContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgb(89, 134, 179) 0%, #e9f2f9 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #007bff,rgb(144, 96, 221));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${fadeIn} 1s ease-out;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1.5s ease-out;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  background: linear-gradient(90deg, #007bff,rgb(236, 232, 241));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About VocalLabs</Title>
      <Content>
        <Paragraph>
          VocalLabs is an AI-powered mobile app designed for competitive speech analysis. Our mission is to provide speakers with the tools they need to improve their performance through detailed feedback and analysis.
        </Paragraph>
        <Paragraph>
          Our app leverages advanced AI algorithms to analyze various aspects of speech, including tone, pace, clarity, and more. Whether you're preparing for a debate, a public speaking event, or any other competitive speech scenario, VocalLabs is here to help you excel.
        </Paragraph>
        <Paragraph>
          With VocalLabs, you can record your speeches, receive instant feedback, and track your progress over time. Our user-friendly interface and comprehensive analytics make it easy for you to identify areas for improvement and refine your skills.
        </Paragraph>
        <Paragraph>
          Join the VocalLabs community today and take your speech performance to the next level!
        </Paragraph>
      </Content>
    </AboutContainer>
  );
};

export default About;