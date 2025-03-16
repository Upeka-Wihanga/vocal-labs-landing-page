import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  color: #555;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
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