// Footer.tsx
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterWrapper = styled.footer`
    background: ${({ theme }) => theme.colors.backgroundDark};
    color: white;
    padding: 6rem 2rem 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContent = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`;

const TopSection = styled.div`
    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);
    gap: 4rem;
    margin-bottom: 4rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

const BrandSection = styled.div`
    max-width: 300px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        max-width: 100%;
    }
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const BrandDescription = styled.p`
    color: ${({ theme }) => theme.colors.gray[400]};
    margin-bottom: 2rem;
    line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ColumnTitle = styled.h3`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.gray[400]};
  transition: ${({ theme }) => theme.transitions.default};
  font-size: 0.9rem;

  &:hover {
    color: white;
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.gray[400]};
  font-size: 0.9rem;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <TopSection>
                    <BrandSection>
                        <Logo>VocalLabs</Logo>
                        <BrandDescription>
                            Transform your public speaking with AI-powered analysis and real-time feedback. Join thousands of speakers who have already improved their communication skills.
                        </BrandDescription>
                        <SocialLinks>
                            <SocialIcon href="https://twitter.com" target="_blank" whileHover={{ scale: 1.1 }}>
                                𝕏
                            </SocialIcon>
                            <SocialIcon href="https://linkedin.com" target="_blank" whileHover={{ scale: 1.1 }}>
                                in
                            </SocialIcon>
                            <SocialIcon href="https://github.com" target="_blank" whileHover={{ scale: 1.1 }}>
                                gh
                            </SocialIcon>
                        </SocialLinks>
                    </BrandSection>

                    <FooterColumn>
                        <ColumnTitle>Platform</ColumnTitle>
                        <FooterLink href="/features">Key Features</FooterLink>
                        <FooterLink href="/pricing">Pricing</FooterLink>
                        <FooterLink href="/roadmap">Roadmap</FooterLink>
                        <FooterLink href="/changelog">Changelog</FooterLink>
                    </FooterColumn>

                    <FooterColumn>
                        <ColumnTitle>Resources</ColumnTitle>
                        <FooterLink href="/docs">Documentation</FooterLink>
                        <FooterLink href="/api">API Reference</FooterLink>
                        <FooterLink href="/examples">Examples</FooterLink>
                        <FooterLink href="/blog">Blog</FooterLink>
                    </FooterColumn>

                    <FooterColumn>
                        <ColumnTitle>Company</ColumnTitle>
                        <FooterLink href="/about">About Us</FooterLink>
                        <FooterLink href="/careers">Careers</FooterLink>
                        <FooterLink href="/contact">Contact</FooterLink>
                        <FooterLink href="/partners">Partners</FooterLink>
                    </FooterColumn>
                </TopSection>

                <BottomSection>
                    <Copyright>© {new Date().getFullYear()} VocalLabs. All rights reserved.</Copyright>
                    <LegalLinks>
                        <FooterLink href="/terms">Terms</FooterLink>
                        <FooterLink href="/privacy">Privacy</FooterLink>
                        <FooterLink href="/cookies">Cookies</FooterLink>
                    </LegalLinks>
                </BottomSection>
            </FooterContent>
        </FooterWrapper>
    );
};

export default Footer;