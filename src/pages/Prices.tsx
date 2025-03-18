import { useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Define TypeScript interfaces for props
interface DelayProp {
  delay?: string;
}

interface PopularProp {
  popular?: boolean;
}

// Combined props
interface PriceCardProps extends DelayProp, PopularProp {}

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradient = keyframes`
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

const shimmer = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const PricesContainer = styled.div`
  padding: 5rem 2rem;
  text-align: center;
  background: linear-gradient(135deg,rgb(55, 112, 170) 0%, #e9f2f9 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 123, 255, 0.05) 0%, rgba(0, 123, 255, 0) 70%);
    top: -200px;
    right: -100px;
    z-index: 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(111, 66, 193, 0.05) 0%, rgba(111, 66, 193, 0) 70%);
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
  animation: ${gradient} 5s ease infinite;
  font-weight: 800;
  position: relative;
  z-index: 1;
  display: inline-block;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto 4rem;
  line-height: 1.6;
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 1s ease-out;
`;

const PriceCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  & > div {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  & > div:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 50px rgba(0, 123, 255, 0.3);
  }
`;

const PriceCard = styled.div<PriceCardProps>`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 3rem 2.5rem;
  width: 340px;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 0.8s forwards;
  animation-delay: ${props => props.delay || '0s'};
  transform: translateY(30px);

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 123, 255, 0.2);
  }

  ${props => props.popular === true && css`
    border: 2px solid transparent;
    background-clip: padding-box;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
      z-index: -1;
      border-radius: 16px;
      background: linear-gradient(45deg, #007bff, #6f42c1);
    }
  `}
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -15px;
  right: 20px;
  background: linear-gradient(90deg, #007bff, #6f42c1);
  background-size: 200% auto;
  animation: ${gradient} 5s ease infinite;
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
  z-index: 2;
`;

const PlanName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  color: #333;
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

const Price = styled.div`
  margin-bottom: 2rem;
  position: relative;
`;

const Amount = styled.h2<PopularProp>`
  font-size: 3rem;
  background: linear-gradient(90deg, #007bff, #6f42c1);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  margin-bottom: 0.2rem;
  font-weight: 700;
  display: inline-block;
  
  ${props => props.popular === true && css`
    animation: ${gradient} 3s ease infinite;
  `}
`;

const Frequency = styled.span<PopularProp>`
  color: ${props => props.popular ? '#fff' : '#777'};
  font-size: 1.1rem;
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem;
  text-align: left;
`;

const Feature = styled.li<PopularProp>`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  color: ${props => props.popular ? '#fff' : '#555'};
  font-size: 1.05rem;
  line-height: 1.5;
  
  &:before {
    content: "✓";
    color: #007bff;
    margin-right: 10px;
    font-weight: bold;
    font-size: 1.1rem;
    
    ${props => props.popular === true && css`
      color: #6f42c1;
    `}
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Button = styled.button<PopularProp>`
  background: ${props => props.popular === true ? 
    'linear-gradient(90deg, #007bff, #6f42c1)' :
    '#007bff'};
  background-size: ${props => props.popular === true ? '200% auto' : 'auto'};
  color: white;
  border: none;
  padding: 14px 35px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.2);
  z-index: 1; /* Ensure it is above other elements */
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      rgba(255, 255, 255, 0) 0%, 
      rgba(255, 255, 255, 0.3) 50%, 
      rgba(255, 255, 255, 0) 100%);
    animation: ${shimmer} 3s infinite;
    animation-play-state: paused;
    z-index: -1; /* Ensure it is below the button text */
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);
    background-position: ${props => props.popular === true ? 'right center' : ''};
    
    &:before {
      animation-play-state: running;
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 15px rgba(0, 123, 255, 0.2);
  }
`;

const Prices = () => {
  // For staggered animations
  useEffect(() => {
    
    // For scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.price-card');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      popular: false,
      features: [
        "10 speech analyses per month",
        "Basic feedback metrics",
        "Progress tracking",
        "Mobile app access"
      ]
    },
    {
      name: "Standard",
      price: "$19.99",
      popular: true,
      features: [
        "30 speech analyses per month",
        "Advanced feedback metrics",
        "Detailed progress analytics",
        "Community access",
        "Priority support"
      ]
    },
    {
      name: "Premium",
      price: "$29.99",
      popular: false,
      features: [
        "Unlimited speech analyses",
        "All metrics and analytics",
        "Personal coach AI",
        "Export detailed reports",
        "1-on-1 expert consultation",
        "Priority 24/7 support"
      ]
    }
  ];
  
  return (
    <PricesContainer>
      <Title>Choose Your Plan</Title>
      <Subtitle>
        Select the perfect plan for your needs. All plans include core features with different levels of access and functionality.
      </Subtitle>
      <PriceCardContainer>
        {plans.map((plan, index) => (
          <PriceCard 
            key={index}
            className="price-card"
            popular={plan.popular}
            delay={`${0.2 * (index + 1)}s`}
          >
            {plan.popular && <PopularBadge>Most Popular</PopularBadge>}
            <PlanName>{plan.name}</PlanName>
            <Price>
              <Amount popular={plan.popular}>{plan.price}</Amount>
              <Frequency popular={plan.popular}>/month</Frequency>
            </Price>
            <Features>
              {plan.features.map((feature, idx) => (
                <Feature key={idx} popular={plan.popular}>
                  {feature}
                </Feature>
              ))}
            </Features>
            <Button popular={plan.popular}>
              Get Started
            </Button>
          </PriceCard>
        ))}
      </PriceCardContainer>
    </PricesContainer>
  );
};

export default Prices;