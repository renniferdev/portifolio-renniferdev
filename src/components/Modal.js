import React, { useState } from 'react';
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

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  border-radius: 0.75rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: zoomIn 0.3s ease-out;

  @keyframes zoomIn {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    max-height: 300px;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--first-color);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &::before {
    content: '✨';
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
  }
`;

const Description = styled.p`
  font-size: 0.938rem;
  color: var(--text-color);
  line-height: 1.8;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FeatureItem = styled.li`
  font-size: 0.938rem;
  color: var(--text-color);
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--first-color);
    font-weight: bold;
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const UpdateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0.02) 100%);
  border-radius: 0.75rem;
  border-left: 4px solid var(--first-color);
  margin-top: 1rem;
`;

const UpdateLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--first-color);
`;

const UpdateDate = styled.span`
  font-size: 0.875rem;
  color: var(--text-color-light);
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.2), transparent);
  margin: 1.5rem 0;
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
          <CloseButton onClick={onClose}>
            <i className="uil uil-times"></i>
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <ImageContainer>
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${title} - Imagem ${index + 1}`}
              />
            ))}
          </ImageContainer>

          <ContentSection>
            <SectionTitle>Novidades</SectionTitle>

            <Description>
              Primeiro lançamento oficial do aplicativo Fill! Agora você pode acompanhar suas máquinas, visualizar recargas e consultar relatórios de forma rápida e simples.
            </Description>

            <Divider />

            <Description>
              Allcanci é um aplicativo desenvolvido para facilitar a gestão escolar, oferecendo acesso rápido e seguro a informações essenciais para escolas e usuários autorizados.
            </Description>

            <SectionTitle style={{ marginTop: '1rem' }}>Principais funcionalidades:</SectionTitle>
            <FeatureList>
              <FeatureItem>Monitoramento em tempo real das máquinas Fill</FeatureItem>
              <FeatureItem>Relatórios de consumo e desempenho</FeatureItem>
              <FeatureItem>Suporte técnico integrado via WhatsApp</FeatureItem>
              <FeatureItem>Interface intuitiva e responsiva</FeatureItem>
            </FeatureList>

            <Divider />

            <Description>
              Desenvolvido pela Allcanci Tecnologia e Desenvolvimento LTDA, o aplicativo garante segurança de dados conforme a LGPD e oferece suporte completo para instituições de ensino.
            </Description>

            <SectionTitle style={{ marginTop: '1rem' }}>Ideal para:</SectionTitle>
            <FeatureList>
              <FeatureItem>Gestores escolares</FeatureItem>
              <FeatureItem>Equipes administrativas</FeatureItem>
              <FeatureItem>Técnicos de suporte</FeatureItem>
            </FeatureList>

            <Description style={{ marginTop: '1rem', fontStyle: 'italic' }}>
              <strong>Requisitos:</strong> Credenciais de acesso fornecidas pela Allcanci.
            </Description>

            <UpdateInfo>
              <span style={{ fontSize: '1.25rem' }}>📅</span>
              <div>
                <UpdateLabel>Atualizada a</UpdateLabel>
                <UpdateDate>17/10/2025</UpdateDate>
              </div>
            </UpdateInfo>
          </ContentSection>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;
