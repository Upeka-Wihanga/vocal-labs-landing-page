//import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
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

const ServiceList = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ServiceCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 300px;
  text-align: left;
`;

const ServiceTitle = styled.h2`
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #555;
  line-height: 1.6;
`;

const Services = () => {
  return (
    <ServicesContainer>
      <Title>Our Services</Title>
      <ServiceList>
        <ServiceCard>
          <ServiceTitle>Speech Analysis</ServiceTitle>
          <ServiceDescription>
            Get detailed feedback on your speeches, including tone, pace, clarity, and more.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Instant Feedback</ServiceTitle>
          <ServiceDescription>
            Receive instant feedback on your recorded speeches to help you improve quickly.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Progress Tracking</ServiceTitle>
          <ServiceDescription>
            Track your progress over time with comprehensive analytics and reports.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Community Support</ServiceTitle>
          <ServiceDescription>
            Join a community of speakers and get support and tips from fellow users.
          </ServiceDescription>
        </ServiceCard>
      </ServiceList>
    </ServicesContainer>
  );
};

export default Services;