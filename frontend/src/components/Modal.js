import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
  backdrop-filter: blur(4px);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background-color: var(--container-color);
  border-radius: 1.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: slideUp 0.3s ease-out;
  overflow-y: auto;

  @keyframes slideUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    max-width: 95vw;
    border-radius: 1rem;
  }

  @media (max-width: 480px) {
    max-width: 100vw;
    width: 100vw;
    border-radius: 0;
    max-height: 100vh;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(124, 58, 237, 0.1);
  position: sticky;
  top: 0;
  background-color: var(--container-color);
  z-index: 10;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--title-color);
  margin: 0;
  background: linear-gradient(135deg, var(--first-color) 0%, var(--first-color-alt) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:hover {
    background-color: rgba(124, 58, 237, 0.1);
    color: var(--first-color);
    transform: rotate(90deg);
  }
`;

const ModalBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }

  /* Scrollbar customizado */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(124, 58, 237, 0.05);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(124, 58, 237, 0.3);
    border-radius: 10px;

    &:hover {
      background: rgba(124, 58, 237, 0.5);
    }
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.2), transparent);
  margin: 1.5rem 0;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(124, 58, 237, 0.03) 100%);
  border-radius: 1rem;
  border: 2px solid rgba(124, 58, 237, 0.2);
  margin: 1.5rem 0;
`;

const LoginDescription = styled.p`
  font-size: 0.938rem;
  color: var(--text-color);
  line-height: 1.8;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const CredentialsInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(124, 58, 237, 0.1);
  border-radius: 0.75rem;
  border-left: 4px solid var(--first-color);
`;

const CredentialsText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const CredentialsLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--first-color);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CredentialsValue = styled.span`
  font-size: 0.938rem;
  font-weight: 600;
  color: var(--title-color);
`;

const AccessLinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const AccessLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  background: linear-gradient(135deg, var(--first-color) 0%, var(--first-color-alt) 100%);
  color: #fff;
  text-decoration: none;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 0.938rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(124, 58, 237, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    padding: 0.875rem;
  }
`;

const ComingSoonBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.08) 100%);
  border: 1px solid rgba(124, 58, 237, 0.3);
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--first-color);
  margin-top: 1rem;
`;

function Modal({ isOpen, onClose, title, images }) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose} aria-label="Fechar">
            <i className="uil uil-times"></i>
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <LoginContainer>
            <LoginDescription>
              Este aplicativo requer autenticação com usuário e senha. As credenciais de acesso serão disponibilizadas em breve!
            </LoginDescription>

            <CredentialsInfo>
              <span style={{ fontSize: '1.5rem' }}>🔐</span>
              <CredentialsText>
                <CredentialsLabel>Status</CredentialsLabel>
                <CredentialsValue>Credenciais em breve</CredentialsValue>
              </CredentialsText>
            </CredentialsInfo>

            <Divider />

            <LoginDescription style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              Acesse o aplicativo através de:
            </LoginDescription>

            <AccessLinksContainer>
              <AccessLink 
                href="https://allcanci.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="uil uil-globe"></i>
                Acessar Web
              </AccessLink>
              <AccessLink
                href="https://play.google.com/store/apps/details?id=com.allcanci.Allcanci&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-android"></i>
                Google Play
              </AccessLink>
            </AccessLinksContainer>

            <ComingSoonBadge>
              <i className="uil uil-info-circle"></i>
              Logo liberaremos uma conta de acesso para você!
            </ComingSoonBadge>
          </LoginContainer>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;
