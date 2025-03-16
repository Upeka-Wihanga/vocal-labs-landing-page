import React from 'react';
import styled from 'styled-components';

const PricesContainer = styled.div`
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

const PriceCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const PriceCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 300px;
  text-align: left;
`;

const Price = styled.h2`
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 1rem;
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #555;
`;

const Feature = styled.li`
  margin-bottom: 0.5rem;
`;

const Prices = () => {
  return (
    <PricesContainer>
      <Title>Our Pricing Plans</Title>
      <PriceCardContainer>
        <PriceCard>
          <h3>Basic Plan</h3>
          <Price>$9.99/month</Price>
          <Features>
            <Feature>Feature 1</Feature>
            <Feature>Feature 2</Feature>
            <Feature>Feature 3</Feature>
          </Features>
        </PriceCard>
        <PriceCard>
          <h3>Standard Plan</h3>
          <Price>$19.99/month</Price>
          <Features>
            <Feature>Feature 1</Feature>
            <Feature>Feature 2</Feature>
            <Feature>Feature 3</Feature>
            <Feature>Feature 4</Feature>
          </Features>
        </PriceCard>
        <PriceCard>
          <h3>Premium Plan</h3>
          <Price>$29.99/month</Price>
          <Features>
            <Feature>Feature 1</Feature>
            <Feature>Feature 2</Feature>
            <Feature>Feature 3</Feature>
            <Feature>Feature 4</Feature>
            <Feature>Feature 5</Feature>
          </Features>
        </PriceCard>
      </PriceCardContainer>
    </PricesContainer>
  );
};

export default Prices;