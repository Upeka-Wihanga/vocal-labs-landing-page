import { useState } from 'react';
import styled from 'styled-components';
import partner1 from '../assets/partner1.jpg';
import partner2 from '../assets/partner2.jpg';
import partner3 from '../assets/partner3.jpg';
import partner4 from '../assets/partner4.jpg';
import partner5 from '../assets/partner5.jpg';
import partner6 from '../assets/partner6.jpg';

const PartnersContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg,rgb(95, 145, 196) 0%, #e9f2f9 100%);
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const PartnerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PartnerRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const PartnerCard = styled.div<{ backgroundImage: string }>`
  background: ${({ theme }) => theme.colors.backgroundDark};
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 300px;
  height: 300px; /* Reduced height */
  text-align: left;
  color: white;
  transition: transform 0.3s;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust the transparency here */
    z-index: 1;
  }
`;

const PartnerContent = styled.div`
  position: relative;
  z-index: 2;
`;

const PartnerName = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.accent}; /* Changed color */
  margin-bottom: 1rem;
  margin-top: 5rem; /* Adjusted location */
  text-align: center; /* Centered text */
`;

// const PartnerDescription = styled.p`
//   color: ${({ theme }) => theme.colors.accentLight}; /* Changed color */
//   line-height: 1.6;
// `;

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);

  const partners = [
    { name: 'Didula Fernando',image: partner1 },
    { name: 'Dunuhinga Wihanga',image: partner2 },
    { name: 'Naela Girsy',image: partner3 },
    { name: 'Nisith Dharmawardane',image: partner4 },
    { name: 'Sashini Jayakodi',image: partner5 },
    { name: 'Oshan Fernando',image: partner6 },
  ];

  const handleCardClick = (name: string) => {
    setSelectedPartner(selectedPartner === name ? null : name);
  };

  return (
    <PartnersContainer>
      <Title>Our Partners</Title>
      <PartnerList>
        <PartnerRow>
          {partners.slice(0, 3).map((partner, index) => (
            <PartnerCard
              key={index}
              backgroundImage={partner.image}
              onClick={() => handleCardClick(partner.name)}
            >
              <PartnerContent>
                <PartnerName>{partner.name}</PartnerName>
                {/* {selectedPartner === partner.name && (
                  <PartnerDescription>{partner.description}</PartnerDescription>
                )} */}
              </PartnerContent>
            </PartnerCard>
          ))}
        </PartnerRow>
        <PartnerRow>
          {partners.slice(3).map((partner, index) => (
            <PartnerCard
              key={index}
              backgroundImage={partner.image}
              onClick={() => handleCardClick(partner.name)}
            >
              <PartnerContent>
                <PartnerName>{partner.name}</PartnerName>
                {/* {selectedPartner === partner.name && (
                  <PartnerDescription>{partner.description}</PartnerDescription>
                )} */}
              </PartnerContent>
            </PartnerCard>
          ))}
        </PartnerRow>
      </PartnerList>
    </PartnersContainer>
  );
};

export default Partners;