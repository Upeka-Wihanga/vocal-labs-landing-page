import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Define types for props
interface ActiveProps {
  isActive?: boolean;
  delay?: string;
}

// Animations
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

// const pulse = keyframes`
//   0% {
//     box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.4);
//   }
//   70% {
//     box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
//   }
//   100% {
//     box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
//   }
// `;

const gradientBg = keyframes`
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

const FAQContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  min-height: 100vh;
  background: linear-gradient(-45deg, #f8f9fa, #ffffff, #e6f2ff, #f5f7fa);
  background-size: 400% 400%;
  animation: ${gradientBg} 15s ease infinite;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 2.5rem;
  font-weight: 700;
  color: #007bff;
  position: relative;
  display: inline-block;
  animation: ${fadeIn} 1s ease-out;
  
  &:after {
    content: '';
    position: absolute;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #007bff, #6f42c1);
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  color: #333;
`;

const QuestionContainer = styled.div<ActiveProps>`
  margin-bottom: 1.5rem;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  ${props => props.isActive && css`
    box-shadow: 0 8px 25px rgba(0, 123, 255, 0.15);
  `}
`;

const QuestionHeader = styled.div<ActiveProps>`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.isActive ? '#f8f9fa' : '#ffffff'};
  transition: background-color 0.3s ease;
`;

const Question = styled.h2<ActiveProps>`
  font-size: 1.4rem;
  color: #007bff;
  margin: 0;
  font-weight: 600;
  transition: color 0.3s ease;
  
  ${props => props.isActive && css`
    color: #0056b3;
  `}
`;

const ToggleIcon = styled.span<ActiveProps>`
  font-size: 1.5rem;
  color: #007bff;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  
  &:before {
    content: '${props => props.isActive ? '-' : '+'}';
    transition: all 0.3s ease;
  }
  
  ${props => props.isActive && css`
    color: #0056b3;
  `}
`;

const AnswerContainer = styled.div<ActiveProps>`
  height: ${props => props.isActive ? 'auto' : '0'};
  padding: ${props => props.isActive ? '0 1.5rem 1.5rem' : '0 1.5rem'};
  opacity: ${props => props.isActive ? 1 : 0};
  visibility: ${props => props.isActive ? 'visible' : 'hidden'};
  transform: translateY(${props => props.isActive ? '0' : '-10px'});
  transition: all 0.3s ease-in-out;
`;

const Answer = styled.p`
  margin: 0;
  padding: 0.5rem 0;
  line-height: 1.8;
  font-size: 1.1rem;
  color: #4a5568;
`;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is VocalLabs?",
      answer: "VocalLabs is an AI-powered mobile app designed for competitive speech analysis. It provides detailed feedback and analysis to help speakers improve their performance."
    },
    {
      question: "How does VocalLabs work?",
      answer: "VocalLabs uses advanced AI algorithms to analyze various aspects of speech, including tone, pace, clarity, and more. Users can record their speeches, receive instant feedback, and track their progress over time."
    },
    {
      question: "Who can use VocalLabs?",
      answer: "VocalLabs is designed for anyone who wants to improve their speech performance, including debaters, public speakers, and other competitive speakers."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, VocalLabs offers a free trial for new users. You can sign up and start using the app to see how it can help you improve your speech performance."
    },
    {
      question: "How can I contact support?",
      answer: "You can contact our support team through the app or by visiting our website and filling out the contact form. We are here to help you with any questions or issues you may have."
    }
  ];

  return (
    <FAQContainer>
      <Title>Frequently Asked Questions</Title>
      <FAQList>
        {faqs.map((faq, index) => (
          <QuestionContainer 
            key={index} 
            isActive={activeIndex === index}
            onClick={() => toggleQuestion(index)}
            delay={`${0.1 * (index + 1)}s`}
          >
            <QuestionHeader isActive={activeIndex === index}>
              <Question isActive={activeIndex === index}>{faq.question}</Question>
              <ToggleIcon isActive={activeIndex === index} />
            </QuestionHeader>
            <AnswerContainer isActive={activeIndex === index}>
              <Answer>{faq.answer}</Answer>
            </AnswerContainer>
          </QuestionContainer>
        ))}
      </FAQList>
    </FAQContainer>
  );
};

export default FAQ;