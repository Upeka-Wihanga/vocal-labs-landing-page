import React from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
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

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  color: #555;
`;

const Question = styled.h2`
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 0.5rem;
`;

const Answer = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const FAQ = () => {
  return (
    <FAQContainer>
      <Title>Frequently Asked Questions</Title>
      <FAQList>
        <div>
          <Question>What is VocalLabs?</Question>
          <Answer>
            VocalLabs is an AI-powered mobile app designed for competitive speech analysis. It provides detailed feedback and analysis to help speakers improve their performance.
          </Answer>
        </div>
        <div>
          <Question>How does VocalLabs work?</Question>
          <Answer>
            VocalLabs uses advanced AI algorithms to analyze various aspects of speech, including tone, pace, clarity, and more. Users can record their speeches, receive instant feedback, and track their progress over time.
          </Answer>
        </div>
        <div>
          <Question>Who can use VocalLabs?</Question>
          <Answer>
            VocalLabs is designed for anyone who wants to improve their speech performance, including debaters, public speakers, and other competitive speakers.
          </Answer>
        </div>
        <div>
          <Question>Is there a free trial available?</Question>
          <Answer>
            Yes, VocalLabs offers a free trial for new users. You can sign up and start using the app to see how it can help you improve your speech performance.
          </Answer>
        </div>
        <div>
          <Question>How can I contact support?</Question>
          <Answer>
            You can contact our support team through the app or by visiting our website and filling out the contact form. We are here to help you with any questions or issues you may have.
          </Answer>
        </div>
      </FAQList>
    </FAQContainer>
  );
};

export default FAQ;